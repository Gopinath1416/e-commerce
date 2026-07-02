import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

function BackToTop() {

    const [show, setShow] = useState(false);

    useEffect(() => {

        const handleScroll = () => {

            if (window.scrollY > 300) {

                setShow(true);

            } else {

                setShow(false);

            }

        };

        window.addEventListener("scroll", handleScroll);

        return () => {

            window.removeEventListener("scroll", handleScroll);

        };

    }, []);

    const scrollTop = () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    };

    return (

        show && (

            <button

                className="back-to-top"

                onClick={scrollTop}

            >

                <FaArrowUp />

            </button>

        )

    );

}

export default BackToTop;