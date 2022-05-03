import { Link } from "react-router-dom"
import styles from './Error.module.css';

const Error = () => {
    return (
        <section>
            <div className={styles.container}>
            <h1>Oop! You are lost</h1>
            <Link to='/' className={styles.link}>Back Home</Link>
        </div>
        </section>
        
    )
}

export default Error;