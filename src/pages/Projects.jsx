import React from "react"
import Project from "../components/project/Project"

import { projects } from "../helpers/ProjectsList"

const Projects = () => {
  return (
    <>
      <main className="section">
        <div className="container">
          <h2 className="title-1">Projects</h2>
          <ul className="projects">
            {projects.map((project, i) => {
              return (
                <Project
                  key={i}
                  title={project.title}
                  img={project.img}
                  index={i}
                />
              )
            })}
          </ul>
        </div>
      </main>
    </>
  )
}

export default Projects
