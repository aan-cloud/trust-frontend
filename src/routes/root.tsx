import { Link, Outlet } from "react-router-dom";


export async function rootLoader () {
    try {
        const response = await fetch('https://trust-backend-jvcy.onrender.com');

        if (!response.ok) {
            throw new Error(`response status: ${response.status}`)
        };

        const data = await response.json();
        return data
    } catch (error: any | unknown) {
        return `Error ${error.message}`
    }
};

export default function RootRoute () {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/login'}>Login</Link>
                    </li>
                    <li>
                        <Link to={'/register'}>Register</Link>
                    </li>
                    <li>
                        <Link to={'/products'}>Products</Link>
                    </li>
                </ul>
            </nav>
            <div>
                <Outlet />
            </div>
        </div>
    );
};