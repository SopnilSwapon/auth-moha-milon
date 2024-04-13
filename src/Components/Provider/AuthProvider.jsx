import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../../firebase/firebase.config";


export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser]  = useState(null);
    const [loading, setLoading] = useState(true);
    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };
    // sing In
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    };
    // Sign out 
    const logOut = ()  => {
        setLoading(true)
        signOut(auth)
        .then( () => {
            console.log('log out successfully');
        })
        .catch(error =>{
            console.log(error.message);
        })
    }

    // observe auth change 
     useEffect(()=>{ 
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current value of the current user', currentUser);
            setLoading(false)
        })
     },[])

    const authInfo = { user, createUser, signInUser, logOut, loading };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node
}