import Link from "next/link";
import React from "react";
import styles from "../../styles/botao.module.css"

export default function BotaoLink({ href, children, filled = false, tiny = false }) {
   return (
      <div className={filled ? styles.filled : styles.hollow}>
         <div className={(tiny ? styles.tiny : styles.big)}>
            <Link href={href}>
               {children}
            </Link >
         </div>
      </div>
   )
}