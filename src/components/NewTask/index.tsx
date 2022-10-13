import { PlusCircle } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import { ITask } from '../Task';
import styles from './styles.module.css';

export function NewTask({ onTaskCreation }: { onTaskCreation: (task: ITask) => void }) {
  const [taskContent, setTaskContent] = useState('');

  function submitTask(event: FormEvent) {
    event.preventDefault();
    onTaskCreation({ content: taskContent })
    setTaskContent('')
  }

  return (
    <form className={styles.newTask} onSubmit={submitTask}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={taskContent}
        onChange={({ target: { value } }) => setTaskContent(value)}
      />
      <button>
        Criar
        <PlusCircle size={20} />
      </button>
    </form>
  )
}
