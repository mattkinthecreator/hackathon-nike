import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../Contexts/AuthContext'

const Header = () => {
  const {
    handleLogOut,
    user: { email },
  } = useAuth()

  return (
    <div>
      {email ? (
        <Link to="/auth">
          <button onClick={handleLogOut}>Log out</button>
        </Link>
      ) : null}
      {email ? null : (
        <Link to="/auth">
          <button>Log In</button>
        </Link>
      )}
    </div>
  )
}

export default Header
