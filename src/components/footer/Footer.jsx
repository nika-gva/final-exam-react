import React from 'react'
import styles from "./footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <h1 className='font-bold md:text-[25px] '>
          &copy; Nika gvarliani
        </h1>
    </footer>
  )
}

export default Footer