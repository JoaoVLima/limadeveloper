type WindowProps = {
    id: string
    title: string
    withHandle?: boolean
    children?: React.ReactNode
}

function Window({ id, title, withHandle, children }: WindowProps) {
    return (
        <div className={`item item-${id} border rounded shadow-md p-2 m-2 bg-black`} data-swapy-item={id}>
            {withHandle && <div className="handle bg-gray-300 p-1 mb-2 cursor-grab" data-swapy-handle>Drag</div>}
            <div className="window-title font-bold mb-1">{title}</div>
            <div className="window-content">{children}</div>
        </div>
    )
}

export default Window
