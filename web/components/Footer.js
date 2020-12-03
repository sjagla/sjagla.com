// Footer.js
import styles from '../styles/Footer.module.sass'
import { Waypoint } from 'react-waypoint';
import ChangeBackground from './ChangeBackground.js'
import Link from 'next/link'
import Image from 'next/image'


export default function Footer({ home=false }) {
    let description = "I'm a UX/UI designer, but I studied cognitive science. I love design, human-computer interaction, philosophy, open-source and some more. I'm also a firm believer in social change and would like to leave the world having made it at least a little bit better."
    if (home) {
        return (
            <footer className={styles.footerHome}>
                <Waypoint onEnter={({ event }) => {ChangeBackground('#D4E1FB');}} topOffset='200px' bottomOffset='200px'/>
                <h2 className={styles.heading2}>My profile</h2>
                <p className={styles.description}>{description}</p>
                <img 
                    className={styles.profileImage}
                    src="/images/profile.jpg" 
                    alt="Me standing amongst people at a protest. I have a mask on (coronavirus)."/>
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
                    width={40}
                    height={40}
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
                    width={40}
                    height={40}
                  />
                </a>
              </Link>
            </li>

            <li id="twitter-link">
              <Link href="https://twitter.com/sjagla">
                <a> 
                  <span className={"none"}>Twitter</span> 
                  <Image
                    src="/images/twitter.svg" 
                    alt="Twitter icon"
                    width={40}
                    height={40}
                  />
                </a>
              </Link>
            </li>
          </ul>
            </footer>
    
        )
    } else {
        return (
            <footer className={styles.footerPost}>
                <p className={styles.description}>{description}</p>
                <img 
                    className={styles.profileImage}
                    src="/images/profile.png" 
                    alt="Me standing amongst people at a protest. I have a mask on (coronavirus)."/>
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
                    width={40}
                    height={40}
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
                    width={40}
                    height={40}
                  />
                </a>
              </Link>
            </li>

            <li id="twitter-link">
              <Link href="https://twitter.com/sjagla">
                <a> 
                  <span className={"none"}>Twitter</span> 
                  <Image
                    src="/images/twitter.svg" 
                    alt="Twitter icon"
                    width={40}
                    height={40}
                  />
                </a>
              </Link>
            </li>
          </ul>
            </footer>
    
        )
    }
}