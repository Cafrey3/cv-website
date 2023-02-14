import React, {useEffect} from "react";
import "./resume-page.css"
import AOS from "aos";
import "aos/dist/aos.css";

function ResumePage() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className="resume ">
            <a
                href="https://docs.google.com/document/d/1QF45Y9hBK5upaxcKHvcpUjndbkmP7sFpoyMhC7iG8nc/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
            >
                <button
                    className="resume__button"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    View (ENG)
                </button>
            </a>
        </div>
    );
}

export default ResumePage;