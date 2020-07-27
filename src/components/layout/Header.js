import React from "react"
import Logo from "../../assets/Logo.jpg"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Header = () => {
  let leftSpacingForXL = 12
  let leftSpacingForMD = 8
  const duration = 1.2
  //Changes the spacing between navbar elements
  return (
    <div className="h-16 z-10 w-screen fixed  bg-primary xl:px-40">
      <div className="w-full pt-6 pb-4 px-8 flex items-center justify-between xl:justify-between">
        <div>
          <Link to="/">
            <img src={Logo} alt="Capital Square Partners Logo" />
          </Link>
        </div>
        <div>
          <button className="navbar-font md:hidden">Menu</button>
          <button className={`navbar-font hidden md:inline-block`}>
            <AniLink paintDrip to="/" color="black" duration={duration}>
              Home
            </AniLink>
          </button>
          <button
            className={`navbar-font hidden md:inline-block md:pl-${leftSpacingForMD} xl:pl-${leftSpacingForXL}`}
          >
            <AniLink paintDrip to="/page-2" color="black" duration={duration}>
              Know Us
            </AniLink>
          </button>
          <button
            className={`navbar-font hidden md:inline-block md:pl-${leftSpacingForMD} xl:pl-${leftSpacingForXL}`}
          >
            <AniLink
              paintDrip
              to="/investments"
              color="black"
              duration={duration}
            >
              Investments
            </AniLink>
          </button>
          <button
            className={`navbar-font hidden md:inline-block md:pl-${leftSpacingForMD} xl:pl-${leftSpacingForXL}`}
          >
            <AniLink paintDrip to="/team" color="black" duration={duration}>
              Team
            </AniLink>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header