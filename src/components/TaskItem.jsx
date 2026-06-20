const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <div style={{
      ...styles.item,
      ...(task.completed ? styles.completed : {})
    }}>
      <div style={styles.left}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          style={styles.checkbox}
        />
        <div>
          <span style={{
            ...styles.text,
            ...(task.completed ? styles.textCompleted : {})
          }}>
            {task.text}
          </span>
          <span style={styles.date}>📅 {task.createdAt}</span>
        </div>
      </div>
      <button
        onClick={() => onDelete(task.id)}
        style={styles.deleteBtn}
      >
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
    transition: 'transform 0.2s, box-shadow 0.2s',
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
    wordBreak: 'break-word',
  },
  textCompleted: {
    textDecoration: 'line-through',
    color: '#bdc3c7',
  },
  date: {
    fontSize: '0.75rem',
    color: '#95a5a6',
    marginLeft: '10px',
  },
  deleteBtn: {
    background: 'none',
    border: 'none',
    color: '#e74c3c',
    fontSize: '1.2rem',
    cursor: 'pointer',
    padding: '0 0.5rem',
    fontWeight: 'bold',
    transition: 'transform 0.2s',
  },
}

export default TaskItem