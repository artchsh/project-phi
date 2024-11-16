import { Outlet } from "react-router-dom"
import { Toaster } from 'react-hot-toast'

export default function DefaultLayout() {

    return (
        <>
            <Toaster />
            <main>
                <Outlet />
            </main>
        </>
    )
}
