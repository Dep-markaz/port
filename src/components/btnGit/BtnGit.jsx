import React from "react"
import pro2 from "./gitHub-black.svg"
import "./style.css"

const BtnGit = ({ link }) => {
  return (
    <>
      <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
        <img src={pro2} alt="" />
        GitHub repo
      </a>
    </>
  )
}

export default BtnGit
