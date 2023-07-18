import styles from './Content.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faSignal, faStar } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image"

function Content(props) {
    return (
        <div className={styles.contentcomponent} onClick={props.onClick}>
            <div className={styles.contentimage}><Image
                        src="https://picsum.photos/100/150"
                        alt="image"
                        width={150}
                        height={100}
                    /></div>
            
            <div className={styles.contentdetails}>
                <span className={styles.contenttitle}>{props.title}</span>
                <div className={styles.contentdescription}>{props.description}</div>
                <div className={styles.contentmetadata}>
                    <div className={styles.starrating}>{<StarRating rating={props.rating} reviewer={props.reviewer} />}</div>
                    <div className={styles.courselevel}>{<CourseLevel level={props.level} />}</div>
                </div>
            </div>
        </div>
    );
};

export const StarRating = ({ rating, reviewer }) => {
    const GetStar = ({ rating }) => {
        return <>
            <FontAwesomeIcon icon={faStar} style={rating >= 1 ? { color: "#eebd74" } : { color: "#e9e9e9" }} />
            <FontAwesomeIcon icon={faStar} style={rating >= 2 ? { color: "#eebd74" } : { color: "#e9e9e9" }} />
            <FontAwesomeIcon icon={faStar} style={rating >= 3 ? { color: "#eebd74" } : { color: "#e9e9e9" }} />
            <FontAwesomeIcon icon={faStar} style={rating >= 4 ? { color: "#eebd74" } : { color: "#e9e9e9" }} />
            <FontAwesomeIcon icon={faStar} style={rating >= 5 ? { color: "#eebd74" } : { color: "#e9e9e9" }} />
        </>

    }
    return (
        <span>
            <GetStar rating={rating} />{" "}{rating}<span style={{color:"#b3b3b3",fontsize:"0.8em"}}>{`(${reviewer})`}</span>
        </span>
    )
}

export const CourseLevel = ({ level }) => {
    switch (level) {
        case "beginner":
            return <span style={{color: "#b3b3b3"}}><FontAwesomeIcon icon={faSignal} />{" "}{"Beginner"}</span>;

        case "intermediate":
            return <span style={{color: "#b3b3b3"}}><FontAwesomeIcon icon={faSignal} />{" "}{"Intermediate"}</span>;

        case "all":
            return <span style={{color: "#b3b3b3"}}><FontAwesomeIcon icon={faCircleCheck} />{" "}{"All Levels"}</span>;
    }
}

export default Content;