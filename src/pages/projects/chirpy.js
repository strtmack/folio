import React from "react"
import Layout from "../../components/layout"
import Menu from "../../components/menu"
import chirpy1 from "../../img/chirpy-screen-1.png"
import chirpy2 from "../../img/chirpy-screen-2.png"

const Chirpy = () => {
  return (
    <Layout>
      <section className="grid lg:grid-cols-6 lg:gap-x-24 lg:mx-12 lg:p-12 grid-cols-2 p-10 gap-y-16">
        <div className="lg:col-span-4 col-span-2">
          <h1 className="text-2xl text-royal font-semibold">Chirpy</h1>
        </div>
        <div className="col-span-2">
          <Menu />
        </div>
      </section>
      <section className="grid lg:grid-cols-6 lg:gap-x-24 lg:p-12 lg:mt-20 lg:mx-12 text-base font-medium grid-cols-2 gap-y-10 p-10 mt-8">
        <section className="col-span-2 lg:hidden">
          <img src={chirpy1} alt="chirpy-screenshot" />
        </section>
        <div className="col-span-2 lg:hidden">
          <ul>
            <li className="mb-4">
              Programming Languages: <br />
              <span className="text-darkgrey">React/JSX, CSS</span>
            </li>
            <li className="mb-4">
              Toolkit: <br />
              <span className="text-darkgrey">
                Material UI, Create React App, react-twitter-embed
              </span>
            </li>
            <li>
              Links: <br />
              <a
                className="text-darkgrey mustard-line"
                href="https://github.com/strtmack/chirpy"
                target="_blank"
                rel="noreferrer noopener"
              >
                GitHub
              </a>{" "}
              <br />
              <a
                className="text-darkgrey mustard-line"
                href="https://strtmack.github.io/chirpy/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Live Demo
              </a>
            </li>
          </ul>
        </div>
        <article className="grid lg:col-span-4 lg:grid-cols-4 lg:gap-x-24 col-span-2 grid-cols-2 gap-y-10">
          <section className="col-span-2">
            <p className="lg:mb-10 mb-6">
              Chirpy is a front end/UI clone of a certain popular social media
              app. Just a little bit of practice working with React components
              and accurately styling to a reference. This was also a chance for
              me to dip my toes into databasing with Firebase/Firestore, with
              posts ('chirps') being stored and pulled from Firestore documents.
            </p>
          </section>
          <section className="col-span-2 lg:grid hidden">
            <img src={chirpy1} alt="chirpy-screenshot" />
          </section>
          <section className="col-span-2 lg:hidden">
            <img src={chirpy2} alt="chirpy-screenshot" />
          </section>
          <section className="col-span-2 lg:grid hidden">
            <img src={chirpy2} alt="chirpy-screenshot-2" />
          </section>
          <section className="col-span-2">
            <p className="lg:mb-10 mb-6">
              In terms of functionality, Chirpy is very much a work in progress.
              Right now, it's a front end clone and that's about it, although
              you can type a message and/or paste an image URL into the 'Chirp'
              form and post it to the timeline. There's also a widget component
              with embedded live feed from Twitter (you might have heard of this
              totally unrelated app). Planned features to add are user
              authentication/login, image upload (as opposed to image linking),
              responsiveness/media queries, and more.
            </p>
          </section>
        </article>
        <div className="col-span-2 lg:grid hidden">
          <ul>
            <li className="mb-4">
              Programming Languages: <br />
              <span className="text-darkgrey">React/JSX, CSS</span>
            </li>
            <li className="mb-4">
              Toolkit: <br />
              <span className="text-darkgrey">
                Material UI, Create React App, react-twitter-embed,
                react-flip-move
              </span>
            </li>
            <li>
              Links: <br />
              <a
                className="text-darkgrey mustard-line"
                href="https://github.com/strtmack/chirpy"
                target="_blank"
                rel="noreferrer noopener"
              >
                GitHub
              </a>{" "}
              <br />
              <a
                className="text-darkgrey mustard-line"
                href="https://strtmack.github.io/chirpy/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Live Demo
              </a>
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  )
}

export default Chirpy
