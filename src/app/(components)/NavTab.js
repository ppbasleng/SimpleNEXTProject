"use client";
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBook, faCalendar, faCertificate, faMessage, faCog, faFile } from '@fortawesome/free-solid-svg-icons';
import styles from './NavTab.module.css'
import NavTopic from './NavTopic';
const NavTab = () => {
    return (
        <nav>
            <ul className={styles.navlist}>
                <NavTopic icon={<FontAwesomeIcon icon={faHome} />} title={"Main"} />
                <NavTopic icon={<FontAwesomeIcon icon={faFile} />} title={"Courses"} active={true} />
                <NavTopic icon={<FontAwesomeIcon icon={faCalendar} />} title={"Schedule"} />
                <NavTopic icon={<FontAwesomeIcon icon={faBook} />} title={"Materials"} />
                <NavTopic icon={<FontAwesomeIcon icon={faCertificate} />} title={"Certificates"} />
                <NavTopic icon={<FontAwesomeIcon icon={faMessage} />} title={"Messages"} />
                <NavTopic icon={<FontAwesomeIcon icon={faCog} />} title={"Settings"} />
            </ul>
        </nav >
    );

};

export default NavTab;