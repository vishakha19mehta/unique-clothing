import React from 'react';
import {Container} from '@material-ui/core';
import {Grid} from '@material-ui/core';
import SignIn from '../../components/signin/signin-component';
import SignUp from '../../components/sign-up/sign-up.component';

const LoginPage = () =>
(
    <Container>
        <Grid container direction="row">
            <SignIn></SignIn>
            <SignUp></SignUp>
        </Grid>
    </Container>
)

export default LoginPage;