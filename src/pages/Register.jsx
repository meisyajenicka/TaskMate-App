import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    
    if (!name || !email || !password) {
      setError('Semua field harus diisi!')
      return
    }
    
    if (password !== confirmPassword) {
      setError('Password dan konfirmasi password tidak cocok!')
      return
    }
    
    if (password.length < 6) {
      setError('Password minimal 6 karakter!')
      return
    }
    
    setLoading(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Simulasi registrasi berhasil
      setSuccess('Registrasi berhasil! Silakan login.')
      setTimeout(() => {
        navigate('/login')
      }, 1500)
    } catch (err) {
      setError('Registrasi gagal. Silakan coba lagi.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <span style={styles.icon}>📝</span>
          <h2 style={styles.title}>Daftar TaskMate</h2>
          <p style={styles.subtitle}>Mulai kelola tugasmu sekarang</p>
        </div>
        
        {error && <div style={styles.error}>{error}</div>}
        {success && <div style={styles.success}>{success}</div>}
        
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Nama Lengkap</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Masukkan nama"
              style={styles.input}
            />
          </div>
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
              placeholder="Minimal 6 karakter"
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Konfirmasi Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Ulangi password"
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? 'Memproses...' : 'Daftar'}
          </button>
        </form>
        
        <p style={styles.footer}>
          Sudah punya akun? <Link to="/login" style={styles.link}>Login</Link>
        </p>
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
  success: {
    background: '#d4edda',
    color: '#155724',
    padding: '0.8rem',
    borderRadius: '6px',
    marginBottom: '1rem',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
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
    background: '#2ecc71',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background 0.3s',
    marginTop: '0.5rem',
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
}

export default Register