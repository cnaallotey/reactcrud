import githubImage from './github (1).svg'



const navbar = () => {
    const github = () => {
        window.open("https://github.com/cnaallotey/reactcrud" , "_blank")
    }


    return (
        <div className="Navbar w-full py-5 bg-slate-900"><div className=" max-w-screen-xl mx-auto px-5 xl:px-0"> <div className="w-full flex items-center justify-between">
            <h2 className="text-amber-600 font-bold text-3xl">CRUD react</h2>
            <button className="py-3 px-5 text-white flex items-center rounded-md bg-black bg-opacity-0 hover:bg-opacity-80 transition ease-out select-none delay-100 " onClick={github}>
                <img src={githubImage} className="w-10 h-10 mr-2" alt="github" /><span className="hidden md:contents">Visit repo</span></button>
        </div></div></div>
    )
}

export default navbar;