import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { Container } from '@material-ui/core';
import { shadows } from '@material-ui/system';
import { spacing } from '@material-ui/system';
import { sizing } from '@material-ui/system';


const MenuItem = ({title, ImageUrl, col}) => (

    <Grid item xs={12} md={col} lg={col} >
        <Box align="center" boxShadow={2} m={2} style={{ backgroundImage: `url(${ImageUrl})`, backgroundSize: `cover`, backgroundPosition: `center` }}>
            <h1>{title}</h1>
            <span>Shop Now</span>
        </Box>
    </Grid>
)

export default MenuItem;