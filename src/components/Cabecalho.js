import Image from "next/image"
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import styles from '../../styles/Header.module.css'
import logo from '../../public/Logo.svg'
import BotaoLink from "./BotaoLink"

export default function Cabecalho() {
   return (
      <header className={styles.header}>
         <div className={styles.container}>
            <div className={styles.direita}>
               <div className={styles.logo}>
                  <Link href='/'>
                     <Image src={logo} alt='Logo da Alura Geek' />
                  </Link>
               </div>
               <div className={styles.search}>
                  <input type="text" placeholder="O que deseja encontrar?" className={styles.searchBox} />
                  <FontAwesomeIcon icon={faMagnifyingGlass} size={"lg"} />
               </div>
            </div>
            <BotaoLink href='/login' tiny>
               Login
            </BotaoLink>
         </div>
      </header>)
}