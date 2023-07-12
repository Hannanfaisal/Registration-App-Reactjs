import "./App.css";
import React, { Component } from "react";
import Register from "./Components/Register";
import Greet from "./Components/Greet";
import { click } from "@testing-library/user-event/dist/click";


export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      isRegistered: false,
      name:null,
      email:null,
      password:null,
      showPassword: false,
    };
  }

  showPasswordHandler = () =>{
    this.setState({showPassword: !this.state.showPassword})
  }

  registrationHandler = (event) =>{
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    this.setState({name,email,password,isRegistered:true});

  }

  render()
  {
    return(
      <div>
        {this.state.isRegistered? <Greet name={this.state.name} email={this.state.email}/> : <Register submit={this.registrationHandler} showPassword={this.state.showPassword} click={this.showPasswordHandler}/>}
      </div>
    );
  }

}
