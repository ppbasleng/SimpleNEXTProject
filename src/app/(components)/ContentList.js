import styles from './ContentList.module.css'
import Content from './Content';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function ContentList(props) {

    return (<div className={styles.coursecomponent}>
        <div className={styles.courseheader}>
            <span>Course</span>
            <span className={styles.searchicon}><FontAwesomeIcon icon={faMagnifyingGlass}/></span>
        </div>
        <div className={styles.coursenav}>
            <button className={`${styles.navitem} ${styles.active}`}>All</button>
            <button className={styles.navitem }>Active</button>
            <button className={styles.navitem }>Complete</button>
        </div>
        <div className={styles.courselang}>
            <button className={styles.langbutton}>Spanish</button>
            <button className={styles.langbutton}>English</button>
            <button className={styles.filterbutton}><FontAwesomeIcon icon={faSliders} /></button>
        </div>
        <div className={styles.contentlist}>
            {props.content.map((item,index)=>(
                <Content key={item.key} title={item.title} description={item.description} rating={item.rating}
                reviewer={item.reviewer} level={item.level} onClick={()=>props.OnClickContent(item.key)}/>
            ))}
        </div>
    </div>
    );
}

export default ContentList;