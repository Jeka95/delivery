import React from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from 'firebase/app';
import 'firebase/auth';


import FirebaseConfig from '../../FirebaseConfig';


const firebaseApp = firebase.initializeApp(FirebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
   googleProvider: new firebase.auth.GoogleAuthProvider(),
};



class SingIn extends React.Component {
   constructor(props) {
      super(props);
      this.state = {}
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
                  ? <p>Hello, {user.displayName}</p>
                  : <p>Please sign in.</p>
            }
            {
               user
                  ? <button onClick={signOut}>Sign out</button>
                  : <button onClick={signInWithGoogle}>Sign in with Google</button>
            }
         </div>
      );
   }
}

export default withFirebaseAuth({
   providers,
   firebaseAppAuth,
})(SingIn);