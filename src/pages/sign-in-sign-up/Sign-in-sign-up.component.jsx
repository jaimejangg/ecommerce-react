import React from 'react';

import './sign-in-sign-up.styles.scss';

import SignIn from '../../components/sign-in/Sign-in.component';
import SignUp from '../../components/sign-up/Sign-up-component';

const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
);

export default SignInAndSignUpPage;