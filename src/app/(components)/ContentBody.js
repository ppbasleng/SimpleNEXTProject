import { StarRating, CourseLevel } from "./Content";
import styles from './ContentBody.module.css'
import Image from 'next/image';

function ContentBody(props) {
    return (
        <div className={styles.contentbody}>
            {props.content.component}
            <div className={styles.contentdetail}>
                <StarRating rating={props.content.rating} reviewer={props.content.reviewer} />
                <CourseLevel level={props.content.level} />
            </div>
            <div className={styles.contenttitle}>
                {props.content.title}
            </div>
            <div className={styles.contentdescription}>
                {props.content.description.repeat(5)}
            </div>

            <div className={styles.author}>
                <div style={{ borderRadius: "100px" }}>
                    <Image
                        src="https://randomuser.me/api/portraits/med/men/75.jpg"
                        alt="Author"
                        width={50}
                        height={50}
                    />
                </div>
                <div className={styles.authordescription}>
                    <div style={{ fontWeight: "bold" }}>Author Name</div>
                    <div style={{ color: "#b3b3b3" }}>Author Description</div>
                </div>
            </div>
            <div className={styles.course}>
                <h2>
                    {"Course's Content"}
                </h2>
            </div>

        </div>
    );
}

export default ContentBody;