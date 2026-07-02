import { useState, useContext } from "react";
import { Container, Card, Form, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { AuthContext } from "../context/AuthContext";

function LoginForm() {

    const { login } = useContext(AuthContext);

    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);

    const [error, setError] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

        const success = login(email, password);

        if (success) {

            navigate("/");

        } else {

            setError("Invalid email or password.");

        }

    };

    return (

        <Container className="py-5 mt-5">

            <Card
                className="shadow mx-auto p-4"
                style={{ maxWidth: "450px" }}
            >

                <h2 className="text-center mb-4">

                    Login

                </h2>

                {error &&

                    <Alert variant="danger">

                        {error}

                    </Alert>

                }

                <Form onSubmit={handleSubmit}>

                    <Form.Group className="mb-3">

                        <Form.Label>

                            Email

                        </Form.Label>

                        <Form.Control
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) =>
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
                                        ? "text"
                                        : "password"
                                }
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) =>
                                    setPassword(e.target.value)
                                }
                                required
                            />

                            <Button
                                variant="outline-secondary"
                                onClick={() =>
                                    setShowPassword(!showPassword)
                                }
                            >

                                {

                                    showPassword

                                    ?

                                    <FaEyeSlash />

                                    :

                                    <FaEye />

                                }

                            </Button>

                        </div>

                    </Form.Group>

                    <Button
                        type="submit"
                        variant="warning"
                        className="w-100"
                    >

                        Login

                    </Button>

                </Form>

                <p className="text-center mt-3">

                    Don't have an account?

                    {" "}

                    <Link to="/register">

                        Register

                    </Link>

                </p>

            </Card>

        </Container>

    );

}

export default LoginForm;