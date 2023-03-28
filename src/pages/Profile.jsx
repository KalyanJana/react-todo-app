import React, { useContext } from 'react'
import Loader from '../components/Loader'
import { Context, server } from '../main'

const Profile = () => {

  const {isAuthenticated, loading, user} = useContext(Context)

  return (
    isAuthenticated ? (
      loading ? <Loader /> : (
        <div>
          <h1>{user?.name}</h1>
          <p>{user?.email}</p>
        </div>
      )
    ):(
      <p >Please login..</p>
    )
  
  )
}

export default Profile