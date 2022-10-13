import styles from './styles.module.css';
import { Circle, CheckCircle, Trash } from 'phosphor-react';

export interface ITask {
  id?: string;
  content: string;
  finished?: boolean;
}

interface TaskProps extends ITask {
  onDelete: (id: string) => void;
}

export function Task({ id, content, finished, onDelete }: TaskProps) {
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
        <Trash size={20} onClick={() => onDelete(id!)} />
      </button>
    </article>
  )
}
