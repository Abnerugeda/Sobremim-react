import React from 'react'
import styles from './Menu.module.scss'
import { Link, useLocation } from 'react-router-dom'

export default function Menu() {
  const localizacao = useLocation();

  return (
    <header>
      <nav className={styles.navegacao}>
        <Link className={`
          ${styles.link}
          ${localizacao.pathname === '/' ? styles.linkDestacado : ""}
          `} to="/">
          Inicío
        </Link>
        <Link className={`
          ${styles.link}
          ${styles.linkDestacado}
          `} to="/sobremim">
          Sobre mim
        </Link>
      </nav>
    </header>
  )
}
