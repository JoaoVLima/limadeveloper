import { useState } from "react";

export default function TilingWMWebsite() {
    const [workspace, setWorkspace] = useState(1);
    const [focused, setFocused] = useState(null);

    const windows = [
        {
            id: "term",
            title: "$> neofetch",
            area: "1 / 1 / 2 / 2",
            content: (
                <div className="font-mono text-sm text-green-300">
          <pre className="whitespace-pre-wrap">
{`nome: Joao Lima
email: joao@limadeveloper.com
telefone: +55 (41) 99627-7071
github: github.com/JoaoVLima
linkedin: linkedin.com/in/limadeveloper

skills:
 - Python (Django)
 - React, TypeScript
 - Postgres, Redis, Docker
 - AWS / GCP / ETL`}
          </pre>
                </div>
            ),
        },
        {
            id: "right-large",
            title: "Workspace — Preview",
            area: "1 / 2 / 3 / 3",
            content: (
                <div className="h-full flex items-center justify-center text-gray-200">
                    <div className="max-w-lg text-center p-6">
                        <h3 className="text-2xl font-semibold">Lima Developer</h3>
                        <p className="mt-2 text-gray-300">Full-stack developer • BI • Integrations</p>
                    </div>
                </div>
            ),
        },
        {
            id: "bottom-left",
            title: "Notes",
            area: "2 / 1 / 3 / 2",
            content: (
                <div className="text-gray-200 p-4">Quick notes or project list go here.</div>
            ),
        },
        {
            id: "bottom-right",
            title: "Panels",
            area: "2 / 2 / 3 / 3",
            content: (
                <div className="text-gray-200 p-4">Other widgets: Calendar, Tasks, Logs</div>
            ),
        },
    ];

    return (
        <div
            className="min-h-screen w-full text-white antialiased"
            style={{
                backgroundImage: "url('/background.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Top bar */}
            <div className="backdrop-blur-sm bg-black/40 border-b border-white/10">
                <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="px-3 py-1 rounded-md bg-white/10 text-sm">◎ 1(home)</div>
                        <div className="px-3 py-1 rounded-md bg-white/5 text-sm">2(something)</div>
                        <div className="px-3 py-1 rounded-md bg-white/5 text-sm">3(contact)</div>
                    </div>

                    <div className="text-sm text-gray-300">Lima Developer</div>

                    <div className="flex items-center gap-4 text-sm text-gray-300">
                        <div className="flex items-center gap-2">
                            <button
                                className={`px-2 py-1 rounded-md ${workspace === 1 ? "bg-white/20" : "bg-transparent"}`}
                                onClick={() => setWorkspace(1)}
                            >
                                1
                            </button>
                            <button
                                className={`px-2 py-1 rounded-md ${workspace === 2 ? "bg-white/20" : "bg-transparent"}`}
                                onClick={() => setWorkspace(2)}
                            >
                                2
                            </button>
                            <button
                                className={`px-2 py-1 rounded-md ${workspace === 3 ? "bg-white/20" : "bg-transparent"}`}
                                onClick={() => setWorkspace(3)}
                            >
                                3
                            </button>
                        </div>
                        <div className="px-3 py-1 rounded-md bg-white/5">Fri 5 Sep 17:33</div>
                    </div>
                </div>
            </div>

            {/* Main area */}
            <main className="max-w-6xl mx-auto p-6 grid grid-cols-2 gap-6" style={{ minHeight: "calc(100vh - 88px)" }}>
                {/* left column of tiles */}
                <div className="grid grid-rows-2 gap-6">
                    {/* top-left floating terminal window */}
                    <TileWindow
                        windowObj={windows[0]}
                        focused={focused}
                        onFocus={() => setFocused(windows[0].id)}
                    />

                    {/* bottom-left large tile */}
                    <TileWindow
                        windowObj={windows[2]}
                        focused={focused}
                        onFocus={() => setFocused(windows[2].id)}
                    />
                </div>

                {/* right column of tiles */}
                <div className="grid grid-rows-2 gap-6">
                    <TileWindow
                        windowObj={windows[1]}
                        focused={focused}
                        onFocus={() => setFocused(windows[1].id)}
                    />

                    <TileWindow
                        windowObj={windows[3]}
                        focused={focused}
                        onFocus={() => setFocused(windows[3].id)}
                    />
                </div>
            </main>

            {/* Footer / Contact bar */}
            <footer className="max-w-6xl mx-auto p-6 text-sm text-gray-300">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        Email: <a href="mailto:joao@limadeveloper.com" className="text-blue-300 underline">joao@limadeveloper.com</a>
                    </div>
                    <div className="text-right">GitHub: <a href="https://github.com/JoaoVLima" className="text-blue-300 underline">JoaoVLima</a></div>
                </div>
            </footer>
        </div>
    );
}

function TileWindow({ windowObj, focused, onFocus }) {
    const isFocused = focused === windowObj.id;

    return (
        <div
            onClick={onFocus}
            className={`relative rounded-lg shadow-lg border border-white/10 overflow-hidden transition-transform duration-150 ${isFocused ? "scale-100 ring-2 ring-white/20" : "hover:scale-[1.01]"}`}>

            {/* Window chrome */}
            <div className="flex items-center justify-between px-3 py-2 bg-white/5 backdrop-blur-sm border-b border-white/5">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400" />
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                    <div className="ml-3 text-sm font-semibold">{windowObj.title}</div>
                </div>
                <div className="text-xs text-gray-300">workspace • 1</div>
            </div>

            {/* Window content */}
            <div className="p-4 bg-black/30 min-h-[160px]">
                {windowObj.content}
            </div>
        </div>
    );
}
