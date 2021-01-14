import React from "react"
import Layout from "../../components/layout"
import Menu from "../../components/menu"
import kbdGif from "../../img/kbdsynth.gif"

const KbdSynth = () => {
  return (
    <Layout>
      <section className="grid lg:grid-cols-6 lg:gap-x-24 lg:mx-12 lg:p-12 grid-cols-2 p-10 gap-y-16">
        <div className="lg:col-span-4 col-span-2">
          <h1 className="text-2xl text-royal font-semibold">Kbd-Synth</h1>
        </div>
        <div className="col-span-2">
          <Menu />
        </div>
      </section>
      <section className="grid lg:grid-cols-6 lg:gap-x-24 lg:p-12 lg:mt-20 lg:mx-12 text-base font-medium grid-cols-2 gap-y-10 p-10 mt-8">
        <section className="col-span-2 lg:hidden">
          <img src={kbdGif} alt="kbd-synth screen recording" />
        </section>
        <div className="col-span-2 lg:hidden">
          <ul>
            <li className="mb-4">
              Programming Languages: <br />
              <span className="text-darkgrey">HTML, CSS, JavaScript</span>
            </li>
            <li className="mb-4">
              Toolkit: <br />
              <span className="text-darkgrey">Ableton Live (sound design)</span>
            </li>
            <li>
              Links: <br />
              <a
                className="text-darkgrey mustard-line"
                href="https://github.com/strtmack/kbd-synth"
                target="_blank"
                rel="noreferrer noopener"
              >
                GitHub
              </a>{" "}
              <br />
              <a
                className="text-darkgrey mustard-line"
                href="https://strtmack.github.io/kbd-synth/"
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
              Kbd-Synth is a sample-based synthesizer web application. It's a
              small experiment that's basically my take on the classic
              'JavaScript Drum Kit', using vanilla JavaScript to trigger sounds
              with keyboard events in the browser.
            </p>
            <p className="lg:mb-12 mb-6">
              Instead of using drum sounds, I created a set of custom samples
              with a digital piano processed with granular delay and chorus
              effects. All the notes are in one key (C), so you can pretty much
              randomly mash your keyboard and still make some nice sounds.
            </p>
            <p className="lg:mb-12">
              I also took the opportunity here to try my hand at the
              'neumorphic' UI style that's gained popularity in the last year or
              two, utilising drop-shadows and soft edges to simulate a 3D,
              physical interface in a digital environment.
            </p>
          </section>
          <section className="col-span-2 lg:grid hidden">
            <img src={kbdGif} alt="kbd-synth screen recording" />
          </section>
        </article>
        <div className="col-span-2 lg:grid hidden">
          <ul>
            <li className="mb-4">
              Programming Languages: <br />
              <span className="text-darkgrey">HTML, CSS, JavaScript</span>
            </li>
            <li className="mb-4">
              Toolkit: <br />
              <span className="text-darkgrey">Ableton Live (sound design)</span>
            </li>
            <li>
              Links: <br />
              <a
                className="text-darkgrey mustard-line"
                href="https://github.com/strtmack/kbd-synth"
                target="_blank"
                rel="noreferrer noopener"
              >
                GitHub
              </a>{" "}
              <br />
              <a
                className="text-darkgrey mustard-line"
                href="https://strtmack.github.io/kbd-synth/"
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

export default KbdSynth
