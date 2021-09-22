import Image from 'next/image'


function AboutMeCard() {
    return (
        <div className="shadow-lg border bg-gray-100 w-4/12 rounded-xl m-auto p-5 sm:flex space-x-2">
            <div className="relative w-32 h-32 rounded-full shadow border">
              <Image src="/Headshot.jpg" layout="fill" alt="Headshot" className="rounded-full"/>
            </div>
            <div className="flex-1">
                <div className="text-3xl mb-2 font-medium">John Houser</div>
                <div className="text-sm text-gray-800 mb-1">3rd year CS student @ UCLA. </div>
                <div className="text-sm text-gray-800 mb-1"> Passionate about computer science.</div>
                <div className="text-sm text-gray-800"> Building useful tools with software.</div>
            </div>
        </div>
    );
}

export default AboutMeCard;