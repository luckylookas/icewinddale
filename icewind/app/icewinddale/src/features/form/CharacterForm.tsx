import React from "react";
import "./CharacterForm.css"

function CharacterForm() {
    return <div className='flexbox'>
        <div className='flexInput'>
            <span>I am </span><input name='name' type={'text'} />
        </div>
        <div className='flexInput'>
            <span>, a </span><input name='descriptor' type={'text'} />
        </div>
        <div className='flexInput'>
            <span> </span><input name='type' type={'text'} />
        </div>
        <div className='flexInput'>
            <span> specialized in </span><input name='flavor' type={'text'} />
        </div>
        <div className='flexInput'>
            <span> who </span><input name='focus' type={'text'} />
        </div>
    </div>
}

export default CharacterForm;
