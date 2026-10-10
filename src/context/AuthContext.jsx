import { createContext, useContext, useEffect, useState } from "react";

const USERS_KEY = "biteflow-users";
const CURRENT_USER_KEY = "biteflow-current-user";

export const AuthContext = createContext(null);

const readStorage = (key, fallback) => {
    try {
        const value = window.localStorage.getItem(key);
        return value ? JSON.parse(value) : fallback;
    } catch {
        return fallback;
    }
};

const normalizeEmail = (email) => email.trim().toLowerCase();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() =>
        readStorage(CURRENT_USER_KEY, null)
    );

    useEffect(() => {
        if (user) {
            window.localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
        } else {
            window.localStorage.removeItem(CURRENT_USER_KEY);
        }
    }, [user]);

    const register = ({ name, email, password }) => {
        const normalizedEmail = normalizeEmail(email);
        const users = readStorage(USERS_KEY, []);

        if (users.some((storedUser) => storedUser.email === normalizedEmail)) {
            throw new Error("An account with this email already exists.");
        }

        const newUser = {
            id: crypto.randomUUID(),
            name: name.trim(),
            email: normalizedEmail,
            password,
        };

        window.localStorage.setItem(
            USERS_KEY,
            JSON.stringify([...users, newUser])
        );

        const sessionUser = {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
        };
        setUser(sessionUser);
    };

    const login = ({ email, password }) => {
        const normalizedEmail = normalizeEmail(email);
        const users = readStorage(USERS_KEY, []);
        const matchingUser = users.find(
            (storedUser) =>
                storedUser.email === normalizedEmail &&
                storedUser.password === password
        );

        if (!matchingUser) {
            throw new Error("The email or password is incorrect.");
        }

        setUser({
            id: matchingUser.id,
            name: matchingUser.name,
            email: matchingUser.email,
        });
    };

    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, register, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const auth = useContext(AuthContext);

    if (!auth) {
        throw new Error("useAuth must be used within an AuthProvider");
    }

    return auth;
};
