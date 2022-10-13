import styles from './styles.module.css';
import noTasksIcon from '../../assets/no-tasks.png';
import { useState } from 'react';
import { Task, ITask } from '../Task';
import { NewTask } from '../NewTask';
import { v4 as generateId } from 'uuid';

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

  function createTask(task: ITask) {
    setTasks((currentTasks) => ([
      ...currentTasks,
      {
        id: task.id || generateId(),
        content: task.content,
        finished: false,
      },
    ]))
  }

  function deleteTask(id: string) {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  }

  function checkTask(id: string, finished: boolean) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          finished,
        }
      }
      return task;
    })
    setTasks(updatedTasks)
  }

  return (
    <>
      <NewTask onTaskCreation={createTask} />
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
                id={task.id}
                content={task.content}
                finished={task.finished}
                onDelete={deleteTask}
                onCheck={checkTask}
              />
            ))
          ) }
        </main>
      </section>
    </>
  )
}
