import styles from './SectionTitle.module.scss'

export const Section = ({title, children}) => {
    return (
        <section>
            <h3 className={styles.section__title}>{title}</h3>
            {children}
        </section>
    )};