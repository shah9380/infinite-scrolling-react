import { useEffect, useState } from "react";

const Header = (props)=>{
    const[value,setValue]=useState('');
    const[show,setShow] = useState(false);
    useEffect(()=>{
        // console.log(value);
        props.funTake(value);
    },[value])
    const showSearch = ()=>{
        if(show){
            setShow(false);
        }else{
            setShow(true);
        }
    }
    
    return(
        <header className="flex justify-around items-center py-2 flex flex-col md:flex-row">
            <div className="flex justify-between w-full md:w-fit px-4">
                <h1 className="text-lg text-green-800 font-bold">Urban Graphos</h1>
                
                    <div onClick={showSearch} className="cursor-pointer active:border active:border-black p-2 md:hidden">
                        <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path fill="#441708" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
                    </div>
                
            </div>
            {
                show && (
                    <div id="search-bar" className="flex justify-center items-center gap-4 md:flex">
                    <input onChange={(e)=>{setTimeout(()=>{
                        setValue(e.target.value)
                    },2_000)}} type="text" placeholder="search for image" className="outline-none border border-gray-800 p-2 text-sm rounded-lg"></input>
                    <button value="search" className="hover:bg-cyan-800 hover:text-white active:scale-[0.05] duration-200 ease-in-out bg-cyan-400 px-4 rounded-lg py-2 h-full text-sm">Search</button>
                </div>
                )
            }
            <div id="search-bar" className="flex justify-center items-center gap-4 md:flex hidden">
                    <input onChange={(e)=>{setTimeout(()=>{
                        setValue(e.target.value)
                    },2_000)}} type="text" placeholder="search for image" className="outline-none border border-gray-800 p-2 text-sm rounded-lg"></input>
                    <button value="search" className="hover:bg-cyan-800 hover:text-white active:scale-[0.05] duration-200 ease-in-out bg-cyan-400 px-4 rounded-lg py-2 h-full text-sm">Search</button>
            </div>
        </header>
    )
}
export default Header;