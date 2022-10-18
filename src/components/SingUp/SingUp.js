import React from 'react';
import { Link } from 'react-router-dom';
import './SingUp.css'

const SingUp = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form>
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' placeholder='Your Email' required />
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' placeholder='Your Password' required />
                </div>
                <div className='form-control'>
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name='confirm' placeholder='Confirm Your Password' required />
                </div>
                <input className='btn-submit' type="submit" value="Sign Up" />
                <p>Already Have an Account ? <Link to='/login'>Login</Link></p>
            </form>
        </div>
    );
};

export default SingUp;