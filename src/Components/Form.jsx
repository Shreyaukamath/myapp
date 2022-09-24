// import React from 'react'
import React, {useState} from "react"; 

function Form() {
  const [name, setName] = useState("shreya");
  const [email, setEmail] = useState("xyz@gmail.com");
  const [phone, setPhone] = useState("1234567892");
  const [branch, setBranch] = useState("engg");
  const [usn, setUsn] = useState("4mk12cs099");
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const data = {
      name: name,
      email: email,
      phone: phone,
      branch: branch,
      usn: usn


    }
   console.log(data
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name}placeholder="Student name" 
        onChange={(e) =>setName(e.target.value)}/><br></br><br></br>
     
      <input type="email" value={email}placeholder="Email address"
       onChange={(e) =>setEmail(e.target.value)} 
        /><br></br><br></br>
        <input type="text" value={phone}placeholder="Phone number"
       onChange={(e) =>setPhone(e.target.value)} 
        /><br></br><br></br>
        <input type="text" value={branch}placeholder="Branch"
       onChange={(e) =>setBranch(e.target.value)} 
        /><br></br><br></br>
        <input type="text" value={usn}placeholder="USN"
       onChange={(e) =>setUsn(e.target.value)} 
        /><br></br><br></br>
        <button type="submit" style={{color: "pink", backgroundColor: "blue"} }>Submit</button>

        </form>

       
      
      <p>{name}</p>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{branch}</p>
      <p>{usn}</p>
    </div>
  )
}

export default Form;