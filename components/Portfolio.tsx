import Hotbar from './Hotbar';
import ProjectManager from './ProjectManager';
import SkillManager from './SkillManager';
import AboutMeCard from './AboutMeCard';
import Button from './Button';
import Wave from './Wave';
import Header from './Header';
import Contact from './Contact';
import TableOfContents from './TableOfContents';
import Waffle from './Waffle';

function Portfolio() {
    return (
        <div>
            <TableOfContents/>
            <Hotbar/>
            <Waffle/>
            <div className="h-screen mb-4 ">
                <div className="h-1/6 sm:h-2/6 -mt-4"></div>
                <AboutMeCard/>
                <div className="text-center">
                    <Button/>
                </div>
            </div>
            <Wave inverted={false}/>
            <div className="w-full bg-gray-100 py-10">
                <div className="w-11/12 sm:w-8/12 m-auto">
                    <Header id="projects">Projects</Header>
                    <ProjectManager/>
                    <Header id="skill-set">Skill Set</Header>
                    <SkillManager/>
                </div>
            </div>
            <Wave inverted={true}/> 
            <div className="w-8/12 m-auto pb-20 pt-20">
                <Header id="contact">Contact</Header>
                <Contact/>
            </div>
        </div>
    );
}

export default Portfolio;