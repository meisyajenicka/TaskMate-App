import { useState } from 'react'

const TaskInput = ({ onAdd }) => {
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('📝 Form submitted, input:', input)
    
    if (input.trim() === '') {
      alert('Tugas tidak boleh kosong!')
      return
    }
    
    console.log('✅ Memanggil onAdd dengan:', input.trim())
    onAdd(input.trim())
    setInput('')
  }

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          console.log('✏️ Input berubah:', e.target.value)
          setInput(e.target.value)
        }}
        placeholder="Tulis tugas baru..."
        style={styles.input}
      />
      <button type="submit" style={styles.button}>➕ Tambah</button>
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
    whiteSpace: 'nowrap',
  },
}

export default TaskInput