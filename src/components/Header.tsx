// import {useTranslation} from 'react-i18next'

function Header() {
    // const {t} = useTranslation('landing_page')

    return (
        <header className="sticky top-0 bg-black/50 z-50">
            <nav className="mx-auto px-4">
                <ul className="flex space-x-6 py-4 text-white font-medium">
                    <li className="bg-neutral-700/50 py-1 px-4 rounded-md cursor-pointer">1(home)</li>
                    <li className="bg-neutral-900/50 py-1 px-4 rounded-md cursor-pointer">2(something)</li>
                    <li className="bg-neutral-900/50 py-1 px-4 rounded-md cursor-pointer">3(contact)</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
