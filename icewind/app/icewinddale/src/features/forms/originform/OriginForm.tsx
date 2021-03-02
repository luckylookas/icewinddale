import React, {FC, useEffect, useState} from "react";
import "../forms.css"
import {TextField} from "../textfield/TextField";

const ORIGINS =  [
'I know of an Artefact worth a kingdom stranded in the dale.',
'ancient magic beyond belief is conserved in ice.',
'my brothers and I left our heritage long ago. I return to claim it.',
'my Grandmothers sister was taken to the north by witches.',
'I have strange nightmares of black ice that draw me north.',
'I lost everything seek a fresh start at the end of the world.',
"Kelvin's Cairn is the hardest climb there is and I will make it.",
'an Angel tasked me to save Ten Towns from their impending doom.',

]

interface OriginFormProps {
    done: (origin: string) => void
}

export const OriginForm: FC<OriginFormProps> = ({done}) => {

    const [origin, setOrigin] = useState('');
    const [custom, setCustom] = useState('');

    useEffect(() => {
        if (origin && (
            ORIGINS.map(it => it.toUpperCase()).includes(origin.toUpperCase()) ||
            origin.toUpperCase() === custom.toUpperCase()
        )
        ) {
            done('I came to icewind dale because ' + origin);
        }
    }, [origin, custom])

    return<div className='flexbox'>
        <div className='flexInput'>
            <TextField label={'i came to icewind dalte because '}
                       hint={"so, why have you come to icewind dale?"}
                       setValue={setOrigin}
                       optionsSource={() => ['I have my own reasons', ...ORIGINS]}
                       value={origin}
            />
        </div>
        {
            origin.toUpperCase() === 'I have my own reasons'.toUpperCase() ?
                <div className='flexInput'>
                    <TextField label={' , which are: '}
                               hint={"so, why have you come to icewind dale?"}
                               setValue={setCustom}
                               value={custom}/>
                    <button onClick={() => setOrigin(custom)}>ok</button>
                </div>
                : null
        }
    </div>
}
