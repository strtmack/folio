import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../components/layout"
import Menu from "../../components/menu"
import GoodRadioRec from "../../video/good-radio-rec.mp4"

const GoodRadio = () => {
  const appData = useStaticQuery(graphql`
    query GoodRadioImages {
      icon: file(relativePath: { eq: "icon.png" }) {
        childImageSharp {
          id
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      screenshot: file(relativePath: { eq: "good-radio-scrn.jpg" }) {
        childImageSharp {
          id
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      screenshotTwo: file(relativePath: { eq: "good-radio-scrn-2.jpg" }) {
        childImageSharp {
          id
          fixed(width: 400) {
            ...GatsbyImageSharpFixed
          }
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <section className="grid grid-cols-6 gap-x-24 mx-12 p-12">
        <div className="grid col-span-4">
          <h1 className="text-2xl text-royal font-semibold">Good Radio</h1>
        </div>
        <div className="grid col-span-2">
          <Menu />
        </div>
      </section>
      <section className="project-list grid grid-cols-6 gap-x-24 p-12 mt-20 mx-12 text-base font-medium">
        <article className="grid col-span-4 grid-cols-4 gap-x-24">
          <section className="col-span-2">
            <p className="mb-10">
              Good Radio is a mobile app for listening to online radio, from a
              small, curated selection of independent, music-focused stations.
            </p>
            <p className="mb-12">
              The idea for the app was fairly simple. I listen to a lot of
              online radio, and my problem was that I didn't necessarily want to
              have to install a standalone app on my phone for every station
              that I listen to. In some cases, the station didn't even have an
              Android version of their app (I currently use a Google Pixel
              phone), or an app at all, for that matter.
            </p>
          </section>
          <div className="col-span-2 mb-12">
            <Img fluid={appData.icon.childImageSharp.fluid} alt="app-icon" />
          </div>
          <div className="col-span-2 mb-12 flex justify-start">
            <video controls>
              <source src={GoodRadioRec} type="video/mp4" />
            </video>
          </div>
          <section className="col-span-2">
            <p className="mb-10">
              Upon doing some research, I discovered a couple of existing
              'online radio aggregration' type apps, but found that they were
              packed with an overwhelming amount of (largely commercial)
              stations, as well as being pretty awful to use due to the amount
              of ads plastered all over the place.
            </p>
            <p className="mb-10">
              I wanted something much smaller in scope, more curated, and with a
              clean, simple user interface.
            </p>
            <p className="mb-12">
              And so Good Radio was born. I decided to use Expo as a framework
              to take care of the build/deployment nitty gritty so that I could
              focus on getting used to React Native syntax and the design and
              functionality of the app itself.
            </p>
          </section>
          <section className="col-span-2">
            <p className="mb-10">
              In terms of learning experience, probably the most valuable part
              of building Good Radio was diving deeper into asynchronous
              JavaScript functions, which I used to handle loading/mounting of
              the audio player and selected audio stream, and utilising the
              await keyword for greater control over said functions.
            </p>
            <p className="mb-12">
              Good Radio is currently fully functional on Android, with an iOS
              version basically dependent on some updates to Expo's Audio API.
              If you have an Android phone with the Expo app installed, you can
              test Good Radio{" "}
              <a
                className="hover:text-darkgrey"
                href="https://expo.io/@mackavelli/projects/drift"
                target="_blank"
                rel="noreferrer noopener"
              >
                here.
              </a>
            </p>
          </section>
          <div className="col-span-2 mb-12">
            <Img
              fluid={appData.screenshotTwo.childImageSharp.fluid}
              alt="app-screenshot"
            />
          </div>
        </article>
        <div className="col-span-2">
          <ul>
            <li className="mb-4">
              Programming Languages: <br />
              <span className="text-darkgrey">React Native, JavaScript</span>
            </li>
            <li className="mb-4">
              Toolkit: <br />
              <span className="text-darkgrey">Expo, Android Studio</span>
            </li>
            <li>
              Links: <br />
              <a
                className="text-darkgrey mustard-line"
                href="https://github.com/stuart-mack/good-radio"
                target="_blank"
                rel="noreferrer noopener"
              >
                GitHub
              </a>{" "}
              <br />
              <a
                className="text-darkgrey mustard-line"
                href="https://expo.io/@mackavelli/projects/drift"
                target="_blank"
                rel="noreferrer noopener"
              >
                Expo
              </a>
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  )
}

export default GoodRadio
