// This table of content code comes from Emma Goto:
// https://www.emgoto.com/react-table-of-contents/ 

import IndexOfContent from "./IndexOfContent";
import React, { useEffect, useState, useRef } from 'react';


const getNestedHeadings = (headingElements: any) => {
    const nestedHeadings: any[] = [];
  
    headingElements.forEach((heading: any, index: number) => {
      const { innerText: title, id } = heading;
  
      if (heading.nodeName === "H2") {
        nestedHeadings.push({ id, title, items: [] });
      } else if (heading.nodeName === "H3" && nestedHeadings.length > 0) {
        nestedHeadings[nestedHeadings.length - 1].items.push({
          id,
          title,
        });
      }
    });
  
    return nestedHeadings;
  };

const useHeadingsData = () => {
    const [nestedHeadings, setNestedHeadings] = useState([]);
  
    useEffect(() => {
      const headingElements = Array.from(
        document.querySelectorAll("h2, h3")
      );
  
      const newNestedHeadings: any = getNestedHeadings(headingElements);
      setNestedHeadings(newNestedHeadings);
    }, []);
  
    return { nestedHeadings };
  };
interface callback_heading_interface {
    id?: string,
    title?: string,
    items?: any[],
    reduce?: any,
}

interface heading_interface {
    id: string,
    title: string,
    items: any[],
    reduce: any,
}

const useIntersectionObserver = (setActiveId : any) => {
  const headingElementsRef: any = useRef({});

  useEffect(() => {
    const callback = (headings : callback_heading_interface) : any => {
      headingElementsRef.current = headings.reduce((map: any, headingElement: any) => {
        map[headingElement.target.id] = headingElement;
        return map;
      }, headingElementsRef.current);
    
      const visibleHeadings: any = [];
      Object.keys(headingElementsRef.current).forEach((key) => {
        const headingElement = headingElementsRef.current[key];
        if (headingElement.isIntersecting) visibleHeadings.push(headingElement);
      });

      const getIndexFromId = (id: string) =>
        headingElements.findIndex((heading) => heading.id === id);

      if (visibleHeadings.length === 1) {
        setActiveId(visibleHeadings[0].target.id);
      } else if (visibleHeadings.length > 1) {
        const sortedVisibleHeadings = visibleHeadings.sort(
          (a: any, b: any) => getIndexFromId(a.target.id) > getIndexFromId(b.target.id)
        );
        setActiveId(sortedVisibleHeadings[0].target.id);
      }
    };

    const observer: any = new IntersectionObserver(callback, {
      rootMargin: "0px 0px -20% 0px"
    });

    const headingElements = Array.from(document.querySelectorAll("h2, h3"));

    headingElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
};

interface child_interface {
    id: number,
    title: string,
}

const Headings = ({ headings, activeId } : { headings: any, activeId: string|undefined}) => (
  <ul>
    {headings.map((heading: heading_interface) => (
      <li key={heading.id}>
        <a
          href={`#${heading.id}`}
          onClick={(e: any) => {
            e.preventDefault();
            const head: (Element | null) = document.querySelector(`#${heading.id}`)
            if (head) {
                head.scrollIntoView({
                    behavior: "smooth"
                });
            }
          }}
        >
          <IndexOfContent active={heading.id === activeId ? true : false}>{heading.title}</IndexOfContent>
        </a>
        {heading.items.length > 0 && (
          <ul>
            {heading.items.map((child: any) => (
              <li key={child.id} className={child.id === activeId ? "active" : ""}>
                <a
                  href={`#${child.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const head: (Element|null) = document.querySelector(`#${child.id}`)
                    if (head) {
                        head.scrollIntoView({
                            behavior: "smooth"
                        });
                    }
                  }}
                >
                  {child.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </li>
    ))}
  </ul>
);
/*
                <IndexOfContent>Home</IndexOfContent>
                <IndexOfContent>Projects</IndexOfContent>
                <IndexOfContent>Skill Set</IndexOfContent>
                <IndexOfContent>Contact</IndexOfContent>
*/
/*
function TableOfContents() {
    return (
        <div className="fixed text-center h-screen z-50 w-2/12">
            <div className="h-1/3"></div>
            <div className="flex-col h-1/3">
                <Headings/>
            </div>
        </div>
    );
}
*/

const TableOfContents = () => {
  const [activeId, setActiveId] = useState();
  const { nestedHeadings } = useHeadingsData();
  useIntersectionObserver(setActiveId);

  return (
    <nav className="fixed text-center h-screen w-2/12 z-50" aria-label="Table of contents">
      <div className="h-1/3"></div>
      <Headings headings={nestedHeadings} activeId={activeId} />
    </nav>
  );
};

export default TableOfContents;