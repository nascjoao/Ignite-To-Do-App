import { PlusCircle } from 'phosphor-react';
import styles from './styles.module.css';

export function NewTask() {
  return (
    <form className={styles.newTask}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button>
        Criar
        <PlusCircle size={20} />
      </button>
    </form>
  )
}
