import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'

const CollectionItem = ({id, name, price, imageUrl}) =>
(
    <Card key={id} spacing={2}>
        <CardActionArea>
            <CardMedia  style={{ height: '140px' }}
                image={imageUrl}
                title={name}/>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {name}
                </Typography> 
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">
                ${price}
            </Button>
            <Button size="small" color="primary">
                Add to Cart
            </Button>
        </CardActions>
    </Card>
)

export default CollectionItem;