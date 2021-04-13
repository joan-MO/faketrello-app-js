import React from 'react';

const LoginForm = ({ onSubmit }) => {
    const [checked, setChecked] = React.useState(false);
    const [credentials, setCredentials] = React.useState({
        username: '',
        password: '',
    })

    const changeEmail = event => {
        const newCredentials = { ...credentials, username: event.target.value };
        setCredentials(newCredentials);
    };

    const changePassword = event => {  
        const newCredentials = { ...credentials, password: event.target.value};
        setCredentials(newCredentials);
    };
    
    const changeChecked = () => {
        setChecked(!checked);
    };

    const submitForm = event => {
        event.preventDefault();
        onSubmit(credentials);
    };


    const { username, password } = credentials;

    return (
        <form onSubmit={submitForm}> 
            <div className="form-group mt-2">
                <label htmlFor="username">Email address</label>
                <input type="text"
                 name="username" 
                 className="form-control mt-2" 
                 id="username"
                 value={username}
                 onChange={changeEmail} 
                 aria-describedby="emailHelp" 
                 placeholder="enter username" required/>
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
                <input type="checkbox" className="form-check-input" id="check" onChange={changeChecked} checked={checked}/>
                <label className="form-check-label" htmlFor="check">Remember password</label>
            </div>
            <button type="submit" className="btn btn-primary mt-2" disabled={!username || !password}>Submit</button>
        </form>
    )
}


export default LoginForm;