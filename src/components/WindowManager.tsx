import {
    DndContext,
    closestCenter,
    PointerSensor,
    useSensor,
    useSensors,
    type DragEndEvent,
} from "@dnd-kit/core";
import { arrayMove, SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { type ReactNode, useState } from "react";

type Item = {
    id: string;
    title: string;
    content?: ReactNode;
};

const initialItems: Item[] = [
    { id: "1", title: "Window 1", content: <p>Content 1</p> },
    { id: "2", title: "Window 1", content: <p>Content 1</p> },
    { id: "3", title: "Window 1", content: <p>Content 1</p> },
    { id: "4", title: "Window 1", content: <p>Content 1</p> },
];

let nextId = 5;

export default function WindowManager() {
    const [items, setItems] = useState<Item[]>(initialItems);

    const sensors = useSensors(
        useSensor(PointerSensor, { activationConstraint: { distance: 5 } })
    );

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        if (!over || active.id === over.id) return;

        const oldIndex = items.findIndex((i) => i.id === active.id);
        const newIndex = items.findIndex((i) => i.id === over.id);
        setItems(arrayMove(items, oldIndex, newIndex));
    };

    const handleAdd = () => {
        if (items.length >= 4) return;
        const newItem: Item = {
            id: `${nextId}`,
            title: `Window ${nextId}`,
            content: <p>Content {nextId}</p>,
        };
        setItems((prev) => [...prev, newItem]);
        nextId++;
    };

    const handleClose = (id: string) => {
        setItems((prev) => prev.filter((i) => i.id !== id));
    };

    // Determine column/row span classes based on number of items and index
    const getSpanClass = (index: number, total: number) => {
        if (total === 1) return "col-span-2 row-span-2";
        if (total === 2) return "col-span-1 row-span-2";
        if (total === 3) return index === 0 ? "col-span-1 row-span-2" : "col-span-1 row-span-1";
        return "col-span-1 row-span-1"; // 4 items = quarters
    };

    return (
        <div className="max-w-[800px] mx-auto flex flex-col gap-4">
            <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
            >
                <SortableContext items={items}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-2 gap-4 w-full h-[400px]">
                        {items.map((item, index) => (
                            <WindowItem
                                key={item.id}
                                item={item}
                                onClose={handleClose}
                                spanClass={getSpanClass(index, items.length)}
                            />
                        ))}
                    </div>
                </SortableContext>
            </DndContext>

            <button
                className="px-4 py-2 bg-indigo-700 text-white rounded hover:bg-indigo-800"
                onClick={handleAdd}
            >
                Add Window
            </button>
        </div>
    );
}

function WindowItem({
                        item,
                        onClose,
                        spanClass,
                    }: {
    item: Item;
    onClose: (id: string) => void;
    spanClass: string;
}) {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id: item.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            className={`relative flex flex-col bg-gray-800 text-white rounded shadow-lg select-none ${spanClass}`}
        >
            {/* Title bar: drag handle */}
            <div
                {...listeners}
                className="bg-gray-700 px-4 py-2 flex justify-between items-center cursor-grab rounded-t"
            >
                <span className="font-bold">{item.title}</span>
                <button
                    className="text-red-500 font-bold hover:text-red-400"
                    onClick={(e) => {
                        e.stopPropagation();
                        onClose(item.id);
                    }}
                >
                    X
                </button>
            </div>

            {/* Content */}
            <div className="p-4 flex-1">{item.content}</div>
        </div>
    );
}
