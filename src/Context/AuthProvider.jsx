import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null);


// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {

    const[user,setUser] = useState(null);
    const[loading,setLoading] = useState(true);
    

    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    const provider = new GoogleAuthProvider();
    const googleLogin = () =>{
        setLoading(true);
        return signInWithPopup(auth,provider);
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false)
        })

        return ()=>{
            unsubscribe();
        }
    },[])


    const authInfo = {
        user,
        createUser,
        loginUser,
        logOut,
        googleLogin,
        loading,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;