export default function HelloWorld() {
    return (
        <div className='cursor-default selection:bg-none flex flex-col h-screen w-screen items-center justify-center'>
            <div className='mb-10'>
                <p className='text-zinc-500'>template by: artchsh#3139</p>
            </div>
            <div className='flex flex-col border border-zinc-500 p-7 rounded-xl shadow hover:shadow-xl transition ease-in-out duration-300 hover:scale-110'>
                <h1 className='text-5xl font-bold mb-3'>Modules</h1>
                <code>Vite</code>
                <code>React</code>
                <code>axios</code>
                <code>@fontsource/roboto</code>
                <code>@headlessui/react</code>
                <code>@mui/material</code>
                <code>@mui/icons-material</code>
                <code>framer-motion</code>
                <code>postcss</code>
                <code>react-auth-kit</code>
                <code>react-hot-toast</code>
                <code>react-router-dom</code>
                <code>tailwindcss</code>
                <code>vite-tsconfig-paths</code>
                <code>vite-plugin-pwa</code>
            </div>
            <div className='mt-10'>
                <p className='text-zinc-500'>Delete <code className='bg-neutral-800 rounded p-1 text-neutral-50'>src/components/HelloWords.tsx</code> first.</p>
            </div>
        </div>
    )
}
