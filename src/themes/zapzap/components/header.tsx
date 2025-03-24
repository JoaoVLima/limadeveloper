import React from "react";

export function Header() {
    return (
        <header className={'w-full max-w-md select-none h-12 fixed top-0 px-4 py-2 text-black dark:text-white bg-white dark:bg-black'}>
            <nav>
                <ol className={'flex flex-row overflow-hidden truncate'}>
                    <li className={'basis-1/3 flex flex-row items-center justify-start'}>
                        <h1 className={'text-green-500 dark:text-white text-2xl bg-inherit'}>
                            Whatsapp
                        </h1>
                    </li>
                    <li className={'basis-2/3 flex flex-row items-center justify-end'}>
                        <ol className={'flex flex-row items-center justify-end gap-6'}>
                            <li>📷</li>
                            <li className={'font-black [writing-mode:vertical-lr]'}>...</li>
                        </ol>
                    </li>
                </ol>
            </nav>
        </header>
    )
}

