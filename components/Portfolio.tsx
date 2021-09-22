import Hotbar from './Hotbar';
import ProjectManager from './ProjectManager';
import SkillManager from './SkillManager';
import AboutMeCard from './AboutMeCard';
import Button from './Button';
import Wave from './Wave';
import Header from './Header';
import Contact from './Contact';
import TableOfContents from './TableOfContents';


// Todo: change all img tags to next.js images 

function Portfolio() {
    return (
        <div>
            <TableOfContents/>
            <div className="h-screen">
                <Hotbar/>
                <div className="mt-20">
                    <AboutMeCard/>
                    <div className="text-center">
                        <Button/>
                    </div>
                </div> 
            </div>
            <Wave inverted={false}/>
            <div className="bg-gray-100 py-10">
                <div className="w-8/12 m-auto">
                    <Header id="projects">Projects</Header>
                    <ProjectManager/>
                    <Header id="skill-set">Skill Set</Header>
                    <SkillManager/>
                </div>
            </div>
            <Wave inverted={true}/> 
            <div className="w-8/12 m-auto pb-20 pt-10">
                <Header id="contact">Contact</Header>
                <Contact/>
            </div>
        </div>
    );
}

export default Portfolio;