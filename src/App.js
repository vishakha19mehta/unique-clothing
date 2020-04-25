import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import LoginPage from './pages/login/login-component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.action';
import userReducer from './redux/user/user.reducer';

class App extends React.Component
{

  unsubscribeFromAuth = null;
  componentDidMount()
  {
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if(userAuth)
      {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
             id: snapShot.id,
             ...snapShot.data()
            });
          });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount()
  {
    this.unsubscribeFromAuth();
  }

  render(){
    return (
        <div>
          <Header />
          <Route exact path="/" component= {Homepage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route path="/login" component={LoginPage}></Route>
        </div>
      );
    }
}


const mapDispatchToProps = dispatch =>
({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(null, mapDispatchToProps)(App);