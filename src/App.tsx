import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import styles from './App.module.css';

export function App() {
  return (
    <div className={styles.App}>
      <Header />
      <NewTask />
    </div>
  )
}
