import { useEffect } from 'react'

import './Main.css'

import Promo from '../../components/Promo/Promo'
import AboutProject from '../../components/AboutProject/AboutProject'
import Techs from '../../components/Techs/Techs'
import AboutMe from '../../components/AboutMe/AboutMe'
import Portfolio from '../../components/Portfolio/Portfolio'

import { getUser } from '../../utils/MainApi'
import { useAuth } from '../../hooks/useAuth'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

function Main() {
  const { setIsLoggedIn, setCurrentUser } = useAuth()

  useEffect(() => {
    const logged = window.localStorage.getItem('logged') // logged=true если в куках есть токен
    if (!logged) return

    getUser()
      .then((data) => {
        setIsLoggedIn(true)
        setCurrentUser({ name: data.user.name, email: data.user.email })
      })
      .catch(() => console.error())
  }, [setIsLoggedIn, setCurrentUser])

  return (
    <>
      <Header />
      <main>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  )
}

export default Main
