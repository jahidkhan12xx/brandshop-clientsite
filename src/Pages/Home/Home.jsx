import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";


const Home = () => {

    const {age,user} = useContext(AuthContext);
    console.log(age,user);
    return (
        <div>
            <h2>Jahid</h2>
        </div>
    );
};

export default Home;