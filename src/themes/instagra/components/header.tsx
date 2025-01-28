import React from "react";

import {useTheme} from '../../../context.tsx';

export function Header() {
    const {theme, setTheme} = useTheme();

    return (
        <>
            <header className={'w-full select-none h-12 fixed p-4'}>
                <nav>
                    <ul className={'flex flex-row overflow-hidden truncate'}>
                        <li className={'basis-1/3 flex flex-row items-center justify-start'}>
                            <select className={'text-black dark:text-white text-2xl bg-white dark:bg-black'}
                                    onChange={(e) => setTheme(e.target.value)}>
                                <option value="instagra" selected>Instagrã</option>
                                <option value="zapzap">ZapZap</option>
                            </select>
                        </li>
                        <li className={'basis-2/3'}>
                            <ol className={'flex flex-row items-center justify-end gap-6'}>
                                <li>📷</li>
                                <li className={'font-black [writing-mode:vertical-lr]'}>...</li>
                            </ol>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

