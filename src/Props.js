import React from 'react'

function Welcome ( props) {
    return(
        <div>
            <h1>Welcome {props.name}<br></br>
            </h1>
            <p> <h3>Hello {props.name}.<br></br> Your USN is {props.usn}.<br></br> Your Branch is {props.branch}<br></br> Your semester is {props.sem}. <br></br>Your email ID is {props.email}</h3></p>
        </div>
    )

}


function Props() {
  return (
    <div>
        <Welcome name= "Jungkook" usn="4MK19CS049" branch= "CSE"sem="7" email= "jungkook@gmail.com" />
        </div>
  )
}

export default Props;