import {useState} from 'react';
import "../components/form.css";
export const Form =({getData})=> {
  const [form,setForm]=useState(null)
  
  const handleChange = (e) => {
    const {name,value,type,checked} = e.target;
    const val = type === "checkbox" ? checked : value;
    setForm({
      ...form,
      [name]: val,

    });

    if (checked === true) {
    
      setForm({
        ...form,
        "MaritalStatus": "Married",
      });
    } else {
      setForm({
        ...form,
        [name]: value,
        "MaritalStatus": "Not Married",
      });
    }
  };



 
  const handleSubmit =(e)=>{
    e.preventDefault();
    getData(form)
    console.log(form);
  }
  
  let isMarried;
  return (
    <form style={{display: 'flex', flexDirection: 'column',width:"50%",columnGap:"3%",marginLeft:"20%"}} onSubmit={handleSubmit}>
     <label>Username</label>
      <input
      onChange={handleChange}
      name="username"
      type="text"
      placeholder="Username"
      ></input>
       <label>Age</label>
       <input
      onChange={handleChange}
      name="age"
      type="number"
      placeholder="Age"
      ></input>
       <label>Address</label> 
       <input
      onChange={handleChange}
      name="address"
      type="text"
      placeholder="Address"
      ></input>
       <label>Department</label>
      <select
        onChange={handleChange}
        name="department"
      >
        {["Marketing", "HR", "Opertaions","Placement team","Engineering"].map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <label>Salary</label>
      <input
      onChange={handleChange}
      name="salary"
      type="number"
      placeholder="Salary"
      ></input>
       <label>Marital Status</label>
      <input
      checked={isMarried}
      name="MaritalStatus"
      type="checkbox"
      onChange={handleChange}
      ></input>
      <input type="submit" value="Submit" ></input>
    </form>
  );
}