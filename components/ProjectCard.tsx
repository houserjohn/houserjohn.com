import Tag from './Tag';
import Image from 'next/image'


const externaImageLoader = ({ src }: { src: string }) =>
  `https://houserjohn.com/${src}`;

interface project_card_interface {
    title: string,
    img_src: string,
    img_alt: string,
    tags: any[],
    children: string,
    src_link: string,
    demo_link: string,
}
                   
function ProjectCard(props: project_card_interface) {
    return (
        <div>
            <div className="bg-white max-w-sm rounded-xl shadow-lg">
                <div className="">
                    <div className="block bg-gray-200 rounded-t-xl max-w-sm">
                        <Image src={props.img_src} loader={externaImageLoader} width="400" height="200" layout="responsive" alt={props.img_alt} className="rounded-t-xl"/>
                    </div>
                    <div className="border rounded-b-xl px-4">
                        <div className="text-md pt-2 font-medium w-auto pr-2">{props.title}</div>
                        {props.tags.map(
                            (tag: any, index: number) => (
                                <Tag bg={tag.bg} key={index}> {tag.name} </Tag>
                            ))
                        }
                        <div className="text-gray-500 font-small whitespace-normal">
                            {props.children}
                        </div>
                        <div className="pb-2 ">
                            <hr className="my-1 "/>
                            <div className=" flex justify-center space-x-2">
                                <div className="text-gray-500 text-sm hover:text-black">
                                    <a href={props.src_link}> 
                                        Source
                                    </a>
                                </div>
                                <div className="text-gray-500 text-sm hover:text-black">
                                    <a href={props.demo_link}> 
                                        Demo
                                    </a>
                                </div>     
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;