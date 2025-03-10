import { Link } from 'react-router';
import { useForm } from 'react-hook-form';

import './styles/index.css';
import './styles/media-querys.css';

import { IconsContainer } from '../../assets/components/img-container';

type FormData = {
    email: string,
    username: string,
    password: string,
    confirmPassword: string
};

export const SignUpPage = () => {
    const { register, handleSubmit } = useForm<FormData>();
    const onSubmit = handleSubmit(data => { console.log(data) });

    return (
        <div className="background">
            <div className="background-container divs-container">
                <div className="overlay">
                    <div className="auth-box">
                        <IconsContainer imgSize="logo-size" imgUrl="logo-img" />

                        <form onSubmit={onSubmit}>
                            <div className="label">
                                <IconsContainer imgSize="icons-size" imgUrl="email-icon" />
                                <p>Email</p>
                            </div>
                            
                            <input {...register('email', { required: 'It seems you dont\' put an email :( ', pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i, maxLength: 100 })} className='inputs' type="email" placeholder='userTest@gmail.com' />

                            <div className="label">
                                <IconsContainer imgSize="icons-size" imgUrl="username-icon" />
                                <p>Username</p>
                            </div>
                            <input {...register('username', { required: 'It seems you dont\' put an username...', maxLength: 50 })} className='inputs' type="text" placeholder='rainbow350' />

                            <div className="label">
                                <IconsContainer imgSize="icons-size" imgUrl="password-icon" />
                                <p>Password</p>
                            </div>
                            <input {...register('password', { required: 'It seems you dont\' put an password', maxLength: 100 })} className='inputs' type="password" placeholder='****' />

                            <div className="label">
                                <IconsContainer imgSize="icons-size" imgUrl="password-icon" />
                                <p>Confirm Password</p>
                            </div>
                            <input {...register('confirmPassword', { required: 'It seems you dont\' confirm password', maxLength: 100 })} className='inputs' type="password" placeholder='****' />

                            <div className="submit-btn">
                                <input type="submit" value="Sign Up" />
                                <p>Have a account? <Link to="/signin">SignIn!</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}