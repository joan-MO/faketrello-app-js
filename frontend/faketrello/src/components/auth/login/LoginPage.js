import React from 'react';
import LoginForm from './LoginForm'
import './Login.css'
import  {login}  from '../../../api/auth';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
    const [error, setError] = React.useState(null);

    const resetError = React.useCallback(() => setError(), []);

    const history = useHistory();

    //React.useEffect(() => { document.body.style.backgroundColor = 'rgb(0, 120, 233)' }, []) 

    const handleSubmit = async credentials => {
        resetError();
        try {
            await login(credentials);
            history.push('/boards')
        } catch (error) {
            setError(error);
        }
    };
    
    return (
        <div className="container login-bg">
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <div className="card p-5" style={{width:"25rem",height:'400px', marginTop:'30%'}}>
                        <div className="card-body">
                            <h5 className="card-title text-center mb-4">Login in Faketrello</h5>
                            <LoginForm onSubmit={handleSubmit}/>
                            {error && (
                                <p className="bg-danger text-center"
                                style={{ color: "white", position: "relative", top: "150px" }}>
                                    {error.message}  {error.status}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default LoginPage;