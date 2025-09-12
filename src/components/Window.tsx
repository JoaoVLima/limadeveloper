import { useState } from 'react'

type WindowProps = {
    id: string
    title: string
    withHandle?: boolean
    children?: React.ReactNode
    onClose?: (id: string) => void
}

function Window({ id, title, withHandle, children, onClose }: WindowProps) {
    const [isMaximized, setIsMaximized] = useState(false)

    const toggleMaximize = () => setIsMaximized(!isMaximized)

    return (
        <div
            className={`item item-${id} border rounded shadow-md p-2 m-2 bg-black text-white flex flex-col`}
            data-swapy-item={id}
            style={{
                width: isMaximized ? '100%' : undefined,
                height: isMaximized ? '100%' : undefined,
            }}
        >
            {/* Header with title and buttons */}
            <div
                className={`flex justify-between items-center mb-1 ${
                    withHandle ? 'cursor-grab bg-gray-800 p-1 px-2 rounded' : 'p-1 px-2'
                }`}
                data-swapy-handle={withHandle ? true : undefined}
            >
                <span className="font-bold">{title}</span>
                <div className="flex gap-1">
                    <button
                        onClick={toggleMaximize}
                        className="w-6 h-6 flex items-center justify-center bg-gray-700 rounded hover:bg-gray-600"
                        title={isMaximized ? 'Restore' : 'Maximize'}
                    >
                        {isMaximized ? '🗗' : '🗖'}
                    </button>
                    <button
                        onClick={() => onClose?.(id)}
                        className="w-6 h-6 flex items-center justify-center bg-red-600 text-white rounded hover:bg-red-700"
                        title="Close"
                    >
                        ✕
                    </button>
                </div>
            </div>

            {/* Window content */}
            <div className="window-content flex-1 overflow-auto">{children}</div>
        </div>
    )
}

export default Window
