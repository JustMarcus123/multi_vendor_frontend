
import { apiRequest } from "@/lib/API";
import type { UserRole } from "@/types/product";

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
    role: UserRole;
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

export function getMe() {
  return apiRequest<AuthResponse>("/auth/me");   //this is send to check who is logged in
}

export function logoutUser() {
  return apiRequest<{ message: string }>("/auth/logout", { method: "POST" });
}
