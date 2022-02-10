const newUser = () => {
    return (
        <div className="newUser w-full"><div className=" max-w-screen-md mx-auto px-5 xl:px-0">
            <form
           
            className="form bg-white p-6 relative"
          >
            <div
              className="icon bg-white text-white w-6 h-6 absolute flex items-center justify-center p-5"
            
            >
              <i className="fal fa-phone-volume fa-fw text-2xl transform -rotate-45"></i>
            </div>
            <h3 className="text-2xl text-gray-900 font-semibold text-center ">Add a new Client</h3>
            <div className="flex space-x-5 mt-3">
              <input
                type="text"
                name="lastName"
                id=""
                placeholder="First name"
                className="border p-2 w-1/2"
                
              />
              <input
                type="text"
                name="lastName"
                id=""
                placeholder="Last Name"
                className="border p-2 w-1/2"
               
              />
            </div>
            <input
              type="email"
              name="email"
              id=""
              placeholder="Your Email"
              className="border p-2 w-full mt-3"
              
            />
            <input
              type="text"
              name="department"
              id=""
              placeholder="Department"
              className="border p-2 w-full mt-3"
             
            />
            <input
              type="text"
              name="role"
              id=""
              placeholder="Role"
              className="border p-2 w-full mt-3"
              
            />
            <div className="mt-4">
              <p className="text-xs font-normal text-red-500" >
                Please fill all spaces
              </p>
            </div>
            

            <input
              type="submit"
              value="Submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium p-3"
             
            />
          </form>
        
        </div></div>
    )
}


export default newUser;



{/* <form
           
            className="form bg-white p-6 relative"
          >
            <div
              className="icon bg-blue-600 text-white w-6 h-6 absolute flex items-center justify-center p-5"
              style="left: -40px"
            >
              <i className="fal fa-phone-volume fa-fw text-2xl transform -rotate-45"></i>
            </div>
            <h3 className="text-2xl text-gray-900 font-semibold text-center ">Add a new Client</h3>
            <div className="flex space-x-5 mt-3">
              <input
                type="text"
                name="lastName"
                id=""
                placeholder="First name"
                className="border p-2 w-1/2"
                
              />
              <input
                type="text"
                name="lastName"
                id=""
                placeholder="Last Name"
                className="border p-2 w-1/2"
               
              />
            </div>
            <input
              type="email"
              name="email"
              id=""
              placeholder="Your Email"
              className="border p-2 w-full mt-3"
              
            />
            <input
              type="text"
              name="department"
              id=""
              placeholder="Department"
              className="border p-2 w-full mt-3"
             
            />
            <input
              type="text"
              name="role"
              id=""
              placeholder="Role"
              className="border p-2 w-full mt-3"
              
            />
            <div className="mt-4">
              <p className="text-xs font-normal text-red-500" >
                Please fill all spaces
              </p>
            </div>
            

            <input
              type="submit"
              value="Submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium p-3"
             
            />
          </form> */}