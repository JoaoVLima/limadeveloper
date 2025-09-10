import {useTranslation} from "react-i18next";

type HeaderProps = {
    activeIndex: number; // which li should be active (0, 1, 2...)
}

function Header({activeIndex}: HeaderProps) {
    const {t} = useTranslation('landing_page', {keyPrefix: "header"})
    const menuItems = [
        t("1(home)"),
        t("2(something)"),
        t("3(contact)")
    ];

    return (
        <header className="sticky top-0 bg-black/50 z-50">
            <nav className="mx-auto px-4">
                <ul className="flex flex-nowrap overflow-x-auto no-scrollbar select-none space-x-6 py-4 text-white font-medium">
                    {menuItems.map((key, index) => (
                        <li
                            key={key}
                            className={`flex-shrink-0 py-1 px-4 rounded-md cursor-pointer transition-colors
                                ${index === activeIndex
                                ? "bg-neutral-700/50 text-white"
                                : "bg-neutral-900/50 text-gray-300 hover:bg-neutral-700/40 hover:text-white"
                            }`}
                        >
                            {t(key)}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;