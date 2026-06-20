import TaskItem from './TaskItem'

const TaskList = ({ tasks, onToggle, onDelete }) => {
  return (
    <div style={styles.list}>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
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