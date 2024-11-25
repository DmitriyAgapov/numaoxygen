import { CardProps, mockData } from "@/data/data";
import Section from "@/components/Section/Section";
import React from "react";
import Card from "@/components/Card/Card";
import { Metadata } from 'next';

export async function generateMetadata(
    { params }: { params: { slug: string } }
): Promise<Metadata> {
  const currentPage = mockData.pages[params.slug];
  const {title, description} = currentPage?.metadata || {
    title: "No title",
    description: ""
  };

  return {
    title: title,
    description: description
  }
}

export default function Page({ params }: { params: { slug: string } }){
  // const router = useRouter()

  const currentPage = mockData.pages[params.slug];
  const sections = [];
  (() => {
    for(const section in currentPage) {
      if (section !== "metadata") {
        sections.push(<Section className={currentPage[section].className ?? ""}
            bg={currentPage[section].bg}
            key={section}
            video={currentPage[section].video}
            cards={(currentPage[section].cards && currentPage[section].cards.length) ? currentPage[section].cards.map((el: CardProps) => <Card key={el.title}
                el={el}/>) : null}
            link={currentPage[section].link}
            img={currentPage[section].img}
            title={currentPage[section].title}
            type={currentPage[section].type}
            description={currentPage[section].description}
            textHtml={currentPage[section].textHtml}/>)
      }
    }
  })();
  return sections;
}
