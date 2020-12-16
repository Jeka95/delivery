import React from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from 'firebase/app';
import 'firebase/auth';
import "firebase/database";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import "./index.scss"
import axiosUser from "../../instance"
import FirebaseConfig from '../../FirebaseConfig';
import PersonIcon from "../../assets/person";
import GoogleIcon from "../../assets/google";



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
         <div className="auth">
            {
               user
                  ? <>
                     <button className="auth__btn" onClick={signOut}>Вийти</button>
                     <Link to="/personal-info" className="auth__personal-account"><PersonIcon /></Link>

                  </>
                  : <>
                     <button className="auth__btn" onClick={signInWithGoogle} ><p> Увійдіть з <GoogleIcon /></p></button>
                  </>
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