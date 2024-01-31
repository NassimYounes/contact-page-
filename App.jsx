
import React from 'react';
import './App.css'; 
// import fb from './CONTACT/Facebook.png' ;
// import insta from './CONTACT/Group.png';
// import twit from './CONTACT/Twitter.png' ;


const ContactForm = () => {
    return (
        <div className="resume_box">
            <h1 className="heading">CONTACT US</h1>
            <div className="ff">
                <div className="input">
                    <FormInput label="First Name" type="text" />
                    <FormInput label="Last Name" type="text" />
                    <FormInput label="Email Address" type="email" />
                    <FormInput label="Phone Number" type="tel" />
                    <FormInput label="Message" type="text" /><br></br>
                    <button className='button' type="submit">Contact Us</button>
                </div>
                <div className="inf">
                    <h3>contact :</h3>
                    <p>ieee@ensi-uma.tn</p>
                    <h3>based in :</h3>
                    <p>Mannouba Campus</p>
                    <div className="ext">
                    {/* <img src={fb}/>
                    <img src={insta}/>
                    <img src={twit}/> */}
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

const FormInput = ({ label, type }) => {
    return (
        <div>
            <label className="input_label" htmlFor={label}>{label}:</label><br />
            {type === "textarea" ? <textarea id={label.toLowerCase()} name={label.toLowerCase()}></textarea> : <input type={type} id={label.toLowerCase()} name={label.toLowerCase()} />}
        </div>
    );
}

export default ContactForm;
