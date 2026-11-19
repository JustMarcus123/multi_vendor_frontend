

import React, { createContext, useContext, useEffect, useState } from "react";
import { getMe, loginUser, logoutUser, type AuthResponse } from "@/components/Service/authApi";

type User = AuthResponse ["user"]

interface AuthContextValue{

    user: User | null;
    loading : boolean;
    setUser:(u:User | null)=>void;
    logout:()=> Promise<void>;

}

const AuthContext = createContext <AuthContextValue | null>(null);

export function AuthProvider({children}: {children:React.ReactNode}){
    const [user, setUser] = useState <User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        getMe()
        .then((res)=> setUser(res.user))
        .catch(()=>setUser(null))
        .finally(()=>setLoading(false));
    },[])
    async function logout(){
        try {
             await logoutUser();
            } finally{
            setUser(null); // runs even if the request failed
        }
       
    }

    return( <AuthContext.Provider value={{user, loading,setUser, logout}}>
        {children}
    </AuthContext.Provider>
);
}

export function useAuth(){
    const ctx = useContext(AuthContext);
    if(!ctx) throw new Error("useAuth must be used inside AuthProvider");
    return ctx;
}



