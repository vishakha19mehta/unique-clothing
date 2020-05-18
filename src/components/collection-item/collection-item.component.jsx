import React from 'react';
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.action';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CustomButton from '../custom-button/custom-button.component';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

const CollectionItem = ({item, addItem}) =>
{
    const {id, name, price, imageUrl} = item;
    return (
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
            <CustomButton  
                onClick={()=> addItem(item)}
                variant="contained"
                color="primary"
                startIcon={<ShoppingCartOutlinedIcon/>}>Add to cart
            </CustomButton>
        </CardActions>
    </Card>
)}

const mapDispatchToProps = dispatch =>
({
    addItem: item => dispatch(addItem(item))
})


export default connect(null, mapDispatchToProps)(CollectionItem);