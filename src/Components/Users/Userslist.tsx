'use client'
import React, { useEffect, useState } from 'react'
import { getUserAssets } from '../../Service/trade'
import { User, UserProps } from './Usercard'



const UserList = () => {
  const [user, setUser] = useState<UserProps>()
  console.log({user:user})
  const [isLoading, setIsLoading] = useState(false)
  console.log(isLoading)

  useEffect(() => {
    fetchUser()
  }, [])

  const fetchUser = async () => {
    
    try {
      const data = await getUserAssets()
      setUser(data)
      setIsLoading(true)
    } catch (error) {
      console.error("Error fetching user:", error)
    } finally {
      setIsLoading(true)
    }
  }

  if(!isLoading){
    return (<div>Loading...</div>)
  }
  return (
    <div>
      {/* {!isLoading && <p>Loading user...</p>} */}
    <User user={user} />
    </div>
  )
}

export default UserList