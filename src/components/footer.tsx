import React from 'react';

export function Footer() {
    return (
        <footer className={'w-full max-w-md select-none px-4 py-2 fixed bottom-0 text-center text-[0.6rem] leading-[0.6rem] text-black dark:text-white'}>
            <p>&copy; {new Date().getFullYear().toString()} LimaDeveloper. Licensed under the MIT License.</p>
            <p>See <a href="LICENSE">LICENSE</a> for details.</p>
        </footer>
    )
}
