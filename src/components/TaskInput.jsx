import { useState } from 'react'

const TaskInput = ({ onAdd }) => {
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim() === '') {
      alert('Tugas tidak boleh kosong!')
      return
    }
    onAdd(input.trim())
    setInput('')
  }

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Tulis tugas baru..."
        style={styles.input}
      />
      <button type="submit" style={styles.button}>
        ➕ Tambah
      </button>
    </form>
  )
}

const styles = {
  form: {
    display: 'flex',
    gap: '10px',
    marginBottom: '1.5rem',
  },
  input: {
    flex: 1,
    padding: '0.8rem',
    border: '2px solid #e0e0e0',
    borderRadius: '8px',
    fontSize: '1rem',
    transition: 'border-color 0.3s',
    outline: 'none',
  },
  button: {
    padding: '0.8rem 1.8rem',
    background: '#2ecc71',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background 0.3s',
    whiteSpace: 'nowrap',
  },
}

export default TaskInput