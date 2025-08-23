import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Box from "./Box.tsx";

function App() {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col">
            {/* Header */}
            <header className="p-6 text-center border-b border-gray-700">
                <h1 className="text-4xl font-extrabold">My Portfolio</h1>
                <p className="text-lg text-gray-400">Backend Developer | Django • React • Java</p>
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
                <h2 className="text-2xl font-bold mb-4">About Me</h2>
                <p className="text-gray-300">
                    Hi, I’m a backend developer passionate about building scalable and efficient
                    systems. I specialize in <span className="text-green-400">Django</span> and API design,
                    with experience in <span className="text-blue-400">React</span> for frontend integration. Recently,
                    I’ve been transitioning into <span className="text-yellow-400">Java</span>, focusing on
                    enterprise-level applications.
                </p>
            </section>

            {/* Skills Section */}
            <section className="bg-gray-800 p-8">
                <h2 className="text-2xl font-bold mb-6 text-center">Skills</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
                    <div className="p-4 bg-gray-700 rounded-lg shadow">Django</div>
                    <div className="p-4 bg-gray-700 rounded-lg shadow">REST APIs</div>
                    <div className="p-4 bg-gray-700 rounded-lg shadow">PostgreSQL</div>
                    <div className="p-4 bg-gray-700 rounded-lg shadow">React</div>
                    <div className="p-4 bg-gray-700 rounded-lg shadow">Docker</div>
                    <div className="p-4 bg-gray-700 rounded-lg shadow">Java</div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="p-8 max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold mb-6 text-center">Projects</h2>
                <div className="grid gap-6 md:grid-cols-2">
                    <div className="p-6 bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold">Django REST API</h3>
                        <p className="text-gray-400 mt-2">
                            Built a scalable REST API for a task management platform, using Django REST Framework and PostgreSQL.
                        </p>
                    </div>
                    <div className="p-6 bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold">React Dashboard</h3>
                        <p className="text-gray-400 mt-2">
                            Developed an interactive admin dashboard integrated with backend APIs, featuring authentication & charts.
                        </p>
                    </div>
                    <div className="p-6 bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold">Java Microservice</h3>
                        <p className="text-gray-400 mt-2">
                            Currently migrating backend services to Java-based microservices for enterprise applications.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <footer className="p-6 bg-gray-800 text-center border-t border-gray-700">
                <h2 className="text-xl font-bold mb-2">Get in Touch</h2>
                <p className="text-gray-400">Email: <a href="mailto:youremail@example.com" className="text-blue-400 hover:underline">youremail@example.com</a></p>
                <p className="text-gray-400">GitHub: <a href="https://github.com/yourusername" target="_blank" className="text-blue-400 hover:underline">github.com/yourusername</a></p>
                <p className="text-gray-400">LinkedIn: <a href="https://linkedin.com/in/yourusername" target="_blank" className="text-blue-400 hover:underline">linkedin.com/in/yourusername</a></p>
            </footer>
        </div>
    );
}

export default App;
