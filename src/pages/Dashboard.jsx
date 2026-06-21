import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const [tasks, setTasks] = useState([])
  const [user, setUser] = useState({ name: 'Pengguna' })

  useEffect(() => {
    // Baca data user
    const userData = JSON.parse(localStorage.getItem('user') || '{"name":"Pengguna"}')
    setUser(userData)
    
    // Baca data tasks dari localStorage 
    const savedTasks = localStorage.getItem('tasks')
    if (savedTasks) {
      try {
        const parsed = JSON.parse(savedTasks)
        console.log('📊 Dashboard membaca tasks:', parsed)
        setTasks(parsed)
      } catch (e) {
        console.log('❌ Error parsing tasks di Dashboard:', e)
        setTasks([])
      }
    } else {
      setTasks([])
    }
  }, [])

  const total = tasks.length
  const completed = tasks.filter(t => t.completed).length
  const pending = total - completed
  const rate = total > 0 ? Math.round((completed / total) * 100) : 0

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>👋 Selamat Datang, {user.name}!</h1>
      <p style={styles.subtitle}>Ringkasan aktivitas TaskMate-mu</p>

      <div style={styles.statsGrid}>
        <div style={{...styles.statCard, borderTop: '4px solid #3498db'}}>
          <h3 style={styles.statNumber}>{total}</h3>
          <p style={styles.statLabel}>📋 Total Tugas</p>
        </div>
        <div style={{...styles.statCard, borderTop: '4px solid #2ecc71'}}>
          <h3 style={styles.statNumber}>{completed}</h3>
          <p style={styles.statLabel}>✅ Selesai</p>
        </div>
        <div style={{...styles.statCard, borderTop: '4px solid #f39c12'}}>
          <h3 style={styles.statNumber}>{pending}</h3>
          <p style={styles.statLabel}>⏳ Belum Selesai</p>
        </div>
        <div style={{...styles.statCard, borderTop: '4px solid #9b59b6'}}>
          <h3 style={styles.statNumber}>{rate}%</h3>
          <p style={styles.statLabel}>📊 Penyelesaian</p>
        </div>
      </div>

      <div style={styles.actions}>
        <Link to="/tasks" style={styles.primaryBtn}>📝 Kelola Tugas</Link>
      </div>
    </div>
  )
}

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem 1rem',
  },
  title: {
    color: '#2c3e50',
    fontSize: '2rem',
  },
  subtitle: {
    color: '#7f8c8d',
    fontSize: '1.1rem',
    marginTop: '0.3rem',
    marginBottom: '2rem',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '1rem',
    marginBottom: '2rem',
  },
  statCard: {
    background: 'white',
    padding: '1.5rem',
    borderRadius: '12px',
    textAlign: 'center',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
  },
  statNumber: {
    fontSize: '2.5rem',
    margin: '0.3rem 0',
    color: '#2c3e50',
  },
  statLabel: {
    color: '#7f8c8d',
    fontSize: '0.95rem',
  },
  actions: {
    textAlign: 'center',
    padding: '2rem',
    background: 'white',
    borderRadius: '12px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
  },
  primaryBtn: {
    display: 'inline-block',
    padding: '0.8rem 2.5rem',
    background: '#3498db',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '8px',
    fontSize: '1.1rem',
    fontWeight: '600',
  },
}

export default Dashboard