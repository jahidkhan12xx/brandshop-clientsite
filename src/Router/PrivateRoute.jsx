import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { useNavigate } from "react-router-dom";


const PrivateRoute = ({children}) => {

    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    if(user){
        return children;
    }
    return (
        <div>
        {navigate("/login")}
        </div>
    );
};

export default PrivateRoute;