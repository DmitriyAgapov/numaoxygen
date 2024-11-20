import React, { FC, ReactNode } from 'react'
import styles from './Layout.module.scss'
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

interface ChildrenProps {
  children: ReactNode | ReactNode[]
  className?: string
  headerContent?: ReactNode | ReactNode[]
  footerContent?: ReactNode | ReactNode[]
  style?: never
}

const Layout: FC<ChildrenProps> = ({ children, className = '',style }) => {

  return (
      <div style={style} className={styles.Layout + ' ' + className}>
          <Header/>
            <main>{children}</main>
          <Footer/>
      </div>
  )
}

export default Layout
