import { type ReactNode, useEffect, useMemo, useRef, useState } from 'react'
import {type AnimationType, type SlotItemMapArray, type Swapy, utils} from 'swapy'
import { createSwapy } from 'swapy'

type Item = {
    id: string
    title: string
    content?: ReactNode
}

const initialItems: Item[] = [
    { id: '1', title: '1', content: <p>1</p>},
    { id: '2', title: '2', content: <p>2</p>},
    { id: '3', title: '3', content: <p>3</p>},
    { id: '4', title: '4', content: <p>4</p>},
]

let id = 5

function WindowManager() {
    const [items, setItems] = useState<Item[]>(initialItems)
    const [slotItemMap, setSlotItemMap] = useState<SlotItemMapArray>(utils.initSlotItemMap(items, 'id'))
    const slottedItems = useMemo(() => utils.toSlottedItems(items, 'id', slotItemMap), [items, slotItemMap])
    const swapyRef = useRef<Swapy | null>(null)

    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => utils.dynamicSwapy(swapyRef.current, items, 'id', slotItemMap, setSlotItemMap), [items]) // [items] // dont put [items, slotItemMap]

    useEffect(() => {
        swapyRef.current = createSwapy(containerRef.current!, {
            animation: 'dynamic',
            enabled: true,
            swapMode: 'hover',
            dragOnHold: false,
            autoScrollOnDrag: false,
            dragAxis: 'both',
            manualSwap: true,

        })

        swapyRef.current.onSwap((event) => {
            setSlotItemMap(event.newSlotItemMap.asArray)
        })

        return () => {
            swapyRef.current?.destroy()
        }
    }, [])

    const handleClose = (id: string) => {
        setItems((prev) => prev.filter((i) => i.id !== id))
    }

    return (
        <div className="max-w-[800px] w-full flex flex-col gap-2 mx-auto" ref={containerRef}>
            <div className="grid grid-cols-[2fr_1fr] md:grid-cols-[1fr_1fr] gap-2">
                {slottedItems.map(({ slotId, itemId, item }) => (
                    <div
                        className="rounded-xl h-[100px] data-[swapy-highlighted]:bg-white/20"
                        key={slotId}
                        data-swapy-slot={slotId}
                    >
                        {item &&
                            <div
                                className="relative flex flex-col items-center justify-center bg-indigo-700 px-0 py-5 rounded-xl w-full h-full"
                                data-swapy-item={itemId}
                                key={itemId}
                            >
                                <span>{item.title}</span>
                                <span
                                    className="absolute right-5 top-2.5 h-[38px] w-[38px] rounded-full bg-[hsl(244.5,57.9%,45.6%)] bg-[url('./delete.svg')] bg-[length:22px_22px] bg-center bg-no-repeat cursor-pointer hover:bg-[hsl(244.5,57.9%,40.6%)]"
                                    data-swapy-no-drag
                                    onClick={() => {
                                        handleClose(itemId)
                                    }}
                                ></span>
                            </div>
                        }
                    </div>
                ))}
            </div>
            <div
                className="flex items-center justify-center border-4 border-indigo-700 rounded-xl cursor-pointer select-none hover:bg-indigo-700/80"
                onClick={() => {
                    const newItem: Item = { id: `${id}`, title: `${id}` }
                    setItems([...items, newItem])
                    id++
                }}
            >
                +
            </div>
        </div>
    )
}

export default WindowManager