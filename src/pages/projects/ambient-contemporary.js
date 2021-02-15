import React from "react"
import Layout from "../../components/layout"
import Menu from "../../components/menu"
import ambient from "../../img/ambient-scrn.png"
import gradient from "../../img/ambient-scrn-2.png"

const Ambient = () => {
  return (
    <Layout>
      <section className="grid lg:grid-cols-6 lg:gap-x-24 lg:mx-12 lg:p-12 grid-cols-2 p-10 gap-y-16">
        <div className="lg:col-span-4 col-span-2">
          <h1 className="text-2xl text-royal font-semibold">
            Ambient Contemporary
          </h1>
        </div>
        <div className="col-span-2">
          <Menu />
        </div>
      </section>
      <section className="grid lg:grid-cols-6 lg:gap-x-24 lg:p-12 lg:mt-20 lg:mx-12 text-base font-medium grid-cols-2 gap-y-10 p-10 mt-8">
        <section className="col-span-2 lg:hidden">
          <img src={ambient} alt="ambient-contemporary homepage screenshot" />
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
                Create React App, Material UI, Framer Motion, Easybase
              </span>
            </li>
            <li>
              Links: <br />
              <a
                className="text-darkgrey mustard-line"
                href="https://github.com/strtmack/ambient-contemporary"
                target="_blank"
                rel="noreferrer noopener"
              >
                GitHub
              </a>{" "}
              <br />
              <a
                className="text-darkgrey mustard-line"
                href="https://strtmack.github.io/ambient-contemporary/"
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
              Ambient Contemporary is a proof of concept for a music
              library/streaming microsite. The library data and files are served
              by a database on Easybase (a very simple, lightweight alternative
              to, say, AWS Amplify or even Firebase).
            </p>
            <p className="lg:mb-10 mb-6">
              The floaty gradient shapes are canvas animations. I've been
              experimenting and learning the basics of drawing and animation
              with canvas as a lot of the best-looking sites I see tend to
              utilise this element in one way or another.
            </p>
          </section>
          <section className="col-span-2 lg:grid hidden">
            <img src={ambient} alt="ambient-contemporary homepage screenshot" />
          </section>
          <section className="col-span-2 lg:hidden">
            <img src={gradient} alt="ambient-gradient" />
          </section>
          <section className="col-span-2 lg:grid hidden">
            <img src={gradient} alt="ambient-gradient" />
          </section>
          <section className="col-span-2">
            <p className="lg:mb-10 mb-6">
              The music found on this web app is an assortment of my own demos
              and experiments that were lying around on my hard drive. Some of
              them were produced for a series of short films but were never
              used, some were just experiments with new pieces of equipment or
              software, and now they live here in a little corner of the
              internet.
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
                Create React App, Material UI, Framer Motion, Easybase
              </span>
            </li>
            <li>
              Links: <br />
              <a
                className="text-darkgrey mustard-line"
                href="https://github.com/strtmack/ambient-contemporary"
                target="_blank"
                rel="noreferrer noopener"
              >
                GitHub
              </a>{" "}
              <br />
              <a
                className="text-darkgrey mustard-line"
                href="https://strtmack.github.io/ambient-contemporary/"
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

export default Ambient
