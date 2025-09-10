import { useTranslation } from 'react-i18next'
import { useEffect, useRef } from 'react'
import type { Swapy } from 'swapy'
import { createSwapy } from 'swapy'
import Window from './Window'

function WindowManager() {
    const { t } = useTranslation('landing_page', { keyPrefix: 'windowmanager' })
    const swapyRef = useRef<Swapy | null>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (containerRef.current) {
            swapyRef.current = createSwapy(containerRef.current, {
                // animation: 'dynamic'
                // swapMode: 'drop',
                // autoScrollOnDrag: true,
                // enabled: true,
                // dragAxis: 'x',
                // dragOnHold: true
            })

            // swapyRef.current.enable(false)
            // swapyRef.current.destroy()
            // console.log(swapyRef.current.slotItemMap())

            swapyRef.current.onBeforeSwap((event) => {
                console.log('beforeSwap', event)
                // This is for dynamically enabling and disabling swapping.
                // Return true to allow swapping, and return false to prevent swapping.
                return true
            })

            swapyRef.current.onSwapStart((event) => {
                console.log('start', event);
            })
            swapyRef.current.onSwap((event) => {
                console.log('swap', event);
            })
            swapyRef.current.onSwapEnd((event) => {
                console.log('end', event);
            })
        }
        return () => {
            swapyRef.current?.destroy()
        }
    }, [])

    return (
        <div className="container" ref={containerRef}>
            <div className="slot top" data-swapy-slot="a">
                <Window id="a" title={t("Window A")}>
                    <p>This is the content of window A</p>
                    <button className="bg-blue-500 text-white px-2 py-1 mt-2 rounded">Click Me</button>
                </Window>
            </div>

            <div className="middle flex gap-4">
                <div className="slot middle-left" data-swapy-slot="b">
                    <Window id="b" title={t("Window B")} withHandle>
                        <ul className="list-disc pl-4">
                            <li>Item 1</li>
                            <li>Item 2</li>
                            <li>Item 3</li>
                        </ul>
                    </Window>
                </div>
                <div className="slot middle-right" data-swapy-slot="c">
                    <Window id="c" title={t("Window C")}>
                        <p>Some text inside window C</p>
                    </Window>
                </div>
            </div>

            <div className="slot bottom" data-swapy-slot="d">
                <Window id="d" title={t("Window D")}>
                    <p>Window D content goes here</p>
                </Window>
            </div>
        </div>
    )
}

export default WindowManager
