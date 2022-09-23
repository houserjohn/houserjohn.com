import Image from 'next/image'
/*
const externaImageLoader = ({ src }: { src: string }) =>
  `https://houserjohn.com/${src}`;
*/
/*
<div className="block w-32 h-32 rounded-full shadow border">
  <Image src="/Headshot.jpg" layout="responsive" alt="Headshot" className="rounded-full"/>
</div>
*/
//loader={externaImageLoader}
function AboutMeCard() {
    return (
        <div className="shadow-lg border bg-gray-100 w-8/12 sm:w-96 rounded-xl m-auto p-5 sm:flex space-x-2">
            <div className="block w-32 h-32 rounded-full  m-auto">
              <Image src="/Headshot.png"  width="400" height="400" layout="responsive" alt="Headshot" className="rounded-full border shadow"/>
            </div>
            <div className="flex-1">
                <div className="text-3xl mb-2 font-medium text-center sm:text-left">John Houser</div>
                <div className="text-sm text-gray-600 mb-1 whitespace-pre-line">4th year CS student @ UCLA.
                    Passionate about computer science.
                    Building useful tools with software.
                </div>
            </div>
        </div>
    );
}

export default AboutMeCard;