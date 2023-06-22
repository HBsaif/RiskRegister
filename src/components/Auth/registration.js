import { Link } from "react-router-dom";
import { passwordFormat } from "../../util/regularExpression";
import { axiosConfigLocal } from '../../util/axiosApiCall';
import { React, useState } from "react";
function Registration() {
    const [nameVal, setNameVal] = useState('');
    const [emailVal, setEmailVal] = useState('');
    const [passwordVal, setPasswordVal] = useState('');
    const [confirmPasswordVal, setConfirmPasswordVal] = useState('');
    const [formError, setFormError] = useState('');

    const nameValSet = (e) => {
        var errId = document.getElementById('err');
        errId.classList.remove('show');
        setFormError('');
        setNameVal(e.target.value);
    }
    const emailValSet = (e) => {
        var errId = document.getElementById('err');
        errId.classList.remove('show');
        setFormError('');
        setEmailVal(e.target.value);
    }
    const passwordValSet = (e) => {
        var errId = document.getElementById('err');
        errId.classList.remove('show');
        setFormError('');
        setPasswordVal(e.target.value);
    }
    const cPasswordValSet = (e) => {
        var errId = document.getElementById('err');
        errId.classList.remove('show');
        setFormError('');
        setConfirmPasswordVal(e.target.value);
    }
    const register = async(e) => {
        e.preventDefault();
        if (nameVal === '' || emailVal === '' || passwordVal === '' || confirmPasswordVal === '') {
            var errId = document.getElementById('err');
            errId.classList.add('show');
            setFormError('All Field Should Be Fill.');
        } else if (passwordVal !== confirmPasswordVal) {
            var errId = document.getElementById('err');
            errId.classList.add('show');
            setFormError('Password and Confirm Password is not Same.');
        } else if (passwordFormat.test(passwordVal) === false) {
            var errId = document.getElementById('err');
            errId.classList.add('show');
            setFormError('Password Should Contain Minimum An Uppercase, Lowercase, Number and Special Character.')
        } else {
            var errId = document.getElementById('err');
            errId.classList.add('show');
			await axiosConfigLocal.post('register', {
                name: nameVal,
                email: emailVal,
				password: passwordVal
            }).then((response) => {
                console.log(response.data);
            }).catch((err) => {
                console.log(err);
            })
            localStorage.setItem('risk-register-user-login', true);
            setFormError('Please Check Your Email For Verification.');
        }
    }
    return (
        <div>
            <h1 className="t-center">Registration</h1>
            <div className="form-wrapper">
                <div className="form-body">
                    <p id="err" className="err">{formError}</p>
                    <form onSubmit={register}>
                        <label htmlFor="email">Name<sup>*</sup></label>
                        <input type="text" value={nameVal} onChange={nameValSet} placeholder="Enter Name Here ...." name="name" required />
                        <label htmlFor="email">Email<sup>*</sup></label>
                        <input type="text" value={emailVal} onChange={emailValSet} placeholder="Enter Email Here ...." name="email" required />
                        <label htmlFor="password">Password<sup>*</sup></label>
                        <input type="password" value={passwordVal} onChange={passwordValSet} placeholder="Enter Password Here ...." name="password" required />
                        <label htmlFor="cpassword">Confirm Password<sup>*</sup></label>
                        <input type="password" value={confirmPasswordVal} onChange={cPasswordValSet} placeholder="Enter Confirm Password Here ...." name="cpassword" required />
                        <input value="Sign Up" type="submit" />
                    </form>
                    <p className="t-center">Already Have Account?<span><strong><Link to="/login"> Sign In</Link></strong></span></p>
                </div>
            </div>
        </div>
    )
}
export default Registration;