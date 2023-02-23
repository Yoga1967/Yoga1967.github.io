import React, { useEffect } from 'react';

function TopButton() {
    const scrollToElement = (event) => {
        event.preventDefault();
        const element = document.getElementById("top");
        element.scrollIntoView({ behavior: "smooth" });
    };
    useEffect(() => {
        window.onscroll = () => {
            if (document.documentElement.scrollTop > 50 || document.body.scrollTop > 50) {
                if (document.getElementById('top-button').classList.contains('hide')) {
                    document.getElementById('top-button').classList.remove('hide');
                    document.getElementById('top-button').style.display = 'block';
                }
                else {
                    document.getElementById('top-button').style.display = 'block';
                }
            } else {
                document.getElementById('top-button').style.display = 'none';
            }
        };
    });

    const handleClick = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    return (
        <div className="back-top">
            <div>
                <button id="top-button" onClick={scrollToElement} className="hide">Top</button>
            </div>
        </div>
    );
}

export default TopButton;