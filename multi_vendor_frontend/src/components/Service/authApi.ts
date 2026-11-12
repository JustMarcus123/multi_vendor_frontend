import { apiRequest } from "@/lib/API";


export interface RegisterPayload{

    name:string;
    email:string;
    password:string;

}

export interface loginPayload{
    email:string,
    password:string
    
}


export function registerUser(payload: RegisterPayload){

    return apiRequest("/auth/register",{
        method: "POST",
        body: JSON.stringify(payload)
    });





}

export function loginUser(payload: loginPayload){

    return apiRequest("auth/login",{
        method: "POST",
        body: JSON.stringify(payload)
    });
}