import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Menu from "../components/menu"

const Projects = () => {
  return (
    <Layout>
      <div className="grid grid-cols-6 gap-x-24 mx-12 p-12">
        <div className="grid col-span-4">
          <h1 className="text-4xl text-royal font-semibold">Projects</h1>
        </div>
        <div className="grid col-span-2 text-lg font-medium">
          <Menu />
        </div>
      </div>
      <div className="project-list grid grid-cols-6 gap-x-24 p-12 mt-20 mx-12 text-lg">
        <div className="col-span-2">
          <p className="font-semibold">
            <Link to="/projects/good-radio" className="sangiovese-line">
              Good Radio
            </Link>
          </p>
          <p className="text-darkgrey font-medium">
            An online radio mobile app built with Expo/React Native
          </p>
        </div>
        <div className="col-span-2">
          <p className="font-semibold">
            <Link to="/projects/kbd-synth" className="sangiovese-line">
              Kbd-Synth
            </Link>
          </p>
          <p className="text-darkgrey font-medium">
            A granular piano synth for your browser
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Projects
