import React, {useState} from 'react';

import {InstagraFeed} from './Themes/Instagra/instagrafeed.tsx';
import {ZapZapFeed} from './Themes/ZapZap/zapzapfeed.tsx';

function getTheme(theme: string) {
    switch (theme) {
        case 'instagra':
            return <InstagraFeed/>;
        default:
            return <ZapZapFeed/>;
    }
}

export function Home() {
    const [theme, setTheme] = useState('instagra');

    return (
        <>
            <div className="flex justify-center space-x-4 mb-8">
                <button
                    onClick={() => setTheme('instagra')}
                    className={`px-4 py-2 rounded-lg ${theme === 'instagra' ? 'bg-gradient-to-r from-yellow-400 to-pink-500 text-white' : 'bg-gray-200'}`}
                >
                    Instagrã
                </button>
                <button
                    onClick={() => setTheme('zapzap')}
                    className={`px-4 py-2 rounded-lg ${theme === 'zapzap' ? 'bg-[#25D366] text-white' : 'bg-gray-200'}`}
                >
                    ZapZap
                </button>
            </div>
            {getTheme(theme)}
        </>
    );
}
