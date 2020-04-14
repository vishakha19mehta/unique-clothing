import React, { Component } from "react";
import MenuItem from '../menu-item/menu-item.component';

import Grid from '@material-ui/core/Grid';

class Directory extends Component{

    constructor()
    {
        super();

        this.state = {
            sections: [{
                title: 'Hats',
                ImageUrl: 'https://p2.piqsels.com/preview/971/209/195/mannequin-hats-fashion-style.jpg',
                col: 4,
                linkUrl: 'hats',
                id: 1
            },
            {
                title: 'Jackets',
                ImageUrl: 'https://p2.piqsels.com/preview/971/209/195/mannequin-hats-fashion-style.jpg',
                col: 4,
                linkUrl: '',
                id: 2
            },
            {
                title: 'Sneakers',
                ImageUrl: 'https://p2.piqsels.com/preview/971/209/195/mannequin-hats-fashion-style.jpg',
                col: 4,
                linkUrl: '',
                id: 3
            },
            {
                title: 'Women',
                ImageUrl: 'https://p2.piqsels.com/preview/971/209/195/mannequin-hats-fashion-style.jpg',
                col: 6,
                linkUrl:'',
                id: 4
            },
            {
                title: 'Men',
                ImageUrl: 'https://p2.piqsels.com/preview/971/209/195/mannequin-hats-fashion-style.jpg',
                col: 6,
                linkUrl:'',
                id: 5
            }]
        }
    }

    render()
    { 
        return(
            <Grid container direction="row">
                {
                    this.state.sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps}></MenuItem>
                    ))
                }
            </Grid>
        )
    }
}

export default Directory;