import Tag from './Tag';
import Image from 'next/image'

interface SkillCard_Props {
    description: string,
    title: string,
    tags: any[],
    img_src: string,
    img_alt: string,
}
                /*
                <div className="relative w-32 h-32 bg-gray-100 m-auto rounded-full border shadow ">
                    <Image src={props.img_src} layout="fill" alt={props.img_alt} className="rounded-full"/>
                </div>
                */
function SkillCard(props: SkillCard_Props) {
    return (
        <div>
            <div className="bg-white border shadow-lg px-4 py-4 w-64 justify-center text-center rounded-xl">
                <div className="font-medium">
                    {props.title}
                </div>
                <div className="block w-32 h-32 bg-gray-100 m-auto rounded-full border shadow ">
                    <Image src={props.img_src} width="400" height="400" layout="responsive" alt={props.img_alt} className="rounded-full"/>
                </div>
                <div className="text-gray-500">
                    {props.description}
                </div>
                <div className="py-1">
                    {
                        props.tags.map((tag: any, index: number) => (
                            <Tag key={index} bg={tag.bg}>{tag.name}</Tag>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default SkillCard;