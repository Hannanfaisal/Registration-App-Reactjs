import React, { Component } from "react";
import Signup from "./Components/Signup";
import Login from "./Components/login";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyCbmS_FplGtjEQ1ZlEuTxz1S5Cq6u0VFyM",
  authDomain: "react-survey-784c2.firebaseapp.com",
  databaseURL: "https://react-survey-784c2-default-rtdb.firebaseio.com",
  projectId: "react-survey-784c2",
  storageBucket: "react-survey-784c2.appspot.com",
  messagingSenderId: "951497753114",
  appId: "1:951497753114:web:e6f6e0ceb046dea3dd07a3"
};

const app = initializeApp(firebaseConfig);




export default class Application extends Component{





  constructor(props){
    super(props);
    this.state = {
      page: 1,
      message: "",
      type: 1
    }
  }

  regiatrationHandler = (event) =>{

    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value; 
    if(password !== confirmPassword){
      this.setState({
        message: "Password does not match", type: 0
      })
      return;
    }


const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
 
    this.setState({
      message: "User Registered Successfully", type: 1
    }, ()=>{
      event.target.email.value = "";
      event.target.password.value = "";
      event.target.confirmPassword.value = ""; 
  
    })
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    this.setState({message: errorMessage, type:0})
  });

  }


  loginHandler = (event) =>{
    event.preventDefault();
    
    const email = event.target.email.value;
    const password = event.target.password.value;

const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    // const user = userCredential.user;
    this.setState({message: "Login Succesfully", type: 1});
  
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    this.setState({message: errorMessage, type: 0});
  });

  }

  googleLoginHandler = () =>{

const provider = new GoogleAuthProvider();



const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  }


  pageSwitchHander = (event) =>{
    this.setState({
      page: !this.state.page,
      message: null
    })
    event.preventDefault();
  }

  render(){
    return(
      <div>
        { this.state.page ? <Signup type={this.state.type} message={this.state.message} switch={this.pageSwitchHander} google={this.googleLoginHandler} register={this.regiatrationHandler}/> : <Login type={this.state.type} message={this.state.message} switch={this.pageSwitchHander} login={this.loginHandler}/> }
      </div>
    );
  }

}