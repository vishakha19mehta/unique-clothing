import React from 'react';
import {withRouter} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';


const MenuItem = ({title, ImageUrl, col, history, linkUrl, match}) => (

    <Grid item xs={12} md={col} lg={col} onClick = {() => history.push(`${match.url}${linkUrl}`) } >
        <Box align="center" boxShadow={2} m={2} style={{ backgroundImage: `url(${ImageUrl})`, backgroundSize: `cover`, backgroundPosition: `center` }}>
            <h1>{title}</h1>
            <span>Shop Now</span>
        </Box>
    </Grid>
)

export default withRouter(MenuItem);