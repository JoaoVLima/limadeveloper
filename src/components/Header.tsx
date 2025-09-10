import { useTranslation } from 'react-i18next'
import i18n from "../i18n.ts";

type HeaderProps = {
    activeIndex: number // which li should be active (0, 1, 2...)
}

function Header({ activeIndex }: HeaderProps) {
    const { t } = useTranslation('landing_page', { keyPrefix: 'header' })
    const menuItems = [t('1(home)'), t('2(something)'), t('3(contact)')]
    const today = new Date().toLocaleString(i18n.language, {
        weekday: 'short',  // e.g., Mon, Tue
        month: 'short',    // e.g., Jan, Feb
        day: 'numeric',    // e.g., 10
        hour: '2-digit',   // e.g., 08
        minute: '2-digit', // e.g., 34
    })

    return (
        <header className="sticky top-0 bg-black/50 z-50">
            <nav className="mx-auto max-w-7xl">
                <ul className="flex flex-nowrap overflow-x-auto no-scrollbar select-none space-x-6 py-4 text-white font-medium items-center">
                    {/* OS Icon */}
                    <li className="flex-shrink-0 py-1 px-4 rounded-md">🌐</li>

                    {/* Menu items */}
                    {menuItems.map((item, index) => (
                        <li
                            key={item}
                            className={`flex-shrink-0 py-1 px-4 rounded-md cursor-pointer transition-colors
                                ${
                                    index === activeIndex
                                        ? 'bg-neutral-700/50 text-white'
                                        : 'bg-neutral-900/50 text-neutral-300 hover:bg-neutral-700/40 hover:text-white'
                                }`}
                        >
                            {item}
                        </li>
                    ))}

                    {/* Date */}
                    <li className="flex-shrink-0 py-1 px-4 rounded-md bg-neutral-700/50 text-neutral-300 ml-auto">
                        {today}
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
