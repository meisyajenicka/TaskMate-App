import { useState, useEffect } from 'react'
import TaskInput from '../components/TaskInput'
import TaskList from '../components/TaskList'

const Tasks = () => {
  const [tasks, setTasks] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  // BACA data dari localStorage
  useEffect(() => {
    console.log('🔍 [Tasks] Membaca data dari localStorage...')
    try {
      const savedTasks = localStorage.getItem('tasks')
      console.log('📦 [Tasks] Data mentah:', savedTasks)
      
      if (savedTasks) {
        const parsed = JSON.parse(savedTasks)
        console.log('✅ [Tasks] Data berhasil di-parse:', parsed)
        setTasks(parsed)
      } else {
        console.log('❌ [Tasks] Tidak ada data di localStorage')
        setTasks([])
      }
    } catch (error) {
      console.error('❌ [Tasks] Error:', error)
      setTasks([])
    }
    setIsLoading(false)
  }, [])  // ← HANYA JALAN 1 KALI!

  // SIMPAN ke localStorage
  useEffect(() => {
    if (!isLoading) {
      console.log('💾 [Tasks] Menyimpan ke localStorage:', tasks)
      localStorage.setItem('tasks', JSON.stringify(tasks))
    }
  }, [tasks, isLoading])

  const addTask = (text) => {
    console.log('➕ [Tasks] Menambah tugas:', text)
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
    setTasks(prev => {
      const newTasks = [newTask, ...prev]
      console.log('📝 [Tasks] State baru:', newTasks)
      return newTasks
    })
  }

  const toggleTask = (id) => {
    console.log('🔄 [Tasks] Toggle tugas ID:', id)
    setTasks(prev => {
      const newTasks = prev.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
      )
      console.log('📝 [Tasks] State setelah toggle:', newTasks)
      return newTasks
    })
  }

  const deleteTask = (id) => {
    console.log('🗑️ [Tasks] Hapus tugas ID:', id)
    setTasks(prev => {
      const newTasks = prev.filter(task => task.id !== id)
      console.log('📝 [Tasks] State setelah hapus:', newTasks)
      return newTasks
    })
  }

  const total = tasks.length
  const completed = tasks.filter(t => t.completed).length

  console.log('📊 [Tasks] Render, jumlah tugas:', total)

  if (isLoading) {
    return <div style={{textAlign:'center', padding:'2rem'}}>Memuat tugas...</div>
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>📝 Manajemen Tugas</h1>
      <p style={styles.subtitle}>{total} tugas total • {completed} selesai</p>
      
      <TaskInput onAdd={addTask} />
      
      {tasks.length === 0 ? (
        <div style={styles.empty}>
          <span style={{fontSize:'3rem', display:'block'}}>📭</span>
          Belum ada tugas. Yuk tambahkan!
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
  title: {
    color: '#2c3e50',
    fontSize: '2rem',
  },
  subtitle: {
    color: '#7f8c8d',
    marginBottom: '1.5rem',
  },
  empty: {
    textAlign: 'center',
    padding: '3rem',
    background: 'white',
    borderRadius: '12px',
    color: '#bdc3c7',
    fontSize: '1.1rem',
  },
}

export default Tasks