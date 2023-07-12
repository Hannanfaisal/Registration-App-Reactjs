import React from 'react';
import Styled from "styled-components";

export default function Register(props) {

    let btnStyle,btnText,passwordToggle;
    let btnClasses = ["btn","m-1"];
    btnStyle = {
        backgroundColor: "green",
    }
    passwordToggle = "password";
    btnText = "Show Password";
    if(props.showPassword === true){
    
        btnText = "Hide Password";
        passwordToggle = "text";
        btnClasses.push("btn-primary");

    }else{
        btnClasses.push("btn-dark")
}

const StyledButton = Styled.button`
display: block;
padding: 5px;
color: white;
font-weight: bold;
background-color: ${ (props) => props.color};
margin:5px;
border-radius: 5px;
width: ${(props)=> (props.widthFlag === "1" ? "50%": "100%")}
border: none;
&:hover{
    box-shadow: 0px 0px 5px grey;
}
`;

const StyledDiv = Styled.div`
background-color: blue;
width: 300px;
height: 300px;
margin: auto;
`

const StyledRegisterContainer = Styled.div`



`

  return (
    <div className="container card m-5 p-4 register-container mx-auto">
        <h1>Registration</h1>
        <form onSubmit={props.submit}>
            <div className='mb-2'>
               <label htmlFor="name">Name</label>
               <input  className="form-control" type="text" name="name" />
            </div>
            <div className='mb-2'>
               <label htmlFor="email">Email</label>
               <input  className="form-control" type="email" name="email" />
            </div>
            <div className='mb-2'>
               <label htmlFor="password">Password</label>
               <div className='d-flex'>  
                   <input  className="form-control" type={passwordToggle} name="password" />
                </div>
           
            </div>
            <div className='mb-2'>
                <button type="submit" className='btn btn-dark'>Register</button>
           
            </div>
            
        </form>
        <button className={btnClasses.join(" ")} onClick={props.click} style={btnStyle}>{btnText}</button>
        <StyledButton type="button" widthFlag='1' color='blue'>Login</StyledButton>
        <StyledDiv></StyledDiv>

    </div>
  )
}
