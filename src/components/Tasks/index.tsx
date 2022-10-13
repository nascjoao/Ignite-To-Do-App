import styles from './styles.module.css';
import noTasksIcon from '../../assets/no-tasks.png';
import { useState } from 'react';
import { Task, ITask } from '../Task';
import { NewTask } from '../NewTask';
import { v4 as generateId } from 'uuid';

export function Tasks() {
  const [tasks, setTasks] = useState<ITask[]>([])

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
