import { useState, useEffect } from "react";
import axios from 'axios'
import userImage from './user (1).svg'

const crudapp = () => {
    const [users, setUsers] = useState([])
    

    useEffect(() => {
        axios.get('http://localhost:3000/loadclient')
            .then(res => setUsers(res.data))
        .catch(err => console.log(err.message))

    }, [])




    return (
        <div className="w-full py-20"> <div className=" max-w-screen-xl mx-auto px-5 xl:px-0">
            <h1 className=" text-4xl font-medium text-gray-900 ">Admin Dashboard</h1>
            <div className=" w-full flex items-center flex-col md:flex-row py-10">
                <div><select className="py-3 px-2 border border-gray-200 bg-gray-100 mr-4 focus:outline-none" name="fl" id=""><option value="All">All</option>
                    <option value="Active">Acitve</option>
                    <option value="Inactive">Inactive</option>
                </select></div>
                <div className="flex flex-1 md:mr-4"><input className=" px-3 py-3 focus:outline-none bg-gray-100 border border-gray-200 w-full" type="text" placeholder="Search Users" /></div>
                <button className="md:px-10 py-3 text-center w-full md:w-56 text-base text-white font-medium bg-amber-900 ">Add New User</button>
            </div>
            <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 md:px-10 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className=" py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Department
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
               {users && <tbody className="bg-white divide-y divide-gray-200">
                                    {

                                        users.map(user => (
                                             <tr 
                    
                   
                                                className="hover:bg-blue-50"
                                                key={user.id}
                    
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center"><img src={userImage} className="w-10 h-10" alt="user" />
                        <div className="flex-shrink-0 h-10 w-10">
                          
                        </div>
                                                <div className="ml-4 md:ml-10">
                                                  

                                                  
                          <div className="text-sm font-medium text-gray-900">
                            <span>{user.Name.firstName}</span>
                            {user.Name.lastName}
                          </div>
                          <div className="text-sm text-gray-500">{user.email}</div>
                        </div>
                      </div>
                    </td>
                    <t d className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {user.department}
                      </div>
                      <div className="text-sm text-gray-500"></div>
                    </t>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                     {user.role}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                     { user.active &&  <span
                     
                        className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                      >
                        Active
                      </span>}
                      {!user.active && <span
                     
                        className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800"
                      >
                        Inactive
                      </span>}
                    </td>
                    
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                     
                     <div className="flex flex-row items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-green-600 hover:text-green-900 mr-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-red-600 hover:text-indigo-900"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg></div>
                      
                    </td>
                  </tr>
                                        ))

                                        
                               }

                 
                </tbody>}
              </table>
            </div>
        
        </div>
                    </div>
                </div>
        </div>
            </div>
    )
}

export default crudapp;