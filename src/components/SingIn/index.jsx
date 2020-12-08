import React from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from 'firebase/app';
import 'firebase/auth';
import "firebase/database";
import { connect } from 'react-redux';

import axiosUser from "../../instance"
import FirebaseConfig from '../../FirebaseConfig';


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
      var curentuser = firebase.auth().currentUser;
      if (curentuser != null) {
         var name = curentuser.displayName;
         var email = curentuser.email;
         var uid = curentuser.uid;
         axiosUser
            .get("/users.json")
            .then((response) => {
               if (response.data == null) {
                  axiosUser
                     .post(`/users/${uid}.json`, { name, email, uid });
                  this.props.CurentUserID(uid);
               } else {
                  let bool = Object.keys(response.data).some(function (elem) {
                     console.log("elem", elem);
                     console.log("UID-->", uid);
                     console.log("RESPONSE", response.data[elem]);
                     return uid === elem;
                  })
                  console.log("bool-->", bool);
                  if (!bool) {
                     axiosUser
                        .post(`/users/${uid}.json`, { name, email, uid });
                     console.log(this.props);
                     this.props.CurentUserID(uid);
                  } else {
                     console.log(this.props);
                     this.props.CurentUserID(uid);
                  }
               }
            })
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
      CurentUserID: (obj) => dispatch({ type: 'CUR_USER', payload: obj })
   }
}

export default withFirebaseAuth({
   providers,
   firebaseAppAuth,
})(connect(mapStateToProps, mapDispatchToProps)(SingIn))