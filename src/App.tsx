import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Box from "./Box.tsx";

function App() {
    const { t } = useTranslation('landing_page');

    return (
        <Suspense fallback="loading">
        <div className="min-h-screen bg-gray-900 text-white flex flex-col">
            {/* Header */}
            <header className="p-6 text-center border-b border-gray-700">
                <h1 className="text-4xl font-extrabold">{t("header.h1")}</h1>
                <p className="text-lg text-gray-400">{t("header.p")}</p>
            </header>

            {/* Hero Section with 3D */}
            <section className="relative flex-1">
                <Canvas className="h-[400px]">
                    <ambientLight intensity={Math.PI / 2} />
                    <spotLight
                        position={[10, 10, 10]}
                        angle={0.15}
                        penumbra={1}
                        decay={0}
                        intensity={Math.PI}
                    />
                    <pointLight
                        position={[-10, -10, -10]}
                        decay={0}
                        intensity={Math.PI}
                    />
                    <Box position={[-1.2, 0, 0]} />
                    <Box position={[1.2, 0, 0]} />
                    <OrbitControls />
                </Canvas>
            </section>

            {/* About Section */}
            <section className="p-8 max-w-3xl mx-auto text-center">
                <h2 className="text-2xl font-bold mb-4">{t("aboutTitle")}</h2>
                <p className="text-gray-300">{t("aboutText")}</p>
            </section>

            {/* Skills Section */}
            <section className="bg-gray-800 p-8">
                <h2 className="text-2xl font-bold mb-6 text-center">{t("skillsTitle")}</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
                    <div className="p-4 bg-gray-700 rounded-lg shadow">Django (Python)</div>
                    <div className="p-4 bg-gray-700 rounded-lg shadow">Java</div>
                    <div className="p-4 bg-gray-700 rounded-lg shadow">PostgreSQL</div>
                    <div className="p-4 bg-gray-700 rounded-lg shadow">React</div>
                    <div className="p-4 bg-gray-700 rounded-lg shadow">NodeJS</div>
                    <div className="p-4 bg-gray-700 rounded-lg shadow">ETL (Pentaho)</div>
                    <div className="p-4 bg-gray-700 rounded-lg shadow">Redis</div>
                    <div className="p-4 bg-gray-700 rounded-lg shadow">Docker</div>
                    <div className="p-4 bg-gray-700 rounded-lg shadow">AWS / GCP</div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="p-8 max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold mb-6 text-center">{t("experienceTitle")}</h2>
                <div className="space-y-6">
                    <div className="p-6 bg-gray-800 rounded-lg shadow">
                        <h3 className="text-xl font-semibold">{t("ravproTitle")}</h3>
                        <p className="text-gray-400 mt-2">{t("ravproDesc")}</p>
                    </div>
                    <div className="p-6 bg-gray-800 rounded-lg shadow">
                        <h3 className="text-xl font-semibold">{t("inteligTitle")}</h3>
                        <p className="text-gray-400 mt-2">{t("inteligDesc")}</p>
                    </div>
                    <div className="p-6 bg-gray-800 rounded-lg shadow">
                        <h3 className="text-xl font-semibold">{t("fidentechTitle")}</h3>
                        <p className="text-gray-400 mt-2">{t("fidentechDesc")}</p>
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section className="bg-gray-800 p-8">
                <h2 className="text-2xl font-bold mb-6 text-center">{t("educationTitle")}</h2>
                <p className="text-center text-gray-300">{t("educationDesc")}</p>
            </section>

            {/* Contact Section */}
            <footer className="p-6 bg-gray-800 text-center border-t border-gray-700">
                <h2 className="text-xl font-bold mb-2">{t("contactTitle")}</h2>
                <p className="text-gray-400">Email: <a href="mailto:joao@limadeveloper.com" className="text-blue-400 hover:underline">joao@limadeveloper.com</a></p>
                <p className="text-gray-400">GitHub: <a href="https://github.com/JoaoVLima" target="_blank" className="text-blue-400 hover:underline">github.com/JoaoVLima</a></p>
                <p className="text-gray-400">LinkedIn: <a href="https://linkedin.com/in/limadeveloper" target="_blank" className="text-blue-400 hover:underline">linkedin.com/in/limadeveloper</a></p>
                <p className="text-gray-400">Website: <a href="https://limadeveloper.com" target="_blank" className="text-blue-400 hover:underline">limadeveloper.com</a></p>
                <p className="text-gray-400">WhatsApp: <a href="https://api.whatsapp.com/send?phone=5541996277071" target="_blank" className="text-blue-400 hover:underline">+55 (41) 99627-7071</a></p>
            </footer>
        </div>
        </Suspense>
    );
}

export default App;
