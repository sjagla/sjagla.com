import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.sass'
import client from '../client'
import Navigation from '../components/Navigation'
import { Waypoint } from 'react-waypoint'
import ChangeBackground from '../components/ChangeBackground'
import Footer from '../components/Footer'
import imageUrlBuilder from '@sanity/image-url'

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client)

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
function urlFor (source) {
  return builder.image(source)
}

export default function Home (props) {
  const { posts, shots } = props
  return (
    <div className={styles.container}>
      <Head>
        <title>Sebastian Jagla</title>
        <link rel="icon" href="/favicon.svg"/> 
      </Head>
      <Waypoint
        onEnter={({ event }) => {
          ChangeBackground('#D6F3D9')
        }}
        topOffset='300px'
        bottomOffset='500px'
      >
        <header className={styles.header}>
          <Navigation home={true} posts={posts}/>
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
            ChangeBackground('#FBFBFB')
          }}
          topOffset='500px'
          bottomOffset='500px'
        >
          <section className={styles.cases}>
            <h2 className={"none"}>Case studies</h2>

            {posts.map(
              ({ _id, title = '', slug = '', mainImage = '', imageAlt = '' }) =>
                slug && (
                  <div key={_id} className={styles.caseContainer}>
                    <Link href='/post/[slug].js' as={`/post/${slug.current}`}>
                      <a>
                        <h3 className={styles.homeHeading2}>{title}</h3>
                        <Image
                          src={`${urlFor(mainImage.asset)}`}
                          alt={`${imageAlt}`}
                          width={1000}
                          height={750}
                        />
                      </a>
                    </Link>
                  </div>
                )
            )}
          </section>
        </Waypoint>
      </main>
      <Footer home={true}/>
    </div>
  )
}

Home.getInitialProps = async () => ({
  posts: await client.fetch(`
    *[_type == "post" && show == true]|order(publishedAt desc)
  `),
  shots: await client.fetch(`
    *[_type == "shot" && show == true]|order(publishedAt desc)
  `)
})
