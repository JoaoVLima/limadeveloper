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
        <div className="container grid grid-rows-[1fr_2fr_1fr] grid-cols-2 gap-2 p-2" ref={containerRef} style={{height: '100vh'}}>

            {/* Terminal window */}
            <div className="slot top-left" data-swapy-slot="terminal">
                <Window id="terminal" title={t("Terminal")} withHandle>
                    <div className="bg-black text-green-400 font-mono p-2 h-40 overflow-y-auto">
                        <p>$ echo "Hello World"</p>
                        <p>Hello World</p>
                        <p>$ ls</p>
                        <p>file1.txt  file2.txt  script.js</p>
                    </div>
                </Window>
            </div>

            {/* GitHub frame window */}
            <div className="slot top-right" data-swapy-slot="github">
                <Window id="github" title={t("GitHub Frame")} withHandle>
                    <iframe
                        src="https://github.com"
                        className="w-full h-40 border"
                        title="GitHub"
                    />
                </Window>
            </div>

            {/* Regular window */}
            <div className="slot bottom-left" data-swapy-slot="regular">
                <Window id="regular" title={t("Notes")}>
                    <p>This is a regular notes window</p>
                    <ul className="list-disc pl-4">
                        <li>Task 1</li>
                        <li>Task 2</li>
                        <li>Task 3</li>
                    </ul>
                </Window>
            </div>

            {/* Extra slot for flexibility */}
            <div className="slot bottom-right" data-swapy-slot="extra">
                <Window id="extra" title="Extra Window">
                    <p>You can put any content here</p>
                </Window>
            </div>

        </div>
    )
}

export default WindowManager
