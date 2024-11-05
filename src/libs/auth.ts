import { User } from "../types/user";
import { UserLogin, UserRegister } from "../schemas/user";
import { BACKEND_API_URL } from "./env";
import { accessToken } from "./acces-token";

export type Auth = {
    isAuthenticated: boolean;
    getToken: () => string;
    register(userRegister: UserRegister): Promise<void | null>;
    login(userLogin: UserLogin): Promise<void | null>;
    checkUser(): Promise<User | undefined>;
    logout(): void;
};

export const auth: Auth = {
    isAuthenticated: false,

    getToken() {
        return accessToken.get()
    },

    async register(userRegister: UserRegister) {
        const response = await fetch(`${BACKEND_API_URL}/auth/register`, {
            method: "POST",
            body: JSON.stringify(userRegister),
            headers: {"Content-type": "application/json"},
        });

        const user = await response.json();

        if (!user) return null
    },

    async login(userLogin: UserLogin) {
        try {
            const response = await fetch(`${BACKEND_API_URL}/auth/login`, {
                method: "POST",
                body: JSON.stringify(userLogin),
                headers: {"Content-type": "application/json"}
            });

            const token: {data?: string} = await response.json();

            if(!token.data) return null

            accessToken.set(token.data);
            auth.isAuthenticated = true;
        } catch (error) {
            accessToken.remove();
            auth.isAuthenticated = false;
        };
    },

    async checkUser() {
        const token = accessToken.get();

        if(token) {
            try {
                const response = await fetch(`${BACKEND_API_URL}/auth/me`, {
                    headers: {"Authorization": `Bearer ${token}`}
                });

                const user = await response.json();
                
                auth.isAuthenticated = true;

                return user
            } catch (error) {
                accessToken.remove();
                auth.isAuthenticated = false
            };
        };
    },

    logout() {
        accessToken.remove();
        auth.isAuthenticated = false
    },
};