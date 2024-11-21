import { CardProps, mockData } from "@/data/data";
import Section from "@/components/Section/Section";
import React from "react";
import Card from "@/components/Card/Card";



export default function Page({ params }: { params: { slug: string } }){
  // const router = useRouter()

  const currentPage = mockData.pages[params.slug];
  const sections = [];
  (() => {
    for(const section in currentPage) {
      sections.push(<Section className={currentPage[section].className ?? ""} bg={currentPage[section].bg} key={section} video={currentPage[section].video}
          cards={(currentPage[section].cards && currentPage[section].cards.length) ? currentPage[section].cards.map((el:CardProps) => <Card key={el.title}
              el={el}/>) : null} link={currentPage[section].link} img={currentPage[section].img} title={currentPage[section].title} type={currentPage[section].type} description={currentPage[section].description }  textHtml={currentPage[section].textHtml  } />)
    }
  })();
  return sections;
}
