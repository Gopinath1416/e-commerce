import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {

    const [user, setUser] = useState(() => {

        const savedUser = localStorage.getItem("user");

        return savedUser ? JSON.parse(savedUser) : null;

    });

    useEffect(() => {

        if (user) {

            localStorage.setItem(

                "user",

                JSON.stringify(user)

            );

        } else {

            localStorage.removeItem("user");

        }

    }, [user]);

    const login = (email, password) => {

        const savedUsers = JSON.parse(

            localStorage.getItem("users")

        ) || [];

        const existingUser = savedUsers.find(

            (item) =>

                item.email === email &&

                item.password === password

        );

        if (existingUser) {

            setUser(existingUser);

            return true;

        }

        return false;

    };

    const register = (name, email, password) => {

        const savedUsers = JSON.parse(

            localStorage.getItem("users")

        ) || [];

        const alreadyExists = savedUsers.find(

            (item) => item.email === email

        );

        if (alreadyExists) {

            return false;

        }

        const newUser = {

            id: Date.now(),

            name,

            email,

            password

        };

        localStorage.setItem(

            "users",

            JSON.stringify([...savedUsers, newUser])

        );

        setUser(newUser);

        return true;

    };

    const logout = () => {

        setUser(null);

    };

    return (

        <AuthContext.Provider

            value={{

                user,

                login,

                register,

                logout

            }}

        >

            {children}

        </AuthContext.Provider>

    );

}

export default AuthProvider;