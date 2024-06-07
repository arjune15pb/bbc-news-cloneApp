import React from 'react'
import logo from '../images/logo.png'
import user from '../images/user.png'
import lens from '../images/lens.png'
import { Link } from 'react-router-dom'
import { auth } from '../firebase/setup'
import { signOut } from 'firebase/auth'
import { useNavigate, useLocation } from 'react-router-dom'

function Navbar(props) {
  const navigate = useNavigate()
  const location = useLocation()

  const logout = async () => {
    try {
      await signOut(auth)
      navigate('/')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="grid grid-cols-3 bg-black text-white fixed">
      <div className=" flex p-2">
        <img src={logo} className="h-10 " />
        {auth.currentUser ? (
          <button
            onClick={logout}
            className="text-white flex hover:border border-white p-2 "
          >
            Logout {auth.currentUser.displayName.split(' ')[0]}
          </button>
        ) : (
          <Link to="/signin">
            <button className="text-white flex hover:border border-white p-2 w-48 ">
              <img src={user} className="h-7" />
              Sign in
            </button>
          </Link>
        )}
      </div>

      <div className="flex">
        <Link className="mt-4" to="/" state={{ menu: 'All' }}>
          <button
            className={
              'ml-7 font-semibold text-sm ' +
              (props.menu === 'All' ? 'underline' : '')
            }
            onClick={
              location.pathname != '/weather'
                ? () => props.setCurrentPage(1)
                : null
            }
          >
            Home
          </button>
        </Link>

        <Link className="mt-4" to="/weather" state={{ menu: 'Weather' }}>
          <button
            className={
              'ml-7 font-semibold text-sm ' +
              (location.pathname === '/weather' ? 'underline' : '')
            }
            onClick={() => props.setCurrentPage(1)}
          >
            Weather
          </button>
        </Link>

        <Link className="mt-4" to="/" state={{ menu: 'Sport' }}>
          <button
            className={
              'ml-7 font-semibold text-sm ' +
              (props.menu === 'Sport' ? 'underline' : '')
            }
            onClick={
              location.pathname != '/weather'
                ? () => props.setCurrentPage(1)
                : null
            }
          >
           
            Sport
          </button>
        </Link>

        <Link className="mt-4" to="/" state={{ menu: 'Business' }}>
          <button
            className={
              'ml-7 font-semibold text-sm ' +
              (props.menu === 'Business' ? 'underline' : '')
            }
            onClick={
              location.pathname != '/weather'
                ? () => props.setCurrentPage(1)
                : null
            }
          >
            Business
          </button>
        </Link>
        <Link className="mt-4" to="/" state={{ menu: 'Innovation' }}>
          <button
            className={
              'ml-7 font-semibold text-sm ' +
              (props.menu === 'Innovation' ? 'underline' : '')
            }
            onClick={
              location.pathname != '/weather'
                ? () => props.setCurrentPage(1)
                : null
            }
          >
            Innovation
          </button>
        </Link>

        <Link className="mt-4" to="/" state={{ menu: 'Culture' }}>
          <button
            className={
              'ml-7 font-semibold text-sm ' +
              (props.menu === 'Culture' ? 'underline' : '')
            }
            onClick={
              location.pathname != '/weather'
                ? () => props.setCurrentPage(1)
                : null
            }
          >
            Culture
          </button>
        </Link>

        <Link className="mt-4" to="/" state={{ menu: 'Travel' }}>
          <button
            className={
              'ml-7 font-semibold text-sm ' +
              (props.menu === 'Travel' ? 'underline' : '')
            }
            onClick={
              location.pathname != '/weather'
                ? () => props.setCurrentPage(1)
                : null
            }
          >
            Travel
          </button>
        </Link>

        <Link className="mt-4" to="/" state={{ menu: 'Earth' }}>
          <button
            className={
              'ml-7 font-semibold text-sm ' +
              (props.menu === 'Earth' ? 'underline' : '')
            }
            onClick={
              location.pathname != '/weather'
                ? () => props.setCurrentPage(1)
                : null
            }
          >
            Earth
          </button>
        </Link>

        <Link className="mt-4" to="/" state={{ menu: 'Movie' }}>
          <button
            className={
              'ml-7 font-semibold text-sm ' +
              (props.menu === 'Movie' ? 'underline' : '')
            }
            onClick={
              location.pathname != '/weather'
                ? () => props.setCurrentPage(1)
                : null
            }
          >
            Movie
          </button>
        </Link>
      </div>

      {location.pathname == '/' && (
        <div className=" ml-40 flex p-4">
          <img src={lens} className="h-6" />
          <input
            onChange={(e) => props.setSearch(e.target.value)}
            className=" flex bg-black"
            placeholder="Search BBC"
          />
        </div>
      )}
    </div>
  )
}

export default Navbar
