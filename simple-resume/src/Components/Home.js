import React, { Component } from "react";
import { Parallax, Background } from 'react-parallax';

function onChange(isVisible) {
    console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
}

class Home extends Component{
    render(){
        return (
            <Parallax
                blur={{ min: -15, max: 15 }}
                bgImage={require('./img/header-background.jpg')}
                bgImageAlt="header-background"
                strength={-200}
                className="m-t-min56"
            >
                <div className="min-h-100" id="top">
                    <div className="background"></div>
                    <div className="w-50 p-30 b-rad-30 pos-absolute pos-absolute-center z-index-9 foreground">
                        <h1 className="t-center f-c-fff f-w-700">Hello!!<br /> I am {this.props.name}</h1>
                        <p className="p-t-30 f-s-18 f-c-fff t-center">Hi, I am a <span className="f-w-700">{this.props.jobTitle}</span> and I mainly use {this.props.skills} to develop pages. Recently, I learn {this.props.newSkill} as {this.props.newSkillAs} to develop my Frontend skills and this is the first simple resume page I created with {this.props.newSkill}.</p>
                        </div>
                </div>
            </Parallax>
        );
    }
}

export default Home;