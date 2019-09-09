import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'
import ImageList from '../components/imageListing'
import '../styles/style.scss'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link href="https://fonts.googleapis.com/css?family=Montserrat|Roboto&display=swap" rel="stylesheet"/>
    </Head>
    
    <div className="container">
    <Nav/>     
      <div className='hero content is-dark'>
        <section className="section">
          <h1>IMGH - Images that capture</h1>
          <div className="form">
            <input className="input" type="text" placeholder="search for tags"/>
          </div>
        </section>


        <div className='columns'>
            <div className='column is-3'>
              <h2>Popular tags</h2>
              <ul>
                <li><a>Bird</a> - 1</li>
              </ul>
            </div>
            <a className='column is-9'>
              <ImageList>
              </ImageList>
            </a>
        </div>
      </div>
    </div>
  </div>
)

export default Home
