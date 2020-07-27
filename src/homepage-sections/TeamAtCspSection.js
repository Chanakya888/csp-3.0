import React from "react"
import Subtitle from "../components/Subtitle"
import TeamAtCspComponent from "../components/TeamAtCspComponent"

const InvestmentSection = () => {
  return (
    <div className="pt-32 width-wrapper width-wrapper-fullscreen xl:pt-40">
      <div className="xl:pl-40">
        <Subtitle subtitle="team at csp" />
        <p className="pt-4 xl:w-2/5">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque
        </p>
      </div>
      <div className="pt-20">
        <TeamAtCspComponent />
      </div>
    </div>
  )
}

export default InvestmentSection
