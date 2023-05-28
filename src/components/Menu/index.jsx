import React from 'react'
import styles from './Menu.module.scss'
import MenuLink from '../MenuLink';

export default function Menu() {

  return (
    <header>
      <nav className={styles.navegacao}>
        <MenuLink route="/">
          Início
        </MenuLink>
       <MenuLink route="/sobremim">
          Sobremim
       </MenuLink>
      </nav>
    </header>
  )
}
