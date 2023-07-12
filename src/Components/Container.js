import React, {Component} from "react";
import Details from "./Details";
import Question from "./Question";
import {v4 as uuidv4} from "uuid";
import { getDatabase , ref ,set } from "firebase/database";
import { initializeApp } from 'firebase/app';


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




export default class Container extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            id: uuidv4(),
            name: null,
            email: null,
            questions: {
                q1: null,
                q2: null,
                q3: null,
                other: null,
            },
            isSubmitted: false,
        };
    }

    detailsSubmitHandler(event){
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        this.setState({
            name,email
        })

    }
    

    questionSubmitHandler(event){
        
        const questions = {};
        questions.q1 = event.target.q1.value;
        questions.q2 = event.target.q2.value;
        questions.q3 = event.target.q3.value;
        questions.other = event.target.other.value;
        this.setState({questions, isSubmitted:true})
        event.preventDefault(); 
        const database = getDatabase(app);
        set(ref(database,"survey/"+ this.state.id),{
            name: this.state.name,
            email: this.state.email, 
            questions: this.state.questions
        });
    }


//  writeUserData(userId, name, email, imageUrl) {
//   const db = getDatabase();
//   set(ref(db, 'users/' + userId), {
//     username: name,
//     email: email,
//     profile_picture : imageUrl
//   });
// }

    render(){
        return(
            <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center card m-4">
                        <h2 className="text-primary">Survey Form</h2>
                    </div>
                </div>
            </div>
            {this.state.isSubmitted ? <div className="text-center text-success">Thank You For Your Response</div> : ""}
            {this.state.name === null && this.state.email === null? <Details submit={this.detailsSubmitHandler.bind(this)}/> : <Question submit={this.questionSubmitHandler.bind(this)} /> }
            </>
        );
    }
}