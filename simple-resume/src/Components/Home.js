import React, { Component } from "react";

class Home extends Component{
    render(){
        return(
            <div className="home min-h-100">
                <div className="background"></div>
                <div className="w-50 p-30 b-rad-30 pos-absolute pos-absolute-center z-index-9 foreground">
                    <h1 className="t-center f-c-fff f-w-700">Hello!!<br/> I am Eka Prayoga</h1>
                    <p className="p-t-30 f-s-18 f-c-fff t-center">Hi, I am a <span className="f-w-700">Web Administrator / Frontend Web Developer</span> and I mainly use HTML, CSS, and Javascript to develop pages. Recently, I learn React JS as framework to develop my Frontend skills and this is the first simple resume page I created with React JS.</p>
                </div>
            </div>
        );
    }
}

export default Home;