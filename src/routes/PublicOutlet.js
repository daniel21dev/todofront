import { Navigate, Outlet } from "react-router";

export const PublicOutlet =()=> {
    const auth = !!localStorage.getItem('token');
    return !auth ? <Outlet /> : <Navigate to="/" />;
}