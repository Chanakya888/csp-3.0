import React from "react"

const ListComponent = props => {
  const listArray = props.listArray
  return (
    <div className="richtextExperience">
      {listArray[0].props.children.map((item, index) => {
        return (
          <div className="flex pt-5" key={index}>
            {/* <div className="height-and-width-of-hifen bg-secondary mt-3"></div> */}
            <div className="">
              <div className="paragraph-width-container-for-templates ">
                {item}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ListComponent
