
const API_VITE_URL = import.meta.env.VITE_API_BASE_URL;

export async function apiRequest <T>(
    endpoints: string,
    options: RequestInit ={},
):Promise<T>{

    const response = await fetch(`${API_VITE_URL}${endpoints}`,{
        ...options,
        headers:{
            "Content-type":"application/json",
            ...options.headers
        },
    });


    const responseText = response.text();
    console.log("API URL:", `${API_VITE_URL}${endpoints}`);
    console.log("Status:", response.status);
    console.log("Response:", responseText);


    const data = await response.json();


    if(!response.ok){
        throw new Error(
            data.message || data.error || "something went wrong",

        );
    }

    return data as T;

}