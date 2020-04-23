import React from 'react';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Component } from 'react';
import {createUserProfileDocument} from '../../firebase/firebase.utils';
import firebase from 'firebase/app';



class SignUp extends Component
{
    constructor()
    {
        super();

        this.state = {
            displayName:'',
            email:"",
            password:"",
            confirmPassword:''
        }
    }

    handleSubmit = async event =>
    {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword)
        {
            // <Alert severity="error">
            //     <AlertTitle>Error</AlertTitle>
            //     Password and Confirm password don't match
            // </Alert>
            alert("password dont match");
            return;
        }

        try {

            const {user} = await firebase.auth().createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName: '',
                email: "",
                password: "",
                confirmPassword: ''
            })
            
        } catch (error) {
           console.error(error); 
        }
    }


    handleChange = event =>
    {
        const {name, value} = event.target;
        this.setState({[name]: value})
    }

    render()
    {
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <Grid item xs={12} md={6} lg={6} >
                <Typography variant="h3" component="h1">I do not have Account</Typography>
                <Typography variant="h6" component="h5">Signup with your Email and Password</Typography>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="displayName"
                        id="outlined-number"
                        label="Name"
                        type="text"
                        required
                        variant="outlined"
                        value={displayName}
                        handleChange={this.handleChange}
                    />
                    <FormInput
                        name="email"
                        id="outlined-number"
                        label="email"
                        type="email"
                        required
                        variant="outlined"
                        value={email}
                        handleChange={this.handleChange}
                    />
                    <FormInput
                        name="password"
                        id="outlined-number"
                        label="password"
                        type="password"
                        required
                        variant="outlined"
                        value={password}
                        handleChange={this.handleChange}
                    />
                    <FormInput
                        name="confirmPassword"
                        id="outlined-number"
                        label="confirm password"
                        type="password"
                        required
                        variant="outlined"
                        value={confirmPassword}
                        handleChange={this.handleChange}
                    />
                    <CustomButton 
                        type="submit"
                        value="Submit Form" 
                        variant="contained"
                        color="primary"
                        startIcon={<ExitToAppIcon />}>SignUp
                    </CustomButton>
                </form>
            </Grid>
        )
    }
}

export default SignUp;