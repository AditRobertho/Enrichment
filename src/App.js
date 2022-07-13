import React from 'react';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';


import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up.component/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';
import { createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.action';


class App extends React.Component {
  
  unsubscribeFromAuth = null;


  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser ({
              id: snapShot.id,
              ...snapShot.data()
            })
        });
      }

      setCurrentUser( userAuth );
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header  />
        <Routes>
          <Route exact path='/' element={ <HomePage/> } />
          <Route exact path='/shop' element={ <ShopPage/> } />
          <Route exact path='/signin' render={() => this.props.currentUser ? (
            <Navigate to='/' />
          ) : (
            <SignInAndSignUpPage />
            )
          } 
        />
        </Routes>
  
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps) (App) ;