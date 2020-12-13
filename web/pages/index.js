import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.sass'
import Navigation from '../components/Navigation'
import { Waypoint } from 'react-waypoint';
import ChangeBackground from '../components/ChangeBackground'
import Footer from '../components/Footer'


export default function Home() {
  let fontLink="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Spectral:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
  return (
    <div className={styles.container}>
      <Head>
        <title>Sebastian Jagla</title>
        <link rel="icon" href="/favicon.svg"/> 
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href={fontLink} rel="stylesheet"/> 
      </Head> 
      
      <Waypoint
        onEnter={({ event }) => {
          ChangeBackground('#D6F3D9');
        }}

        topOffset='300px'
        bottomOffset='500px'
      >
        <header className={styles.header}>
          <Navigation home={true}/>
          <h1 className={styles.homeHeading1}>Sebastian <br/> Jagła</h1>
          <p className={styles.homeSubheading1}>I <span>design</span> interfaces such as websites or apps.</p>
          <img className={styles.figure1} src="/images/figure1.svg"/>
          <img className={styles.figure2} src="/images/figure2.svg"/>
          <img className={styles.figure3} src="/images/figure3.svg"/>
          <img className={styles.figure4} src="/images/figure4.svg"/>
          <img className={styles.figure5} src="/images/figure5.svg"/>
          <img className={styles.figure8} src="/images/figure8.svg"/>
        </header>
      </Waypoint>

      <main className={styles.main}>
        <Waypoint
          onEnter={({ previousPosition, currentPosition, event }) => {
            ChangeBackground('#FBFBFB');
          }}
          topOffset='500px'
          bottomOffset='500px'
        >
          <section className={styles.cases}>
            <h2 className={"none"}>Case studies</h2>

            <div className={styles.caseContainer}>
              <Link href="post/beauty-and-beauty">
                <a>
                  <h3 className={styles.homeHeading2}>Beauty & Beauty</h3>  
                  <Image
                    src="/images/beauty.png" 
                    alt="A frame of a website for a beauty salon"
                    width={1000}
                    height={750}
                  />
                </a>
              </Link>
            </div>

            <div className={styles.caseContainer}>
              <Link href="post/e-sensei">
                <a>
                  <h3 className={styles.homeHeading2}>E-sensei</h3>
                  <Image
                    src="/images/esensei.png" 
                    alt="A frame of a website for an AI-related game project"
                    width={1000}
                    height={750}
                  />
                </a>
              </Link>
            </div>
          </section>
        </Waypoint>
        <Waypoint
              topOffset='300px'
              onEnter={({ previousPosition, currentPosition, event }) => {
                ChangeBackground('#FBD7D4');
              }}>
          <section className={styles.shots} id="miniShots">
            <h2 className={styles.heading2}>Mini shots</h2>
            <div className={styles.shotContainer}>
              <Link href="https://dribbble.com/shots/14533586-Website-for-the-Polish-young-Greens">
                <a>
                  <Image
                  src="/images/zieloni.png" 
                  alt="A frame of a website for an AI-related game project"
                  width={530}
                  height={400}
                  />
                  <h3 className={styles.heading5}>Zieloni</h3>
                </a>
              </Link>
            </div>

            <div className={styles.shotContainer}>
              <Link href="https://dribbble.com/shots/14533205-An-accepted-concept-for-a-mathematician-s-website">
                <a>
                <Image
                  src="/images/dominik.png" 
                  alt="A frame of a website for an AI-related game project"
                  width={530}
                  height={400}
                />
                <h3 className={styles.heading5}>A scientist's website</h3>
                </a>
              </Link>
            </div>

            <div className={styles.shotContainer}>
              <Link href="https://dribbble.com/shots/10987083-Biotech-company-app-logo/attachments/2589891?mode=media">
                <a>
                  <Image
                  src="/images/app.png" 
                  alt=""
                  width={530}
                  height={400}
                  />
                  <h3 className={styles.heading5}>Biotech app icon</h3>
                </a>
              </Link>
            </div>
          </section>
        </Waypoint>
      </main>
      <Footer home={true}/>
    </div>
  )
}