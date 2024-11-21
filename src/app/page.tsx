import { CardProps, mockData } from "@/data/data";
import Section from "@/components/Section/Section";
import Image from "next/image";
import { VideoComponent } from "@/components/Video/Video";
import React from "react";

export default function Home() {
  const currentPage = mockData.pages.index;
  const sections = [];
  (() => {
    for(const section in currentPage) {

      sections.push(<Section className={currentPage[section].className} bg={currentPage[section].bg} key={section} video={currentPage[section].video}  cards={(currentPage[section].cards && currentPage[section].cards.length) && currentPage[section].cards.map((el:CardProps) => <div key={el.title} className={"card"}>{el.icon ? <div data-variant={"icon"} dangerouslySetInnerHTML={{ __html: el.icon}} /> : null}{el.title && <h3>{el.title}</h3>}{el.img?.src && <div className={"card-image-wrapper"}> <Image fill={true} style={{ width: "100%", objectFit: "contain", height: "100%"}} src={el.img.src} alt={""}/></div>}{el.video && <VideoComponent src={el.video.src} />}<article className={"description"}>{el.description}</article></div>)} link={currentPage[section].link} title={currentPage[section].title} type={currentPage[section].type} description={currentPage[section].description }  textHtml={currentPage[section].textHtml  } />)
    }
  })()
  return sections;
}
