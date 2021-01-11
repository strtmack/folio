import React from "react"
import Layout from "../../components/layout"
import Menu from "../../components/menu"
import kbdGif from "../../img/kbdsynth.gif"

const KbdSynth = () => {
  return (
    <Layout>
      <section className="grid grid-cols-6 gap-x-24 mx-12 p-12">
        <div className="grid col-span-4">
          <h1 className="text-2xl text-royal font-semibold">Kbd-Synth</h1>
        </div>
        <div className="grid col-span-2 font-semibold">
          <Menu />
        </div>
      </section>
      <section className="project-list grid grid-cols-6 gap-x-24 p-12 mt-20 mx-12 text-base font-medium">
        <article className="grid col-span-4 grid-cols-4 gap-x-24">
          <section className="col-span-2">
            <p className="mb-10">
              Kbd-Synth is a sample-based synthesizer web application. It's a
              small experiment that's basically my take on the classic
              'JavaScript Drum Kit', using vanilla JavaScript to trigger sounds
              with keyboard events in the browser.
            </p>
            <p className="mb-10">
              Instead of using drum sounds, I created a set of custom samples
              with a digital piano processed with granular delay and chorus
              effects. All the notes are in one key (C), so you can pretty much
              randomly mash your keyboard and still make some nice sounds.
            </p>
            <p className="mb-10">
              I also took the opportunity here to try my hand at the
              'neumorphic' UI style that's gained popularity in the last year or
              two, utilising drop-shadows and soft edges to simulate a 3D,
              physical interface in a digital environment.
            </p>
          </section>
          <section className="col-span-2">
            <img src={kbdGif} alt="kbd-synth screen recording" />
          </section>
        </article>
        <div className="col-span-2">
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
