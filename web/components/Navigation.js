import React, { Component } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Navigation.module.sass'

function Navigation (props) {
  const { home, posts } = props
  return (
    <nav className={styles.container}>
      <ul className={styles.contactMenu}>
        <h2 className="none">Contact</h2>

        <li id="mail-link">
          <Link href="mailto:contact@sjagla.com">
            <a> 
              <span className={"none"}>Mail</span> 
              <Image
                src="/images/mail.svg" 
                alt="Mail icon"
                width={30}
                height={30}
              />
            </a>
          </Link>
        </li>

        <li id="dribbble-link">
          <Link href="https://dribbble.com/sjagla">
            <a> 
              <span className={"none"}>Dribble</span> 
              <Image
                src="/images/dribbble.svg" 
                alt="Dribbble icon"
                width={30}
                height={30}
              />
            </a>
          </Link>
        </li>

        <li id="twitter-link">
          <Link href="https://twitter.com/sebastian_jagla">
            <a> 
              <span className={"none"}>Twitter</span> 
              <Image
                src="/images/twitter.svg" 
                alt="Twitter icon"
                width={30}
                height={30}
              />
            </a>
          </Link>
        </li>

        <li id="linkedin-link">
          <Link href="https://www.linkedin.com/in/sjagla/">
            <a> 
              <span className={"none"}>LinkedIn</span> 
              <Image
                src="/images/linkedin.svg" 
                alt="Linkedin icon"
                width={30}
                height={30}
              />
            </a>
          </Link>
        </li>
      </ul>

      {home && (
        <ul className={styles.navMenu}>
          <h2 className={"none"}>Table of contents</h2>
          {posts.map(
            ({ _id, title = '', slug = '', navDescription = '' }) =>
              slug && (
                <li key={_id}>
                  <Link href='/post/[slug].js' as={`/post/${slug.current}`}>
                    <a>
                      <span>{title}</span>
                      <p>{navDescription}</p>
                    </a>
                  </Link>
                </li>
              )
          )}
          <li>
            <Link href="#miniShots">
              <a>
                <span>Mini shots</span>
              </a>
            </Link>
          </li>
        </ul>)}
    </nav>
  )
}

export default Navigation
