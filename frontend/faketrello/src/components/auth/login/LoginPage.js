import React from 'react';
import LoginForm from './LoginForm'
import './Login.css'

const LoginPage = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <div className="card p-5" style={{width:"25rem",height:'400px', marginTop:'30%'}}>
                        <div className="card-body">
                            <h5 className="card-title text-center mb-4">Login Page</h5>
                            <LoginForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default LoginPage;