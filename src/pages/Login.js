import { useContext } from "react";
import { Navigate } from "react-router-dom";

import NavigationBar from "../components/Navbar";
import Footer from "../components/Footer";
import LoginForm from "../auth/LoginForm";

import { AuthContext } from "../context/AuthContext";

function Login() {
    const { user } = useContext(AuthContext);
    if (user) {

        return <Navigate to="/" replace />;

    }

    return (

        <>

            <NavigationBar cartCount={0} />

            <LoginForm />

            <Footer />

        </>

    );

}

export default Login;