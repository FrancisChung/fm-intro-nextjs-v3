import styles from "./style.module.css";
// @ts-ignore
const DoscIdPage = ({ params } ) => {
    console.log(params)
    return <div className={styles.title}>docs {params.id} page</div>
}

export default DoscIdPage