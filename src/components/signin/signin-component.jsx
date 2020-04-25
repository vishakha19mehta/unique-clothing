import React from 'react';
import {signInWithGoogle} from '../../firebase/firebase.utils';
import firebase from 'firebase/app';
import {Grid} from '@material-ui/core';
import {Typography} from '@material-ui/core';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

class SignIn extends React.Component
{
    constructor()
    {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event =>
    {
        event.preventDefault();

        const { email, password } = this.state;
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } 
        catch (error) {
            console.log(error);
        }
    }

    handleChange = event =>
    {
        const {value, name} = event.target;
        this.setState({[name]: value})
    }

    render()
    {
        return(
           
            <Grid item xs={12} md={6} lg={6} >
                <Typography variant="h3" component="h1">I already have Account</Typography>
                <Typography variant="h6" component="h5">Signin with your Email and Password</Typography>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        id="outlined-number"
                        label="email"
                        type="email"
                        required
                        variant="outlined"
                        value={this.state.email}
                        handleChange={this.handleChange}
                    />
                    <FormInput
                        name="password"
                        id="outlined-number"
                        label="password"
                        type="password"
                        required
                        variant="outlined"
                        value={this.state.password}
                        handleChange={this.handleChange}
                    />
                    <CustomButton 
                        type="submit" 
                        value="Submit Form" 
                        variant="contained"
                        color="secondary"
                        startIcon={<ExitToAppIcon />}>SignIn
                    </CustomButton>
                    
                    <CustomButton 
                        onClick={signInWithGoogle} 
                        value="Submit Form" 
                        variant="contained"
                        color="primary"
                        startIcon={<ExitToAppIcon />}>SignIn with Google
                    </CustomButton>
                </form>
            </Grid>
        )
    }
}

export default SignIn; 