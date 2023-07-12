import React from "react";

export default function Details (props){
  return(
    <div className="container card bg-white" style={{width:"35%",}}>
        <div className="row p-4">

            <div className="col-md-12">
                <form onSubmit={props.submit}>
                    <div className="form-group mb-2">
                        <label htmlFor="name"><strong>1.</strong> Name</label>
                        <input className="form-control" type="text" name="name" placeholder="Please enter your name" />
                    </div>

                    <div className="form-group mb-2">
                        <label htmlFor="email"><strong>2.</strong> Email</label>
                        <input className="form-control" type="email" name="email" placeholder="Please enter your email" />
                    </div>

                    <div className="form-group mb-2">
                        <button type="submit" className="btn btn-primary">Next</button>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="badge badge-pill badge-primary">1</div>
                        <div className="badge badge-pill disabled" >2</div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
}