import { NavLink } from "react-router-dom";
import { FaUser } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";


const NavBar = () => {

    const {user,logOut} = useContext(AuthContext);

    // console.log(user.photoURL);

    const handleOut = () =>{
        logOut()
        .then()
        .catch()
    }
    const nav = <>
        <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "btn rounded-none bg-red-800 hover:bg-red-800 text-white font-semibold border-none  rounded-b-lg " : "btn rounded-none bg-transparent text-[#F39F5A] hover:bg-red-800 hover:text-white border-none"
  }
>
  Home
</NavLink>
 {
  user && <NavLink
  to="/addProduct"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "btn rounded-none bg-red-800 hover:bg-red-800 text-white font-semibold rounded-b-lg " : "btn rounded-none bg-transparent hover:bg-red-800 text-[#F39F5A] hover:text-white border-none"
  }
>
  Add Products
</NavLink>
 }
{
  user && <NavLink
  to="/myCart"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "btn rounded-none bg-red-800 hover:bg-red-800 text-white font-semibold rounded-b-lg " : "btn rounded-none bg-transparent hover:bg-red-800 text-[#F39F5A] hover:text-white border-none"
  }
>
  My Cart 
</NavLink>
}






    </>


    return (
        <div className=" container mx-auto">
            
            <div className="navbar  w-full h-20">
            
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
        {nav}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-5xl font-black"><img className=" md:w-44 w-32" src="https://i.ibb.co/GHVKhQz/Screenshot-2023-10-17-200415.png" alt="" /></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex gap-2">
      {nav}
    </ul>
  </div>
  {
    user ? 
    // if user logged in
    <div className=" flex gap-2 justify-center text-white">

      <h2 className=" font-bold text-red-900">{
      user?.displayName? user.displayName : user.email
    }</h2>
    <div>{
      user?.photoURL ? <div className="avatar">
  <div className="w-14 rounded-full">
    <img className="" src={user.photoURL} />
  </div>
</div> : <div><FaUser></FaUser></div>}
    </div>

    <div>
    <button onClick={handleOut}
  className="btn rounded-none  bg-[#F39F5A]  hover:bg-red-800 text-[white] hover:text-white border-none"
  
>
  LogOut
</button>
    </div>
    </div>
    :
    // if user not logged in
    <div>
      <NavLink
  to="/login"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "btn rounded-none bg-red-800 hover:bg-red-800 text-white font-semibold rounded-b-lg " : "btn rounded-none bg-transparent hover:bg-red-800 text-[#F39F5A] hover:text-white border-none"
  }
>
  Login 
</NavLink>

    </div>
    
  }
  </div>
</div>
    );
};

export default NavBar;