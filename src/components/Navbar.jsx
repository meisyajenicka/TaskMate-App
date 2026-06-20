import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const isAuthenticated = localStorage.getItem('token') !== null

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <Link to="/" style={styles.brand}>
          <span style={styles.brandIcon}>📋</span> TaskMate
        </Link>
        <div style={styles.links}>
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" style={styles.link}>Dashboard</Link>
              <Link to="/tasks" style={styles.link}>Tugas</Link>
              <button onClick={handleLogout} style={styles.logoutBtn}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" style={styles.link}>Login</Link>
              <Link to="/register" style={styles.link}>Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

const styles = {
  nav: {
    backgroundColor: '#2c3e50',
    padding: '1rem',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  brand: {
    color: 'white',
    fontSize: '1.8rem',
    textDecoration: 'none',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  brandIcon: {
    fontSize: '2rem',
  },
  links: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
  },
  link: {
    color: '#ecf0f1',
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    transition: 'background 0.3s, color 0.3s',
  },
  logoutBtn: {
    background: '#e74c3c',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1.2rem',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: '500',
    transition: 'background 0.3s',
  },
}

export default Navbar