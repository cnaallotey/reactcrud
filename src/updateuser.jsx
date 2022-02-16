import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";



const updateuser = () => {
  const { id } = useParams()
  const editUser = useState(null)
  const [firstName, setFirstname] = useState("")
  const [lastName, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("")
  const [department, setDepartment] = useState("")
  const [active, setActive] = useState(null)
  const [status, setStatus] = useState("")
  const navigate = useNavigate()

  const updateUser = (e) => {
    e.preventDefault()
    axios.put(`http://localhost:3001/client/updateclient/${id}`, {
       'Name': { 'firstName': firstName, 'lastName': lastName },
            'department': department,
            'email': email,
            'role': role,
            'active': active,
      'status': status,
            'id': id
            
    }).then(res => {
      console.log(res.data)
      navigate('/')
    })

  }


  

  useEffect(() => {
    axios.get(`http://localhost:3001/client/editclient/${id}`)
      .then(res => {
        console.log(res.data)
        setFirstname(res.data[0].Name.firstName)
        setLastname(res.data[0].Name.lastName)
        setEmail(res.data[0].email)
        setRole(res.data[0].role)
        setDepartment(res.data[0].department)
        setActive(res.data[0].active)
        setStatus(res.data[0].status)
      }
      )
  },[])





    return (
        <div className="updateuser w-full"><div className="max-w-screen-md mx-auto px-5 xl:px-0">
        <form action="" onSubmit={()=>{updateUser()}} class="form bg-white p-6 relative">
            <div
              class="icon bg-white text-white w-6 h-6 absolute flex items-center justify-center p-5"
              
            >
              
            </div>
            <h3 class="text-2xl text-gray-900 font-semibold text-center">Update User</h3>
            <div class="flex space-x-5 mt-3">
              <input
                type="text"
                name=""
                id=""
                placeholder="First name"
              class="border p-2 w-1/2"
              value={firstName}
              onChange={(e) =>{ setFirstname(e.target.value)}}
            
                
                
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Last Name"
              class="border p-2 w-1/2"
              value={lastName}
              onChange={(e) =>{ setLastname(e.target.value)}}
                
              />
            </div>
            <input
              type="email"
              name=""
              id=""
              placeholder="Your Email"
            class="border p-2 w-full mt-3"
            value={email}
              onChange={(e) =>{ setEmail(e.target.value)}}
              
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Department"
            class="border p-2 w-full mt-3"
            value={department}
              onChange={(e) =>{ setDepartment(e.target.value)}}
              
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Role"
            class="border p-2 w-full mt-3 mb-1"
            value={role}
            onChange={(e) =>{ setRole(e.target.value)}}
              
            />
            <div class="flex items-center">
            <div 
            class="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in"
    >
        <input
                type="checkbox"
                name="toggle"
                id="toggle"
                class="bg-white border-gray-300 mr-1 mt-2  focus:ring-transparent toggle-checkbox absolute block w-6 h-6 rounded-full border-2 appearance-none cursor-pointer"
                
        />
        <label
                for="toggle"
                class="toggle-label block h-6 ml-1 mt-2 rounded-full  cursor-pointer"
                
        ></label>
        
            </div>{active && <p class="ml-3 pt-2" >Activated</p>} 
      {!active &&      <p class="ml-3 pt-2" >Deactivated
  </p>}</div>
            <div class="mt-4">
              <p class="text-xs font-normal text-red-500" v-if="error">
                Please fill all spaces
              </p>
            </div>
           

            <input
              type="submit"
              value="Submit"
              class="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold p-3"
              
            />
          </form>
        </div></div>
    )
}


export default updateuser;