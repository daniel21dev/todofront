import { Navigate, Outlet } from "react-router";

export const PrivateOutlet =()=> {
    const auth = !!localStorage.getItem('token');
    return auth ? <Outlet /> : <Navigate to="/auth" />;
}