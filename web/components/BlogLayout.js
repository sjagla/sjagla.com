import Head from 'next/head'
import styles from '../styles/BlogLayout.module.sass'
import Link from 'next/link'
import Navigation from './Navigation.js'
import Image from 'next/image'
import Footer from './Footer'



export default function BlogLayout({ children, siteTitle, postDescription, postImage }) {
  let fontLink="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Spectral:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
  return (
    <div className={styles.container}>
      <Head>
        <meta name="og:title" content={siteTitle}/>
        <title>{siteTitle + "| Sebastian Jagla"}</title>
        <link rel="icon" href="/favicon.svg"/> 
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href={fontLink} rel="stylesheet"/> 
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
