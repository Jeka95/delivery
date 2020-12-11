import React from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from 'firebase/app';
import 'firebase/auth';
import "firebase/database";
import { connect } from 'react-redux';

import axiosUser from "../../instance"
import FirebaseConfig from '../../FirebaseConfig';
import InfoItem from "../Info/InfoItem"



const firebaseApp = firebase.initializeApp(FirebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
   googleProvider: new firebase.auth.GoogleAuthProvider(),
};

class SingIn extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
      }
   }

   componentDidUpdate() {
      this.PostUser();
   }



   PostUser = async () => {
      var curentuser = firebase.auth().currentUser;
      if (curentuser != null) {
         var name = curentuser.displayName;
         var email = curentuser.email;
         var uid = curentuser.uid;
         await axiosUser
            .get("/users.json")
            .then(async (response) => {
               let bool = Object.keys(response.data).some(function (elem) {
                  return uid === elem;
               })
               switch (bool) {
                  case false:
                     await axiosUser
                        .post(`/users/${uid}.json`, { name, email, uid });
                     this.props.CurentUserID(uid);
                     break;
                  default:
                     this.props.CurentUserID(uid);
                     axiosUser
                        .get(`/users/${this.props.ID}/favorite.json`)
                        .then((response) => {
                           if (response.data !== null) {
                              this.props.GurentUserFavorite(Object.values(response.data)[0]);
                           }
                        })
                     break;
               }
            }
            )
      }
   }

   render() {
      const {
         user,
         signOut,
         signInWithGoogle,
      } = this.props;


      return (
         <div>
            {
               user
                  ? <p>Hello, {user.displayName}</p >
                  : <p>Please sign in.</p>
            }
            {
               user
                  ? <button onClick={signOut}>Sign out</button>
                  : <button onClick={signInWithGoogle} >Sign in with Google</button>
            }
            {
               user
                  ? <InfoItem link="/favorite">Улюблене</InfoItem>
                  : null
            }
         </div >
      );
   }
}
const mapStateToProps = (state) => {
   return {
      ID: state.curentUserId,
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      CurentUserID: (obj) => dispatch({ type: 'CUR_USER', payload: obj }),
      GurentUserFavorite: (obj) => dispatch({ type: 'CUR_USER_FAVORITE', payload: obj }),
   }
}

export default withFirebaseAuth({
   providers,
   firebaseAppAuth,
})(connect(mapStateToProps, mapDispatchToProps)(SingIn))