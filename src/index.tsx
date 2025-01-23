import React from 'react';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import './style.css'
import {Home} from './home.tsx';

function init() {
    const home = document.getElementById('home') as HTMLDivElement;
    const root = createRoot(home);
    root.render(
        <StrictMode>
            <Home/>
        </StrictMode>
    );
}

init();
