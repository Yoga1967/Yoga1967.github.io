import React, { Component } from 'react';

function Header() {
    const scrollToElement = (event) => {
        event.preventDefault();
        const element = document.getElementById("about");
        element.scrollIntoView({ behavior: "smooth" });
    };

    const scrollToElement1 = (event) => {
        event.preventDefault();
        const element = document.getElementById("education");
        element.scrollIntoView({ behavior: "smooth" });
    };

    const scrollToElement2 = (event) => {
        event.preventDefault();
        const element = document.getElementById("work");
        element.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="header position-sticky z-index-10">
                    <div class="background"></div>
                    <div className="d-flex j-c-center flex-c-gap-30 f-w-700 foreground f-c-F97316 f-c-hover-fff">
                        <p><a href="#about" onClick={scrollToElement}>about</a></p>
                        <p><a href="#education" onClick={scrollToElement1}>education</a></p>
                        <p><a href="#work" onClick={scrollToElement2}>experience</a></p>
                    </div>
        </div>
    );
}

export default Header;