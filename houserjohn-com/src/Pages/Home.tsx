import { useSelector } from 'react-redux'

import Prompt from "../Components/Prompt";
import Txt from "../Components/Txt";

const Home = () => {
    const vl = useSelector((state: {txt: string}) => state.txt);
    return (
        <div>
            <Txt>{vl}</Txt>
            <Prompt/>
        </div>
    );
}

export default Home;