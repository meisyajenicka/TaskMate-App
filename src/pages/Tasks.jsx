import { useState, useEffect } from 'react'
import TaskInput from '../components/TaskInput'
import TaskList from '../components/TaskList'

const Tasks = () => {
  const [tasks, setTasks] = useState([])

  // Ambil data dari localStorage saat pertama kali render
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks') || '[]')
    setTasks(savedTasks)
  }, [])

  // Simpan ke localStorage setiap kali tasks berubah
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  // Tambah tugas baru
  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text: text,
      completed: false,
      createdAt: new Date().toLocaleDateString('id-ID', { 
        day: 'numeric', 
        month: 'short', 
        year: 'numeric' 
      })
    }
    setTasks([newTask, ...tasks])
  }

  // Toggle status selesai
  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  // Hapus tugas
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  // Hapus semua tugas yang selesai
  const clearCompleted = () => {
    setTasks(tasks.filter(task => !task.completed))
  }

  const totalTasks = tasks.length
  const completedTasks = tasks.filter(task => task.completed).length

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div>
          <h1 style={styles.title}>📝 Manajemen Tugas</h1>
          <p style={styles.subtitle}>
            {totalTasks} tugas total • {completedTasks} selesai
          </p>
        </div>
        {completedTasks > 0 && (
          <button onClick={clearCompleted} style={styles.clearBtn}>
            Hapus Selesai
          </button>
        )}
      </div>

      <TaskInput onAdd={addTask} />
      
      {tasks.length === 0 ? (
        <div style={styles.empty}>
          <span style={styles.emptyIcon}>📭</span>
          <p style={styles.emptyText}>Belum ada tugas. Yuk tambahkan tugas!</p>
        </div>
      ) : (
        <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
      )}
    </div>
  )
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '2rem 1rem',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1.5rem',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  title: {
    margin: '0',
    color: '#2c3e50',
    fontSize: '2rem',
  },
  subtitle: {
    margin: '0.3rem 0 0 0',
    color: '#7f8c8d',
    fontSize: '0.95rem',
  },
  clearBtn: {
    padding: '0.5rem 1.2rem',
    background: '#e74c3c',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: '500',
    transition: 'background 0.3s',
  },
  empty: {
    textAlign: 'center',
    padding: '3rem',
    background: 'white',
    borderRadius: '12px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
  },
  emptyIcon: {
    fontSize: '3rem',
    display: 'block',
  },
  emptyText: {
    color: '#bdc3c7',
    fontSize: '1.1rem',
    marginTop: '0.5rem',
  },
}

export default Tasks