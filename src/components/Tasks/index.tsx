import styles from './styles.module.css';
import noTasksIcon from '../../assets/no-tasks.png';
import { useState } from 'react';
import { Task, ITask } from '../Task';

export function Tasks() {
  const [tasks, setTasks] = useState([
    {
      id: 'e470919b-0da0-4641-b7d2-0f6853d936ac',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique aut hic a commodi eligendi, tempore minus, aliquid ab perferendis cumque fugiat odit quam repellat beatae nostrum eos quis quae sapiente!',
      finished: false,
    },
    {
      id: '8332a3d7-1745-49c6-a0a7-7f646bd4eef8',
      content: 'Atualizar finanças',
      finished: true
    }
  ])

  function countFinishedTasks(tasks: ITask[]) {
    return tasks.filter((task) => task.finished).length;
  }

  return (
    <section className={styles.tasks}>
      <header>
        <span>
          <strong>Tarefas criadas</strong>
          <span className={styles.counter}>{tasks.length}</span>
        </span>
        <span>
          <strong>Concluídas</strong>
          <span className={styles.counter}>
            { countFinishedTasks(tasks) > 0 ? (
              `${countFinishedTasks(tasks)} de ${tasks.length}`
            ) : (
              0
            ) }
          </span>
        </span>
      </header>
      <main>
        { !tasks.length ? (
          <div className={styles.empty}>
            <img src={noTasksIcon} aria-hidden="true" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        ) : (
          tasks.map((task) => (
            <Task
              key={task.id}
              content={task.content}
              finished={task.finished}
            />
          ))
        ) }
      </main>
    </section>
  )
}
