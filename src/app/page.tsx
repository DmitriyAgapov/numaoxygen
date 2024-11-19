
import { mockData } from "@/app/data/data";
import Section from "@/components/Section/Section";

export default function Home() {
  const sections = [];
  (() => {
    for(const section in mockData.pages.index) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-expect-error
      sections.push(<Section className={mockData.pages.index[section].className} bg={mockData.pages.index[section].bg} key={section}  cards={(mockData.pages.index[section].cards && mockData.pages.index[section].cards.length) && mockData.pages.index[section].cards.map((el:never) => <div key={el.title}>{'123'}</div>)} link={mockData.pages.index[section].link} title={mockData.pages.index[section].title} description={mockData.pages.index[section].description} />)
    }
  })()
  console.log(sections)
  return sections;
}
