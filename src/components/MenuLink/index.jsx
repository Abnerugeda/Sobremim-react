import React from 'react'
import styles from './MenuLink.module.scss'
import { Link, useLocation } from 'react-router-dom'

export default function MenuLink({route, children}) {
  const localizacao = useLocation();

  return (
    <Link className={`
          ${styles.link}
          ${localizacao.pathname === route ? styles.linkDestacado : ""}
          `} to={route}>
          {children}
        </Link>
  )
}
