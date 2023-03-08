import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext();
export const AuthContextProvider =({children})=>{
    const [currentUser ,setcurrentUser] = useState(
        JSON.parse(localStorage.getItem('user')) || null
    );
    
    const login=()=>{
        setcurrentUser({id:1,name:'Dummy',lname:"User",email:'dummyuser@gmail.com',mobile:'9090989890' ,profilepic:"https://pbs.twimg.com/media/E10Z9JeVIAIaHkt.jpg"})
    }
    useEffect(()=>{
        localStorage.setItem('user',JSON.stringify(currentUser))
    },[currentUser])

    return <AuthContext.Provider value={{currentUser,login}}>{children}</AuthContext.Provider>
}