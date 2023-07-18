"use client";
import styles from './page.module.css'
import { useEffect, useState } from 'react'
import ContentList from './(components)/contentlist';
import ContentBody from './(components)/contentbody';
import NavTab from './(components)/Navtab';
import Carousel from './(components)/carousel';
import Webgl from './(components)/webgl';
import Video from './(components)/video';
import Youtube from './(components)/youtube';


export default function Home() {
  const [currentTab, setcurrentTab] = useState(0)
  const [page, setPage] = useState([
    { component: <Video />, key: 'video', title: "Video", level: "beginner", rating: 3.7, reviewer: 1034, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { component: <Youtube />, key: 'youtube', title: "Youtube", level: "beginner", rating: 4.0, reviewer: 294, description: "Cras aliquet pulvinar aliquam. Phasellus commodo et ligula ac tincidunt." },
    { component: <Webgl />, key: 'webgl', title: "Webgl", level: "intermediate", rating: 3.0, reviewer: 172, description: "Donec quis diam sollicitudin, hendrerit ligula vitae, aliquam metus." },
    { component: <Carousel />, key: 'carousel', title: "Carousel", level: "all", rating: 3.0, reviewer: 165, description: "Morbi vehicula risus sit amet fringilla interdum. Ut mauris nunc, eleifend in varius sed" }
  ]);

  const OnClickContent = (contentKey) => {
    console.log("onclick",contentKey);
    const contentIndex = page.findIndex(item => item.key === contentKey);
    if (contentIndex !== -1) {
      setcurrentTab(contentIndex);
    }
  }

  return (
    // <main className={styles.main}>
    <div className={styles.container}>
      <div className={styles.navpanel}><NavTab /></div>
      <div className={styles.contentlist}><ContentList content={page} OnClickContent={OnClickContent} /></div>
      <div className={styles.contentbody}><ContentBody content={page[currentTab]} /></div>
    </div>
  )
}
