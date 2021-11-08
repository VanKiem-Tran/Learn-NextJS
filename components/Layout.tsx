import * as React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

export interface IAppProps {}

export default function App(props: React.PropsWithChildren<IAppProps>) {
  return (
    <div>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  )
}
