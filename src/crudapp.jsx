const crudapp = () => {
    return (
        <div className="w-full py-20"> <div className=" max-w-screen-xl mx-auto px-5 xl:px-0">
            <h1 className=" text-4xl font-medium text-gray-900 ">Admin Dashboard</h1>
            <div className=" w-full flex items-center flex-col lg:flex-row py-10">
                <div><select className="py-3 px-2 border border-gray-200 bg-gray-100 mr-4 focus:outline-none" name="fl" id=""><option value="All">All</option>
                    <option value="Active">Acitve</option>
                    <option value="Inactive">Inactive</option>
                </select></div>
                <div className="flex flex-1 lg:mr-4"><input className=" px-3 py-3 focus:outline-none bg-gray-100 border border-gray-200 w-full" type="text" placeholder="Search Users" /></div>
                <button className="lg:px-10 py-3 text-center w-full lg:w-56 text-base text-white font-medium bg-amber-900 ">Add New User</button>
            </div>
        
        
        </div></div>
    )
}

export default crudapp;