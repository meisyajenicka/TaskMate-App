const TaskItem = ({ task, onToggle, onDelete }) => {
  if (!task) {
    console.log('⚠️ [TaskItem] Task tidak ada!')
    return null
  }

  console.log('📌 [TaskItem] Render task:', task.id, task.text)

  return (
    <div style={{
      ...styles.item,
      ...(task.completed ? styles.completed : {})
    }}>
      <div style={styles.left}>
        <input
          type="checkbox"
          checked={task.completed || false}
          onChange={() => onToggle(task.id)}
          style={styles.checkbox}
        />
        <span style={{
          ...styles.text,
          ...(task.completed ? styles.textCompleted : {})
        }}>
          {task.text || '(Tidak ada teks)'}
        </span>
        <span style={styles.date}>📅 {task.createdAt || '-'}</span>
      </div>
      <button onClick={() => onDelete(task.id)} style={styles.deleteBtn}>
        ✕
      </button>
    </div>
  )
}

const styles = {
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    background: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
  },
  completed: {
    background: '#f8f9fa',
    opacity: 0.8,
  },
  left: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    flex: 1,
  },
  checkbox: {
    width: '20px',
    height: '20px',
    cursor: 'pointer',
    accentColor: '#2ecc71',
  },
  text: {
    fontSize: '1rem',
    color: '#2c3e50',
  },
  textCompleted: {
    textDecoration: 'line-through',
    color: '#bdc3c7',
  },
  date: {
    fontSize: '0.75rem',
    color: '#95a5a6',
  },
  deleteBtn: {
    background: 'none',
    border: 'none',
    color: '#e74c3c',
    fontSize: '1.2rem',
    cursor: 'pointer',
    padding: '0 0.5rem',
    fontWeight: 'bold',
  },
}

export default TaskItem