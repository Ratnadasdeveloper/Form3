
export const ShowForm = ({
  id,
  username,
  age,
  address,
  salary,
  department,
  MaritalStatus,
  handleDelete
})=>{
  return (
    <>
      <table style={{Border: '2px solid black'}} >
            <tr
                style={{
                  border: "1px solid black",
                  width: "500px",
                  height:'20%',
                  flex: 1,
                  display: "flex",
              }}>
              <td style={{}}>{id}</td>
              <td style={{marginLeft:"2%"}}>{username}</td>
              <td style={{marginLeft:"2%"}}>{age}</td>
              <td style={{marginLeft:"2%"}}>{salary}</td>
              <td style={{marginLeft:"2%"}}>{address}</td>
              <td style={{marginLeft:"2%"}}>{department}</td>
              <td  style={{marginLeft:"6%"}} >{MaritalStatus}</td>
              <button style={{marginRight:"1%"}} onClick={()=>handleDelete(id)}>Delete</button>
          </tr>
      </table>
    </>
  )
}