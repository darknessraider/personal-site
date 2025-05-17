import React from 'react'

const Navbar: React.FC = () => {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>Woodward Spivey</h1>
      <ul style={styles.navLinks}>
        <li><a href="/" style={styles.link}>Home</a></li>
        <li><a href="/about" style={styles.link}>About</a></li>
        <li><a href="/projects" style={styles.link}>Projects</a></li>
        <li><a href="/blog" style={styles.link}>Blog</a></li>
        <li><a href="/contact" style={styles.link}>Contact</a></li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: '60px',
    display: 'flex',
    backgroundColor: '#aaaaaa',
    color: 'white',
    padding: '1rem',
    justifyContent: 'space-between',
    alignItems: 'center',
  } as React.CSSProperties,
  logo: {
    margin: 0
  } as React.CSSProperties,
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '1rem',
    margin: 0,
  } as React.CSSProperties,
  link: {
    color: 'white',
    textDecoration: 'none',
  } as React.CSSProperties,
};

export default Navbar;

