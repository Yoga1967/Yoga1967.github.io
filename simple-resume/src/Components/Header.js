import React, { Component } from 'react';

class Header extends Component{
    render(){
        return (
            <div className="header position-sticky z-index-10">
                <div class="background"></div>
                <div className="d-flex j-c-center flex-c-gap-30 f-w-700 foreground f-c-F97316 f-c-hover-fff">
                    <p><a href="#about">about</a></p>
                    <p><a href="#education">education</a></p>
                    <p><a href="#work">work</a></p>
                    {/*p><a href="#contact">contact</a></p>*/}
                </div>
            </div>
          );
    }
}

export default Header;