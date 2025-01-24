import React, {useState} from 'react';

import {Footer} from './components/footer.tsx';

import {InstagraFeed} from './themes/instagra/instagrafeed.tsx';
import {ZapZapFeed} from './themes/zapzap/zapzapfeed.tsx';

function getThemedFeed(theme: string) {
    switch (theme) {
        case 'instagra':
            return <InstagraFeed/>;
        default:
            return <ZapZapFeed/>;
    }
}

export function Home() {
    const [theme, setTheme] = useState('zapzap');

    return (
        <>
            {getThemedFeed(theme)}
            {/*<div className='flex justify-center'>*/}
            {/*    <button*/}
            {/*        onClick={() => setTheme('instagra')}*/}
            {/*        className={`px-4 py-2 rounded-lg ${theme === 'instagra' ? 'bg-gradient-to-r from-yellow-400 to-pink-500 text-white' : 'bg-gray-200'}`}*/}
            {/*    >*/}
            {/*        Instagrã*/}
            {/*    </button>*/}
            {/*    <button*/}
            {/*        onClick={() => setTheme('zapzap')}*/}
            {/*        className={`px-4 py-2 rounded-lg ${theme === 'zapzap' ? 'bg-[#25D366] text-white' : 'bg-gray-200'}`}*/}
            {/*    >*/}
            {/*        ZapZap*/}
            {/*    </button>*/}
            {/*</div>*/}
            {/*<Footer/>*/}
        </>
    );
}
