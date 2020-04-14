import React from "react";
import Directory from '../../components/directory/directory.component';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';

const HomePage = () =>
    (
        <Container>
            <Grid container direction="row">
                <Directory></Directory>
            </Grid>
        </Container>
    )

export default HomePage;