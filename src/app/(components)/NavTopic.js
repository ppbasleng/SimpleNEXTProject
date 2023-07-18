import Link from 'next/link';
import styles from './NavTopic.module.css'
function NavTopic(props) {
    return ( 
        <li className={styles.navitem}>
          <Link href="/">
            <div className={`${styles.navlink} ${props.active?(styles.active):("")}`}>
              {props.icon}
              <span>{props.title}</span>
            </div>
          </Link>
        </li>
     );
}

export default NavTopic;