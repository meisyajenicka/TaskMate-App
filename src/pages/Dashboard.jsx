import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const [tasks, setTasks] = useState([])
  const [user, setUser] = useState({ name: 'Pengguna' })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Ambil data user dari localStorage
    const userData = JSON.parse(localStorage.getItem('user') || '{"name":"Pengguna"}')
    setUser(userData)

    // Ambil data tugas dari localStorage
    const savedTasks = JSON.parse(localStorage.getItem('tasks') || '[]')
    setTasks(savedTasks)
    setLoading(false)
  }, [])

  const totalTasks = tasks.length
  const completedTasks = tasks.filter(task => task.completed).length
  const pendingTasks = totalTasks - completedTasks
  const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0

  if (loading) {
    return (
      <div style={styles.container}>
        <div style={styles.loading}>Memuat dashboard...</div>
      </div>
    )
  }

  return (
    <div style={styles.container}>
      <div style={styles.welcome}>
        <h1 style={styles.title}>👋 Selamat Datang, {user.name}!</h1>
        <p style={styles.subtitle}>Ini adalah ringkasan aktivitas TaskMate-mu</p>
      </div>

      <div style={styles.statsGrid}>
        <div style={{...styles.statCard, ...styles.statCard1}}>
          <span style={styles.statIcon}>📋</span>
          <h3 style={styles.statNumber}>{totalTasks}</h3>
          <p style={styles.statLabel}>Total Tugas</p>
        </div>
        <div style={{...styles.statCard, ...styles.statCard2}}>
          <span style={styles.statIcon}>✅</span>
          <h3 style={styles.statNumber}>{completedTasks}</h3>
          <p style={styles.statLabel}>Selesai</p>
        </div>
        <div style={{...styles.statCard, ...styles.statCard3}}>
          <span style={styles.statIcon}>⏳</span>
          <h3 style={styles.statNumber}>{pendingTasks}</h3>
          <p style={styles.statLabel}>Belum Selesai</p>
        </div>
        <div style={{...styles.statCard, ...styles.statCard4}}>
          <span style={styles.statIcon}>📊</span>
          <h3 style={styles.statNumber}>{completionRate}%</h3>
          <p style={styles.statLabel}>Tingkat Penyelesaian</p>
        </div>
      </div>

      <div style={styles.actions}>
        <Link to="/tasks" style={styles.primaryBtn}>
          📝 Kelola Tugas
        </Link>
        <p style={styles.quote}>
          "Produktivitas bukan tentang melakukan banyak hal, tapi tentang melakukan hal yang benar."
        </p>
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
  loading: {
    textAlign: 'center',
    padding: '3rem',
    fontSize: '1.2rem',
    color: '#7f8c8d',
  },
  welcome: {
    marginBottom: '2rem',
  },
  title: {
    margin: '0',
    color: '#2c3e50',
    fontSize: '2rem',
  },
  subtitle: {
    color: '#7f8c8d',
    fontSize: '1.1rem',
    marginTop: '0.3rem',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1.2rem',
    marginBottom: '2.5rem',
  },
  statCard: {
    background: 'white',
    padding: '1.5rem',
    borderRadius: '12px',
    textAlign: 'center',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
    transition: 'transform 0.2s',
  },
  statCard1: { borderTop: '4px solid #3498db' },
  statCard2: { borderTop: '4px solid #2ecc71' },
  statCard3: { borderTop: '4px solid #f39c12' },
  statCard4: { borderTop: '4px solid #9b59b6' },
  statIcon: {
    fontSize: '2rem',
    display: 'block',
    marginBottom: '0.5rem',
  },
  statNumber: {
    fontSize: '2.5rem',
    margin: '0.3rem 0',
    color: '#2c3e50',
  },
  statLabel: {
    color: '#7f8c8d',
    margin: '0',
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
    transition: 'background 0.3s',
  },
  quote: {
    color: '#7f8c8d',
    fontStyle: 'italic',
    marginTop: '1.2rem',
    fontSize: '1rem',
  },
}

export default Dashboard