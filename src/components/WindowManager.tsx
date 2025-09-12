import {type JSX, useEffect, useMemo, useRef, useState} from 'react'
import {type SlotItemMapArray, type Swapy, utils } from 'swapy'
import { createSwapy } from 'swapy'
import Window from "./Window.tsx";

type Item = {
    id: string
    title: string
    content?: JSX.Element;
}

const initialItems: Item[] = [
    { id: '1', title: '1', content: <div className="size-5 bg-amber-300"></div> },
    { id: '2', title: '2', content: <div className="size-5 bg-amber-300"></div> },
    { id: '3', title: '3', content: <div className="size-5 bg-amber-300"></div> },
    { id: '4', title: '4', content: <div className="size-5 bg-amber-300"></div> },
]
let id = 5

function WindowManager() {
    const [items, setItems] = useState<Item[]>(initialItems)
    const [slotItemMap, setSlotItemMap] = useState<SlotItemMapArray>(utils.initSlotItemMap(items, 'id'))
    const slottedItems = useMemo(() => utils.toSlottedItems(items, 'id', slotItemMap), [items, slotItemMap])
    const swapyRef = useRef<Swapy | null>(null)

    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => utils.dynamicSwapy(swapyRef.current, items, 'id', slotItemMap, setSlotItemMap), [items, slotItemMap])

    useEffect(() => {
        swapyRef.current = createSwapy(containerRef.current!, {
            manualSwap: true,
            // animation: 'dynamic'
            // autoScrollOnDrag: true,
            // swapMode: 'drop',
            // enabled: true,
            // dragAxis: 'x',
            // dragOnHold: true
        })

        swapyRef.current.onSwap((event) => {
            setSlotItemMap(event.newSlotItemMap.asArray)
        })

        return () => swapyRef.current?.destroy()
    }, [])

    const handleClose = (id: string) => {
        setItems((prev) => prev.filter((i) => i.id !== id))
    }

    return (
        <div className="container grid grid-cols-2 grid-rows-2 gap-2 p-2" ref={containerRef}>
                {slottedItems.map(({ slotId, itemId, item }) => (
                    <div className="slot" key={slotId} data-swapy-slot={slotId}>
                        {item &&
                            <Window id={itemId} title={item.title} onClose={handleClose}>
                                {item.content ?? <p>...</p>}
                            </Window>
                        }
                    </div>
                ))}
            <div className="item item--add" onClick={() => {
                const newItem: Item = { id: `${id}`, title: `${id}`}
                setItems([...items, newItem])
                id++
            }}>+</div>
        </div>
    )
}

export default WindowManager