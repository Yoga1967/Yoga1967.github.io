import React, { Component } from 'react';
import email from './img/icon05.png';

class Contact extends Component {
    render() {
        return (
            <div className="bg-262626 p-rl-30 t-center f-c-737373 p-t-30 p-b-30" id="contact">
                <div className="d-flex max-w-screen-lg a-i-center margin-auto flex-c-gap-30">
                    <img src={email} alt="" width="" height="" className="img-auto" />
                    <p className="f-w-700 f-c-fff">Send me an email</p>
                </div>
                <div className="d-flex max-w-screen-lg a-i-center margin-auto p-t-30 flex-items-50">
                    <form method="POST" className="d-flex flex-column flex-r-gap-15" enctype="text/plain" action="mailto:adrianuseka67@gmail.com">
                        <input name="name" placeholder="Name" className="form-input" />
                        <input name="email" placeholder="Email" className="form-input" />
                        <textarea name="message" placeholder="Message" className="form-input textarea-input">
                        </textarea>
                        <button aria-label="Submit contact form" type="submit" className="w-max-content p-10-30 border-thin-1C1917 border-rad-10 bg-1C1917 f-c-fff hover-orange">Send</button>
                    </form>
                    <p className="f-c-fff f-w-700 t-left align-self-start">You can send me email</p>
                </div>
            </div>
        );
    }
}

export default Contact;