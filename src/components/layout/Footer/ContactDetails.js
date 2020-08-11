import React from "react"
import Subtitle from "../../Subtitle"
import MapComponent from "./MapComponent"

const ContactDetails = () => {
  return (
    <div className="pt-24">
      <div className="md:flex md:justify-between">
        <div>
          <Subtitle subtitle="by phone" display="hidden" color="black" />
          <div className="flex justify-start md:flex-col">
            <a href="tel:+6598764321">
              <h1 className="text-xl">+65 6202 4737</h1>
            </a>
            <a href="tel:+6598764321">
              <h1 className="text-xl pl-4 md:pl-0">+65 6491 5902</h1>
            </a>
          </div>
        </div>
        <div className="pt-16 md:pt-0">
          <Subtitle subtitle="by email" display="hidden" color="black" />
          <a href="mailto:info@capitalsquarepartners.com">
            <h1 className="text-xl">info@capitalsquarepartners.com</h1>
          </a>
          <a href="mailto:business@capitalsquarepartners.com">
            <h1 className="text-xl">business@capitalsquarepartners.com</h1>
          </a>
        </div>
        <div className="pt-16 md:pt-0">
          <Subtitle
            subtitle="meet us at the office"
            display="hidden"
            color="black"
          />
          <MapComponent />
          <div className="h-5"></div>
        </div>
      </div>
      {/* <div className="pt-16">
        <div></div>
        <div>
          <Subtitle subtitle="home" pb="null" />
          <Subtitle subtitle="home" pb="null" />
          <Subtitle subtitle="home" pb="null" />
          <Subtitle subtitle="home" pb="null" />
          <Subtitle subtitle="home" pb="null" />
        </div>
      </div> */}
    </div>
  )
}

export default ContactDetails
