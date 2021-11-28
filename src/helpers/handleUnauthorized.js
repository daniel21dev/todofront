
export const handleUnauthorized = (navigate) =>{
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    navigate('/auth')
}