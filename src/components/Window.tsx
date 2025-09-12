type WindowProps = {
    id: string
    title: string
    withHandle?: boolean
    children?: React.ReactNode
    onClose?: (id: string) => void
}

function Window({ id, title, children, onClose }: WindowProps) {
    return (
        <div className="item" data-swapy-item={id} key={id}>
            <span>{title}</span>
            {children}
            <span className="delete" data-swapy-no-drag onClick={() => onClose ? onClose(id) : console.log(`Trying to delete item ${id}`)}>X</span>
        </div>
    )
}

export default Window
