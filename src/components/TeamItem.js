import React from "react"
import Fade from "react-reveal/Fade"

function TeamItem({ src, title }) {
  return (
    <Fade bottom>
      <div className="col-lg-4 my-4 col-sm-12">
        <img src={src} className="img-fluid rounded-circle" width="200px" />
        <h3 className="mt-5">{title}</h3>
        <p>
          test
        </p>
      </div>
    </Fade>
  )
}

export default TeamItem
