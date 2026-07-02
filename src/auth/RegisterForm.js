import { useState, useContext } from "react";
import {
Container,
Card,
Form,
Button,
Alert
} from "react-bootstrap";

import { Link, useNavigate } from "react-router-dom";

import {
FaEye,
FaEyeSlash
} from "react-icons/fa";

import { AuthContext } from "../context/AuthContext";

function RegisterForm() {

    const { register } = useContext(AuthContext);

    const navigate = useNavigate();

    const [name, setName] = useState("");

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [confirmPassword, setConfirmPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);

    const [error, setError] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

        if (password !== confirmPassword) {

            setError("Passwords do not match.");

            return;

        }

        const success = register(

            name,

            email,

            password

        );

        if (success) {

            navigate("/");

        }

        else {

            setError(

                "Email already exists."

            );

        }

    };

    return (

        <Container className="py-5 mt-5">

            <Card
                className="shadow mx-auto p-4"
                style={{ maxWidth: "500px" }}
            >

                <h2 className="text-center mb-4">

                    Register

                </h2>

                {

                    error &&

                    <Alert variant="danger">

                        {error}

                    </Alert>

                }

                <Form onSubmit={handleSubmit}>

                    <Form.Group className="mb-3">

                        <Form.Label>

                            Full Name

                        </Form.Label>

                        <Form.Control

                            value={name}

                            onChange={(e)=>

                                setName(e.target.value)

                            }

                            required

                        />

                    </Form.Group>

                    <Form.Group className="mb-3">

                        <Form.Label>

                            Email

                        </Form.Label>

                        <Form.Control

                            type="email"

                            value={email}

                            onChange={(e)=>

                                setEmail(e.target.value)

                            }

                            required

                        />

                    </Form.Group>

                    <Form.Group className="mb-3">

                        <Form.Label>

                            Password

                        </Form.Label>

                        <div className="d-flex">

                            <Form.Control

                                type={

                                    showPassword

                                    ?

                                    "text"

                                    :

                                    "password"

                                }

                                value={password}

                                onChange={(e)=>

                                    setPassword(e.target.value)

                                }

                                required

                            />

                            <Button

                                variant="outline-secondary"

                                onClick={()=>setShowPassword(!showPassword)}

                            >

                                {

                                    showPassword

                                    ?

                                    <FaEyeSlash/>

                                    :

                                    <FaEye/>

                                }

                            </Button>

                        </div>

                    </Form.Group>

                    <Form.Group className="mb-4">

                        <Form.Label>

                            Confirm Password

                        </Form.Label>

                        <Form.Control

                            type={

                                showPassword

                                ?

                                "text"

                                :

                                "password"

                            }

                            value={confirmPassword}

                            onChange={(e)=>

                                setConfirmPassword(e.target.value)

                            }

                            required

                        />

                    </Form.Group>

                    <Button

                        type="submit"

                        variant="warning"

                        className="w-100"

                    >

                        Register

                    </Button>

                </Form>

                <p className="text-center mt-3">

                    Already have an account?

                    {" "}

                    <Link to="/login">

                        Login

                    </Link>

                </p>

            </Card>

        </Container>

    );

}

export default RegisterForm;

