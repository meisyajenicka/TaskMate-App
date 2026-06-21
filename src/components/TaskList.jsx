import TaskItem from './TaskItem'

const TaskList = ({ tasks, onToggle, onDelete }) => {
  console.log('📋 [TaskList] Menerima tasks:', tasks)
  
  if (!tasks || tasks.length === 0) {
    return <p style={{textAlign:'center', color:'#bdc3c7'}}>Tidak ada tugas</p>
  }

  return (
    <div style={styles.list}>
      {tasks.map(task => {
        console.log('🔹 [TaskList] Render task:', task.id, task.text)
        return (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        )
      })}
    </div>
  )
}

const styles = {
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
}

export default TaskList