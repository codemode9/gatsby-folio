import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{
        margin: '0',
        height:'100%',
    width:'50%',
    display:'inline-block',
       }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >Timour Basegmez
          {siteTitle}
        </Link>
      </h1>
      <h2 style={{
        margin: '0',
        height:'100%',
    width:'50%',
    display:'inline-block',
       }}>
      <Link
      to="/"
      style={{
        color: 'white',
        textDecoration: 'none',
        padding: '15px',
      }}>About</Link>
      <Link
      to="/portfolio"
      style={{
        color: 'white',
        textDecoration: 'none',
        padding: '15px',
      }}>Portfolio</Link>
      <Link
      to="/contact"
      style={{
        color: 'white',
        textDecoration: 'none',
        padding: '15px',
      }}>Contact</Link>
      </h2>
    </div>
  </div>
)

export default Header
