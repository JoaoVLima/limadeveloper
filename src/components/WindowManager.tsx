import { useEffect, useMemo, useRef, useState } from 'react'
import { type SlotItemMapArray, type Swapy, utils } from 'swapy'
import { createSwapy } from 'swapy'
import Window from './Window'

type Item = {
    id: string
    title: string
    content?: React.ReactNode
    withHandle?: boolean
}

const initialItems: Item[] = [
    { id: '1', title: 'Window 1', content: <p>Content 1</p>, withHandle: true },
    { id: '2', title: 'Window 2', content: <p>Content 2</p>, withHandle: true },
    { id: '3', title: 'Window 3', content: <p>Content 3</p>, withHandle: true },
    { id: '4', title: 'Window 4', content: <p>Content 4</p>, withHandle: true },
]

let idCounter = 5

function WindowManager() {
    const [items, setItems] = useState<Item[]>(initialItems)
    const [slotItemMap, setSlotItemMap] = useState<SlotItemMapArray>(
        utils.initSlotItemMap(items, 'id')
    )
    const slottedItems = useMemo(
        () => utils.toSlottedItems(items, 'id', slotItemMap),
        [items, slotItemMap]
    )
    const swapyRef = useRef<Swapy | null>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    // Keep Swapy dynamic when items change
    useEffect(() => utils.dynamicSwapy(swapyRef.current, items, 'id', slotItemMap, setSlotItemMap), [items])

    useEffect(() => {
        swapyRef.current = createSwapy(containerRef.current!, {
            manualSwap: true,
            animation: 'dynamic',
        })

        swapyRef.current.onSwap((event) => {
            setSlotItemMap(event.newSlotItemMap.asArray)
        })

        return () => swapyRef.current?.destroy()
    }, [])

    const handleClose = (id: string) => {
        setItems((prev) => prev.filter((i) => i.id !== id))
    }

    const addWindow = () => {
        if (items.length >= 4) return // max 4 windows

        const newItem: Item = {
            id: `${idCounter}`,
            title: `Window ${idCounter}`,
            content: <p>New window content {idCounter}</p>,
            withHandle: true,
        }
        setItems([...items, newItem])
        idCounter++
    }

    return (
        <div
            className="container grid grid-cols-2 grid-rows-2 gap-2 p-2"
            ref={containerRef}
            style={{ height: '100vh' }}
        >
            {slottedItems.map(({ slotId, itemId, item }) => (
                <div key={slotId} className="slot" data-swapy-slot={slotId}>
                    {item && (
                        <Window
                            id={itemId}
                            title={item.title}
                            withHandle={item.withHandle}
                            onClose={handleClose}
                        >
                            {item.content ?? <p>Empty content</p>}
                        </Window>
                    )}
                </div>
            ))}

            {/* Add new window button (only if less than 4) */}
            {items.length < 4 && (
                <div
                    className="item item--add border rounded shadow-md p-2 m-2 bg-gray-700 text-white cursor-pointer flex justify-center items-center"
                    onClick={addWindow}
                >
                    +
                </div>
            )}
        </div>
    )
}

export default WindowManager
