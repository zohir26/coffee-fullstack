

import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { createContext } from 'react';
import { auth } from './../Firebase/firebase.init';


export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
const [user,setUser] = useState(null);
const [loading, setLoading] =useState(true);
 

const createUser=(email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
}

const authInfo ={
  user,
  loading,
  createUser,
 }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;