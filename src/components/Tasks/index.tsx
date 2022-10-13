import styles from './styles.module.css';
import noTasksIcon from '../../assets/no-tasks.png';

export function Tasks() {
  return (
    <section>
      <header>
        <span>
          <strong>Tarefas criadas</strong>
          <span>0</span>
        </span>
        <span>
          <strong>Concluídas</strong>
          <span>0</span>
        </span>
      </header>
      <main>
        <img src={noTasksIcon} aria-hidden="true" />
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </main>
    </section>
  )
}
