import React from 'react';
import {Container} from '@material-ui/core';
import {Grid} from '@material-ui/core';
import SignIn from '../../components/signin/signin-component';

const LoginPage = () =>
(
    <Container>
        <Grid container direction="row">
            <SignIn></SignIn>
        </Grid>
    </Container>
)

export default LoginPage;