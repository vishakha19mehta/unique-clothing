import React from "react";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { shadows } from '@material-ui/system';
import { spacing } from '@material-ui/system';
import { sizing } from '@material-ui/system';


const HomePage = () =>
(
    <Grid container direction="row">
        <Grid item xs={12} md={4} lg={4}>
            <Box align="center" boxShadow={2} m={3}>
                <h1>Hats</h1>
                <span>Shop Now</span>
            </Box>
        </Grid>

        <Grid item xs={12} md={4} lg={4}>
            <Box align="center" boxShadow={2} m={3}>
                <h1>Jackets</h1>
                <span>Shop Now</span>
            </Box>
        </Grid>

        <Grid item xs={12} md={4} lg={4}>
            <Box align="center" boxShadow={2} m={3}>
                <h1>Sneakers</h1>
                <span>Shop Now</span>
            </Box>
        </Grid>

         <Grid item xs={12} md={6} lg={6}>
            <Box align="center" boxShadow={2} m={3}>
                <h1>Women</h1>
                <span>Shop Now</span>
            </Box>
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
            <Box align="center" boxShadow={2} m={3}>
                <h1>Men</h1>
                <span>Shop Now</span>
            </Box>
        </Grid>
    </Grid>
)

export default HomePage;