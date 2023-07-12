import React from 'react'

export default function Question(props) {
  return (
    <div>
        <div className="container card  " style={{width:"35%"}}>
            <div className="row p-4">
                <div className="col-md-12">
                    <form onSubmit={props.submit}>
                        <div className="form-group mb-2">
                             <label htmlFor=""> <strong>3.</strong> What are you currently doing ?</label>
                             <br />
                             <input type="radio" name="q1" value="Teaching"/>
                             <label className="mx-1" htmlFor="">Teaching</label>
                             <input type="radio" name="q1" value="Student"/>
                             <label className="mx-1"  htmlFor="">Student</label>
                             <input type="radio" name="q1" value="Programmer"/>
                             <label className="mx-1" htmlFor="">Programmer</label>
                             <input type="radio" name="q1"/>
                             <label className="mx-1" htmlFor="" value="other">Other</label>
                             <input className="form-control bg-light" type="text" name="other" placeholder="Type here if not listed."/>

                        </div>

                        <div className="form-group mb-2">
                             <label htmlFor=""> <strong>4.</strong> Please rate our course.</label>
                             <br />
                             <input type="radio" name="q2" value="Poor"/>
                             <label className="mx-1" htmlFor="">Poor</label>
                             <input type="radio" name="q2" value="Good"/>
                             <label className="mx-1"  htmlFor="">Good</label>
                             <input type="radio" name="q2" value="Excellent"/>
                             <label className="mx-1" htmlFor="">Excellent</label>
                             

                        </div>

                        <div className="form-group mb-2">
                             <label htmlFor=""> <strong>3.</strong> Write your review here.</label>
                             <input className="form-control"  type="text" name="q3"/>
                        </div>

                        <div className="form-group mb-2">
                             <button type="submit" className="btn btn-primary">Save</button>
                        </div>

                        <div className="d-flex justify-content-center">
                        <div className="badge badge-pill disabled">1</div>
                        <div className="badge badge-pill badge-primary" >2</div>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
