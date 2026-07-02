import { useContext } from "react";
import { Navigate } from "react-router-dom";

import NavigationBar from "../components/Navbar";
import Footer from "../components/Footer";
import RegisterForm from "../auth/RegisterForm";

import { AuthContext } from "../context/AuthContext";

function Register() {
    const { user } = useContext(AuthContext);

    if (user) {

        return <Navigate to="/" replace />;

    }

    return (

        <>

            <NavigationBar cartCount={0} />

            <RegisterForm />

            <Footer />

        </>

    );

}

export default Register;