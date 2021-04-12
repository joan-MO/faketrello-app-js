import React from 'react';

const LoginForm = ({onSubmit}) => {
    const [credentials, setCredentials] = React.useState({
        email: '',
        password: '',
        checked: ''
    })

    const changeEmail = event => {
        const newCredentials = { ...credentials, email: event.target.value };
        setCredentials(newCredentials);
    };

    const changePassword = event => {  
        const newCredentials = { ...credentials, password: event.target.value};
        setCredentials(newCredentials);
    };
    
    const changeChecked = event => {
        const newCredentials = { ...credentials, checked: event.target.checked };
        setCredentials(newCredentials);
    };

    const submitForm = event => {
        event.preventDefault();
        onSubmit(credentials);
    };


    const { email, password } = credentials;

    return (
        <form onSubmit={submitForm}> 
            <div className="form-group mt-2">
                <label htmlFor="email">Email address</label>
                <input type="email"
                 name="email" 
                 className="form-control mt-2" 
                 id="email"
                 value={email}
                 onChange={changeEmail} 
                 aria-describedby="emailHelp" 
                 placeholder="enter email" required/>
            </div>
            <div className="form-group mt-2">
                <label htmlFor="password">Password</label>
                <input type="password"
                 name="password"
                 className="form-control mt-2" 
                 id="password"
                 value={password}
                 onChange={changePassword} 
                 placeholder="password" required/>
            </div>
            <div className="form-check mt-2">
                <input type="checkbox" className="form-check-input" id="check" onChange={changeChecked}/>
                <label className="form-check-label" htmlFor="check">Remember password</label>
            </div>
            <button type="submit" className="btn btn-primary mt-2" disabled={!email || !password}>Submit</button>
        </form>
    )
}


export default LoginForm;