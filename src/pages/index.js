import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Menu from "../components/menu"

export default function Home() {
  return (
    <Layout>
      <div className="grid lg:grid-cols-6 lg:gap-x-24 lg:mx-12 lg:p-12 p-10 grid-cols-2 gap-y-16">
        <div className="lg:col-span-4 col-span-2">
          <h1 className="text-2xl font-medium">
            <span className="text-royal font-semibold">Stuart Mackinnon</span>{" "}
            is a software developer
            <br /> from Melbourne, Australia.
          </h1>
        </div>
        <div className="col-span-2">
          <Menu />
        </div>
      </div>
    </Layout>
  )
}
