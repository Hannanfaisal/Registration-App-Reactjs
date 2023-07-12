import React from "react"

export default function Greet(props) {
  return (
    <div className="container card mx-auto m-5 p-4">
        <h2>Hello! {props.name}</h2>
        <h3>Verfication sent to {props.email}</h3>
    </div>
  )
}
