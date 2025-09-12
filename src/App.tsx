import Header from './components/Header.tsx'
import WindowManager from './components/WindowManager.tsx'

function App() {
    return (
        <main className="bg-[url(/background.jpg)] bg-cover bg-center min-w-md h-full m-0 p-0 min-h-screen w-full text-white antialiased">
            <Header activeIndex={0} />
            <WindowManager />
        </main>
    )
}

export default App
