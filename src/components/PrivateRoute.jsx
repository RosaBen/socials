// import {Navigate } from 'react-router-dom'
import { Link } from 'react-router';
import { useAuth } from '../utils/useAuth'


export default function PrivateRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) return <p>Chargement...</p>; //ajouter un loader plus tard
  return user? children: <p className='profile-unauthorized'>You need to <Link to="/login" className='login-pr'>login</Link> in order to access this page</p>
  // user? children: <Navigate to='/login' replace/>
}