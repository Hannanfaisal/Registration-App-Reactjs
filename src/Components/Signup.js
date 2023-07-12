import React from 'react'

export default function Signup(props) {
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
                <h2>Create Account</h2>
                <p className="text-secondary">Get started with your free account</p>
                <p className={msgClasses.join(" ")}>{props.message}</p>
               <p> <button className="btn btn-primary" onClick={props.google} style={{width:"50%"}}>Signup via Google </button></p>
                <button className="btn btn-primary" style={{width:"50%", backgroundColor: "blue"}}>Signup via Facebook</button>
                <div className="d-flex justify-content-center">
                    <hr/> 
                    <p>OR</p>
                    <hr />
                </div>

   
                <form  onSubmit={props.register} >

                   <div className="form-group mb-3">
                     <input  className="form-control " type="text" name="email" placeholder="Email address" style={{width:"50%"}}/>
                   </div>

                   <div className="form-group mb-3">
                     <input  className="form-control" type="password" name="password" placeholder="Create password" style={{width:"50%"}}/>
                   </div>

                   <div className="form-group mb-3">
                     <input  className="form-control" type="password" name="confirmPassword" placeholder="Repeat password" style={{width:"50%"}}/>
                   </div>


                   <button className="btn btn-primary mb-2" style={{width:"50%"}}>Create Account </button>
                    
                   <p>Have an Account? <a href="" onClick={props.switch}>Log in</a> </p> 

                </form>

            </div>
        </div>
    </div>
  )
}
