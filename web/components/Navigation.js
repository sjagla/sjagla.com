import React, { Component } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Navigation.module.sass'

function Navigation(props) {
    return(
        <nav className={styles.container}>
          <ul className={styles.contactMenu}>
            <h2 className="none">Contact</h2>
            {/* <li className="none" id="blog-link"> 
              <Link href="/blog"><a> Blog </a></Link>
            </li> */}

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
          </ul>

          {props.home && (
            <ul className={styles.navMenu}>
              <h2 className={"none"}>Table of contents</h2>
              <li>
                <Link href="/post/beauty-and-beauty"><a>
                      <span>Beauty & Beauty</span>
                      <p>beauty salon page</p>
                  </a></Link>
              </li>
              <li>
                <Link href="/post/e-sensei">
                  <a>
                      <span>E-sensei</span>
                      <p>e-sports product page</p>
                  </a>
                  </Link>
              </li>
              <li> 
                <Link href="#miniShots"><a> Mini shots </a></Link>
              </li>
            </ul>
            )
          }
        </nav>
    )
}

export default Navigation;