import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";


 export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading , setLoading] = useState(true)

    // create user

    const createUser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password)

    }

    //  login 

    const login = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)
    }


    // logout

    const logOut = () => {

        return signOut(auth)

    }

    // onAuthStateChange , an observer

    useEffect(()=> {

        const unSubscribe = onAuthStateChanged(auth, (currentUser)=> {

            console.log(currentUser)

            setUser(currentUser)
            setLoading(false)
        })

        return ()=> {
           unSubscribe()
        }

    }, [])

    const authInfo = {

        user,
        setUser,
        loading,
        setLoading,
        createUser,
        login,
        logOut

    }
    return (
        <AuthContext.Provider value={authInfo}>

            {
                children
            }
            
        </AuthContext.Provider >
    );
};

AuthProvider.propTypes = {
    children : PropTypes.node
}



export default AuthProvider;