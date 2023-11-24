import { useEffect } from 'react'

import './Main.css'

import Promo from '../../components/Promo/Promo'
import AboutProject from '../../components/AboutProject/AboutProject'
import Techs from '../../components/Techs/Techs'
import AboutMe from '../../components/AboutMe/AboutMe'
import Portfolio from '../../components/Portfolio/Portfolio'

import { getUser } from '../../utils/MainApi'
import { useAuth } from '../../hooks/useAuth'

function Main() {
  const { setIsLoggedIn, setCurrentUser } = useAuth()

  useEffect(() => {
    getUser()
      .then((data) => {
        setIsLoggedIn(true)
        setCurrentUser({ name: data.user.name, email: data.user.email })
      })
      .catch(() => console.error())
  }, [setIsLoggedIn, setCurrentUser])

  return (
    <>
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </>
  )
}

export default Main
