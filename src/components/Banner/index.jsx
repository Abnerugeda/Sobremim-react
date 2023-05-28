import React from 'react'
import styles from "./Banner.module.scss"
import circuloColorido from "assets/circulo_colorido.png"
import minhaFoto from "assets/minha_foto.png"

export default function Banner() {
  return (
    <div className={styles.banner}>
        <div className={styles.apresentacao}> 
            <h1 className={styles.titulo}>
                Olá, Mundo!
            </h1>
            <p className={styles.paragrafo}>
                Boas vindas
            </p>
        </div>
        <div className={styles.imagens}>
            <img 
                className={styles.circuloColorido}
                aria-hidden={true} 
                src={circuloColorido} 
                alt="logo"
            />
            <img className={styles.minhaFoto} src={minhaFoto} alt="" />
        </div> 
    </div>
  )
}
