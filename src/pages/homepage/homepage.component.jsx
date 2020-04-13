import React from "react";
import Directory from '../../components/directory/directory.component';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { Container } from '@material-ui/core';
import { shadows } from '@material-ui/system';
import { spacing } from '@material-ui/system';
import { sizing } from '@material-ui/system';


const HomePage = () =>
    (
        <Container>
            <Grid container direction="row">
                <Directory></Directory>
            </Grid>
        </Container>
    )

export default HomePage;