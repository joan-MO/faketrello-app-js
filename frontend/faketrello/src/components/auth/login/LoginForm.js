import React from 'react';

const LoginForm = () => {
    return (
        <form>
            <div className="form-group mt-2">
                <label htmlFor="email">Email address</label>
                <input type="email" name="email" className="form-control mt-2" id="email" aria-describedby="emailHelp" placeholder="enter email" />
            </div>
            <div className="form-group mt-2">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" className="form-control mt-2" id="password" placeholder="password" />
            </div>
            <div className="form-check mt-2">
                <input type="checkbox" className="form-check-input" id="check" />
                <label className="form-check-label" htmlFor="check">Remember password</label>
            </div>
            <button type="submit" className="btn btn-primary mt-2">Submit</button>
        </form>
    )
}


export default LoginForm;