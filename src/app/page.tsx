
import { mockData } from "@/app/data/data";
import Section from "@/components/Section/Section";
import Image from "next/image";
import { VideoComponent } from "@/components/Video/Video";
import React from "react";

export default function Home() {
  const sections = [];
  (() => {
    for(const section in mockData.pages.index) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-expect-error
      sections.push(<Section className={mockData.pages.index[section].className} bg={mockData.pages.index[section].bg} key={section} video={mockData.pages.index[section].video}  cards={(mockData.pages.index[section].cards && mockData.pages.index[section].cards.length) && mockData.pages.index[section].cards.map((el:never) => <div key={el.title} className={"card"}>{el.icon ? <div data-variant={"icon"} dangerouslySetInnerHTML={{ __html: el.icon}} /> : null}{el.title && <h3>{el.title}</h3>}{el.img?.src && <div className={"card-image-wrapper"}> <Image fill={true} style={{ width: "100%", objectFit: "contain", height: "100%"}} src={el.img.src} alt={""}/></div>}{el.video && <VideoComponent src={el.video.src} />}<article className={"description"}>{el.description}</article></div>)} link={mockData.pages.index[section].link} title={mockData.pages.index[section].title} type={mockData.pages.index[section].type} description={mockData.pages.index[section].description }  textHtml={mockData.pages.index[section].textHtml  } />)
    }
  })()
  return sections;
}
