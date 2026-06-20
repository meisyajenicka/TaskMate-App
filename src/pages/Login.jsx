import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    // Simulasi login (nanti bisa diganti dengan API real)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      if (email.trim() && password.trim()) {
        localStorage.setItem('token', 'taskmate-jwt-token')
        localStorage.setItem('user', JSON.stringify({ email, name: 'Pengguna TaskMate' }))
        navigate('/dashboard')
      } else {
        setError('Email dan password harus diisi!')
      }
    } catch (err) {
      setError('Login gagal. Silakan coba lagi.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <span style={styles.icon}>🔐</span>
          <h2 style={styles.title}>Login TaskMate</h2>
          <p style={styles.subtitle}>Kelola tugas dengan teman terbaikmu</p>
        </div>
        
        {error && <div style={styles.error}>{error}</div>}
        
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Masukkan email"
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan password"
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? 'Memproses...' : 'Login'}
          </button>
        </form>
        
        <p style={styles.footer}>
          Belum punya akun? <Link to="/register" style={styles.link}>Register</Link>
        </p>
        <p style={styles.hint}>* Masukkan email & password apa saja untuk login</p>
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '80vh',
    padding: '1rem',
  },
  card: {
    background: 'white',
    padding: '2.5rem',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '400px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '1.5rem',
  },
  icon: {
    fontSize: '3rem',
    display: 'block',
    marginBottom: '0.5rem',
  },
  title: {
    margin: '0',
    color: '#2c3e50',
    fontSize: '1.8rem',
  },
  subtitle: {
    color: '#7f8c8d',
    fontSize: '0.9rem',
    marginTop: '0.3rem',
  },
  error: {
    background: '#f8d7da',
    color: '#721c24',
    padding: '0.8rem',
    borderRadius: '6px',
    marginBottom: '1rem',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.2rem',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
  },
  label: {
    fontWeight: '600',
    color: '#34495e',
    fontSize: '0.95rem',
  },
  input: {
    padding: '0.8rem',
    border: '2px solid #e0e0e0',
    borderRadius: '8px',
    fontSize: '1rem',
    transition: 'border-color 0.3s',
    outline: 'none',
  },
  button: {
    padding: '0.8rem',
    background: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background 0.3s',
  },
  footer: {
    textAlign: 'center',
    marginTop: '1.2rem',
    color: '#7f8c8d',
  },
  link: {
    color: '#3498db',
    textDecoration: 'none',
    fontWeight: '600',
  },
  hint: {
    textAlign: 'center',
    marginTop: '0.8rem',
    color: '#bdc3c7',
    fontSize: '0.8rem',
  }
}

export default Login