import { useAuth } from "@/context/AuthContext";
import type { UserRole } from "@/types/product";
import type React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { roleHome } from '../lib/roleHome';


export function RequiredRole({roles, children}: {roles:UserRole[], children: React.ReactNode})
{
    const {user, loading} = useAuth();
    const Location = useLocation();


    if(loading) return <p>Loading...</p>;

    // not logged in -> login, and remember where they wanted to go
    if(!user){
        return(
            <Navigate 
            to={`/login?next=${encodeURIComponent(Location.pathname)}`}
            replace
            />
        )
    }

     // logged in but wrong role -> send them to their own home
     if(!roles.includes(user.role)){
        return(
            <Navigate to={roleHome(user.role)} replace />
        )
     }

     return <>{children}</>;

     

 
}
// keeps logged-in users away from /login and /register
export function GuestOnly({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  if (loading) return <p>Loading...</p>;
  if (user) return <Navigate to={roleHome(user.role)} replace />;
  return <>{children}</>;
}