import { useContext } from 'react'
import { UserContext } from './UserContext'

type AuthUser = {
  name: string
  email: string
}

export const User = () => {
  const userContext = useContext(UserContext)
  const handleLogin = () => {
    // if (userContext) {
    userContext.setUser({
      name: 'Nirali',
      email: 'asd@asd.com'
    })
    // }
  }
  const handleLogout = () => {
    // if (userContext) {
    userContext.setUser({} as AuthUser)
    // }
  }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {userContext.user?.name}</div>
      <div>User email is {userContext.user?.email}</div>
      {/* <div>User name is {userContext?.user?.name}</div>
      <div>User email is {userContext?.user?.email}</div> */}
    </div>
  )
}
