import styles from './LinearProgress.module.css'

export default function LinearProgress({hidden}) {
    return <div className={`${styles.slider} ${hidden && "opacity-0"}`}>
        <div className={styles.line}/>
        <div className={`${styles.subline} ${styles.inc}`}/>
        <div className={`${styles.subline} ${styles.dec}`}/>
    </div>
}