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
                id: 1
            },
            {
                title: 'Jackets',
                ImageUrl: 'https://p2.piqsels.com/preview/971/209/195/mannequin-hats-fashion-style.jpg',
                col: 4,
                id: 2
            },
            {
                title: 'Sneakers',
                ImageUrl: 'https://p2.piqsels.com/preview/971/209/195/mannequin-hats-fashion-style.jpg',
                col: 4,
                id: 3
            },
            {
                title: 'Women',
                ImageUrl: 'https://p2.piqsels.com/preview/971/209/195/mannequin-hats-fashion-style.jpg',
                col: 6,
                id: 4
            },
            {
                title: 'Men',
                ImageUrl: 'https://p2.piqsels.com/preview/971/209/195/mannequin-hats-fashion-style.jpg',
                col: 6,
                id: 5
            }]
        }
    }

    render()
    { 
        return(
            <Grid container direction="row">
                {
                    this.state.sections.map(({title, ImageUrl, id, col}) => (
                        <MenuItem key={id} title={title} ImageUrl={ImageUrl} col={col}></MenuItem>
                    ))
                }
            </Grid>
        )
    }
}

export default Directory;