import React, { useContext } from 'react'
import { AuthContext } from '../../context/supabaseContext'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({ children }) {
    const { currentUser } = useContext(AuthContext)

    if (currentUser) {
        return children

    } else {
        return <Navigate to={'/login'} />
        
    }

}
