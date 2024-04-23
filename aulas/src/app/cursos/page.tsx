import styles from './cursos.module.css';

export default async function CursosPage() {
  return (
    <main className={styles.cursos}>
      <h1 className={styles.titulo}>Front End e UI Design</h1>
      <p>A Origamid oferece cursos de Front End e UI Design</p>
    </main>
  );
}
