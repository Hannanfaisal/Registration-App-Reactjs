import React from 'react'

export default function login(props) {
    let msgClasses = [];
    if(props.type === 1){
        msgClasses.push("text-success");
    }
    else{
        msgClasses.push("text-danger");
    }
    return (
        <div className="container card bg-light p-5">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h2>Login</h2>
                    <p className={msgClasses.join(" ")}>{props.message}</p>
                   <p> <button className="btn btn-primary" style={{width:"50%"}}>Login via Twitter </button></p>
                    <button className="btn btn-primary" style={{width:"50%", backgroundColor: "blue"}}>Login via Facebook</button>
                    <div className="d-flex justify-content-center">
                        <hr/> 
                        <p>OR</p>
                        <hr />
                    </div>
    
                    <form onSubmit={props.login} >
    
                       <div className="form-group mb-3">
                         <input  className="form-control " type="text" name="email" placeholder="Email address" style={{width:"50%"}}/>
                       </div>
    
                       <div className="form-group mb-3">
                         <input  className="form-control" type="password" name="password" placeholder="Create password" style={{width:"50%"}}/>
                       </div>
        
                       <button className="btn btn-primary mb-2" style={{width:"50%"}}>Create Account </button>
                        
                       <p>Create an Account? <a href="" onClick={props.switch}>Signup</a> </p> 
    
                    </form>
    
                </div>
            </div>
        </div>
      )
}
