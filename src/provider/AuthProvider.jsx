import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";


 export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading , setLoading] = useState(true)

    // create user

    const createUser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password)

    }

    const authInfo = {

        user,
        setUser,
        loading,
        setLoading,
        createUser

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