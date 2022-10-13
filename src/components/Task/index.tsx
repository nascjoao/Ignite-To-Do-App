import styles from './styles.module.css';
import { Circle, CheckCircle, Trash } from 'phosphor-react';

export interface ITask {
  id?: string;
  content: string;
  finished?: boolean;
}

export function Task({ content, finished }: ITask) {
  return (
    <article className={styles.task}>
      <button
        title={ finished ? 'Concluída' : 'Não concluída' }
        className={ finished ? styles.finished : styles.notFinished }
      >
        { finished ? (
          <CheckCircle size={20} weight="fill" />
        ) : (
          <Circle size={20} weight="bold" />
        ) }
      </button>
      <p className={ finished ? styles.finished : styles.notFinished }>{content}</p>
      <button
        title="Apagar"
        className={styles.deleteTask}
      >
        <Trash size={20} />
      </button>
    </article>
  )
}
