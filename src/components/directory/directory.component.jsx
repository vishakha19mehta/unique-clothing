import React, { Component } from "react";
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectDirectorySections} from '../../redux/directory/directory.selector';
import MenuItem from '../menu-item/menu-item.component';

import Grid from '@material-ui/core/Grid';

const Directory = ({sections}) => (
  
    <Grid container direction="row">
        {
            sections.map(({id, ...otherSectionProps}) => (
                <MenuItem key={id} {...otherSectionProps}></MenuItem>
            ))
        }
    </Grid>
)

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);