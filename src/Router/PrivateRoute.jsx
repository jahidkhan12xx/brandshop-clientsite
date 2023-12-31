import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";



// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {

    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    if(loading){
        return <span className=" absolute  ml-[50%] loading loading-spinner text-center flex justify-center items-center w-[10vw] h-[10vh] "></span>
    }

    if(user){
        return children;
    }
    return (
        <div>
        <Navigate state={location.pathname} to="/login"></Navigate>
        </div>
    );
};

export default PrivateRoute;