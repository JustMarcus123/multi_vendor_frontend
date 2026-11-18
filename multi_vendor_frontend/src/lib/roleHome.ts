import type { UserRole } from "@/types/product";

export function roleHome(role: UserRole): string{

switch(role){
    case "admin": return "/admin";
    case "vendor" : return "/vendor";
    default: return "/"
}

} 