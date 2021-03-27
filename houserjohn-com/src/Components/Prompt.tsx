import React, { useState } from 'react';
import { useDispatch } from 'react-redux'

const Prompt = () => {
    const [ vl, set_vl ] = useState("");
    const dispatch = useDispatch()

    const on_change = (e: any) => {
        set_vl(e.target.value);
    }

    const on_submit = () => {
        dispatch({ type: 'txt/set_txt', payload: vl });
    }

    return (
        <div>
            <input type="text" value={vl} placeholder="type here..." onChange={on_change}/>
            <input type="submit" onClick={on_submit}/>
        </div>
    );
}

export default Prompt