import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Menu from "../components/menu"

const Projects = () => {
  return (
    <Layout>
      <div className="grid lg:grid-cols-6 lg:gap-x-24 lg:mx-12 lg:p-12 grid-cols-2 p-10 gap-y-16">
        <div className="grid lg:col-span-4 col-span-2">
          <h1 className="text-2xl text-royal font-semibold">Projects</h1>
        </div>
        <div className="grid col-span-2">
          <Menu />
        </div>
      </div>
      <div className="grid lg:grid-cols-6 lg:gap-x-24 lg:p-12 lg:mt-20 lg:mx-12 text-base p-10 grid-cols-2 gap-y-10 mt-8">
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
            <Link to="/projects/chirpy" className="sangiovese-line">
              Chirpy
            </Link>
          </p>
          <p className="text-darkgrey font-medium">
            A front end clone of a popular social media app
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
