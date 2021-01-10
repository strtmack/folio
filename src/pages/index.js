import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Menu from "../components/menu"

export default function Home() {
  return (
    <Layout>
      <div className="grid grid-cols-6 gap-x-24 mx-12 p-12">
        <div className="grid col-span-4">
          <h1 className="text-4xl font-medium">
            <span className="text-royal font-semibold">Stuart Mackinnon</span>{" "}
            is a software developer from Melbourne, Australia.
          </h1>
        </div>
        <div className="grid col-span-2">
          <Menu />
        </div>
      </div>
    </Layout>
  )
}
