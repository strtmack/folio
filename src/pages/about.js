import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Menu from "../components/menu"

const About = () => {
  const data = useStaticQuery(graphql`
    query Images {
      image: file(relativePath: { eq: "pola.jpg" }) {
        childImageSharp {
          id
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <div className="grid lg:grid-cols-6 lg:gap-x-24 lg:mx-12 lg:p-12 p-10 grid-cols-2 gap-y-16">
        <div className="lg:col-span-4 col-span-2">
          <h1 className="text-2xl text-royal font-semibold">About</h1>
        </div>
        <div className="col-span-2">
          <Menu />
        </div>
      </div>
      <div className="grid lg:grid-cols-6 lg:gap-x-24 lg:p-12 lg:mt-20 lg:mx-12 text-base font-medium p-10 grid-cols-2">
        <div className="lg:col-span-3 col-span-2">
          <p className="mb-6">My name is Stuart Mackinnon.</p>
          <p className="mb-6">
            I'm a software developer based in Melbourne, Australia, who makes
            things for the web and mobile.
          </p>
          <p className="mb-6">
            Some of the programming languages, frameworks, and systems I work
            with include:
          </p>
          <div className="mb-8 grid grid-cols-3 text-royal lg:text-base text-sm gap-x-4">
            <ul>
              <li>HTML5</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Tailwind</li>
            </ul>
            <ul>
              <li>React</li>
              <li>React Native</li>
              <li>Node.js</li>
              <li>Express</li>
            </ul>
            <ul>
              <li>Ruby</li>
              <li>SQL</li>
              <li>Git</li>
            </ul>
          </div>
          <p className="mb-6">
            Beyond specific languages, frameworks, and libraries, I'm interested
            in continually learning and improving in the fundamental skills and
            intangibles that I think make a good developer - understanding of
            concepts, knowledge of best practices, problem-solving, curiosity,
            and creativity.
          </p>
        </div>
        <div></div>
        <section className="col-span-2 mt-6 lg:mt-0">
          <Img
            fixed={data.image.childImageSharp.fixed}
            alt="polaroid"
            className="mb-6"
          />
          <ul>
            <li>
              <a
                className="royal-line"
                href="https://github.com/strtmack"
                rel="noreferrer noopener"
                target="_blank"
              >
                GitHub /strtmack
              </a>
            </li>
            <li>
              <a
                className="royal-line"
                href="mailto:strtmack@gmail.com"
                rel="noreferrer noopener"
                target="_blank"
              >
                Email strtmack@gmail.com
              </a>
            </li>
          </ul>
        </section>
      </div>
    </Layout>
  )
}

export default About
