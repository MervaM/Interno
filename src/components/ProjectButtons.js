import React from "react";

function ProjectButtons({getImages}) {
    return(
    <div className="project__btns">
        <button className="project__btn" onClick={() => {
            getImages('bathroom')
        }}>Bathroom</button>
        <button className="project__btn" onClick={() => {
            getImages('bedroom')
        }}>Bed Room</button>
        <button className="project__btn" onClick={() => {
            getImages('kitchen')
        }}>Kitchen</button>
        <button className="project__btn" onClick={() => {
            getImages('living')
        }}>Living Area</button>
    </div>
  )
}
export {ProjectButtons};