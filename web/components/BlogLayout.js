import Head from 'next/head'
import styles from '../styles/BlogLayout.module.sass'
import Link from 'next/link'
import Navigation from './Navigation.js'
import Image from 'next/image'
import Footer from './Footer'



export default function BlogLayout({ children, siteTitle, postDescription, postImage }) {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="og:title" content={siteTitle}/>
        <title>{siteTitle + "| Sebastian Jagla"}</title>
        <link rel="icon" href="/favicon.svg"/> 
      </Head>

      <header className={styles.header}>
        <Navigation home={false}/>
        <Link href='/'>
          <a className={styles.backLink}> <img src="/images/arrow.svg"/>
            Back to home 
          </a>
        </Link>
        <div>
          <div>
            <h1>{siteTitle}</h1>
            <p>{postDescription}</p>
          </div>
          <Image
            src = {postImage}
            width={800}
            height={600}
            // layout="responsive"
          />
        </div>
      </header>

      <main className={styles.main}>

        <article>
          {children}
        </article>

      </main>

      <Footer/>
    </div>
  )
}
