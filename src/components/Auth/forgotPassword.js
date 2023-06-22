import { React, useState } from "react";
function ForgotPassword() {
    const [emailVal, setEmailVal] = useState('');
    const [formError, setFormError] = useState('');
    const emailValSet = (e) => {
        setFormError('');
        setEmailVal(e.target.value);
    }

    const sendEmail = (e) => {
        e.preventDefault();
        if (emailVal === '') {
            setFormError('All Field Should Be Fill.');
        } else {
            console.log(emailVal);
        }
    }
    return (
        <div>
            <h1 className="t-center">FORGOT PASSWORD</h1>
            <div className="form-wrapper">
                <div className="form-body">
                    <p className="err">{formError}</p>
                    <form onSubmit={sendEmail}>
                        <label htmlFor="email">Email</label>
                        <input type="text" value={emailVal} onChange={emailValSet} placeholder="Enter Email Here ...." name="email" />
                        <input value="Send Email" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    )
}
export default ForgotPassword;