import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Tasks from './pages/Tasks'
import ProtectedRoute from './components/ProtectedRoute'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
        </Route>
        
        {/* 404 */}
        <Route path="*" element={<h1 style={styles.notFound}>404 - Halaman Tidak Ditemukan</h1>} />
      </Routes>
    </>
  )
}

const styles = {
  notFound: {
    textAlign: 'center',
    marginTop: '50px',
    color: '#dc3545',
  }
}

export default App