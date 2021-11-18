import axios from 'axios'
import React, { useContext, useEffect, useReducer, useState } from 'react'
import fire from '../fire'

export const authContext = React.createContext()

export const useAuth = () => {
  return useContext(authContext)
}

const INIT_STATE = {
  favorites: [],
}

const reducer = (state = INIT_STATE, action) => {
  switch(action.type) {
    case "GET_FAV":
      return {...state, favorites: action.payload}
    default:
        return state
  }

}

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [hasAccount, setHasAccount] = useState('')
  const [state, dispatch] = useReducer(reducer, INIT_STATE)

  const clearInputs = () => {
    setEmail('')
    setPassword('')
  }

  const clearErrors = () => {
    setEmailError('')
    setPasswordError('')
  }

  const handleLogIn = () => {
    clearErrors()
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        switch (error.code) {
          case 'auth/invalid-email':
          case 'auth/user-disabled':
          case 'auth/user-not-found':
            setEmailError(error.message)
            break
          case 'auth/wrong-password':
            setPasswordError(error.message)
            break
          default:
            return
        }
      })
  }

  const handleSignUp = () => {
    clearErrors()
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => userSet())
      .catch((error) => {
        switch (error.code) {
          case 'auth/email-already-in-use':
          case 'auth/invalid-email':
            setEmailError(error.message)
            break
          case 'auth/weak-password':
            setPasswordError(error.message)
            break
          default:
            return
        }
      })
  }

  const handleLogOut = () => {
    fire.auth().signOut()
  }

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs()
        setUser(user)
      } else {
        setUser('')
      }
    })
  }

  useEffect(() => {
    authListener()
  }, [])

  async function userSet() {
    let user = {
      email: email,
      favorites: []
    }
    await axios.post(`http://localhost:8000/users`, user)
  }

  

  async function addProductToFavorites(shoe) {
    let {data} = await axios(`http://localhost:8000/users`)
    let users = [...data]
    users.forEach(item => {
      if(user.email === item.email) {
        item.favorites.push(shoe)
         axios.patch(`http://localhost:8000/users/${item.id}`, item)
      }
    });
    getDataFavorites()
  }
  console.log(user)
  async function getDataFavorites() {
    let { data } = await axios(`http://localhost:8000/users`)
    let users = [...data]
    if(user) {
      let fav = users.filter(item => item.email === user.email)
      dispatch({
        type: "GET_FAV",
        payload: fav[0].favorites
      })
    }
    
  }
  useEffect(() => {
    getDataFavorites()
  }, [user])

  const values = {
    email,
    user,
    password,
    handleLogOut,
    handleLogIn,
    handleSignUp,
    setEmail,
    setPassword,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
    addProductToFavorites,
    favorites: state.favorites,
    getDataFavorites
  }

  return <authContext.Provider value={values}>{children}</authContext.Provider>
}

export default AuthContextProvider
