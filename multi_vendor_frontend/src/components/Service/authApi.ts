
import { apiRequest } from "@/lib/API";

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  role:string
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: {
    id: string;
    name: string;
    email: string;
    role: "CUSTOMER" | "VENDOR" | "ADMIN";
  };
}

export function registerUser(payload: RegisterPayload) {
  return apiRequest<AuthResponse>("/auth/register", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function loginUser(payload: LoginPayload): Promise<AuthResponse> {
  return apiRequest("/auth/login", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
