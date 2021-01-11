import React from "react"
import { Helmet } from "react-helmet"

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>strtmack</title>
        <link rel="canonical" href="https://www.strtmack.com" />
      </Helmet>
      <div className="min-h-screen font-inter bg-sand m-0 pt-32">
        {children}
      </div>
    </>
  )
}
