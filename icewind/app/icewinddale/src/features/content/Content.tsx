import React, {useState} from "react";
import "./Content.css"
import CharacterForm from "../forms/characterform/CharacterForm";
import { Fragment } from "react";
import {OriginForm} from "../forms/originform/OriginForm";

function Content() {

    const [character, setCharacter] = useState('')
    const [origin, setOrigin] = useState('')

    const characterDone = (sentence: string) => {
        setCharacter(sentence);
    }
    const originDone = (sentence: string) => {
        setOrigin(sentence);
    }

    return <div className={'content-container'}>
        <CharacterForm done={characterDone} />
        {
            character ? <Fragment>
                    <h2>
                        {character}
                    </h2>
                <OriginForm done={originDone} />
                </Fragment>

                : null
        }
        { origin ? <h2>{origin}</h2> : null
        }

    </div>
}

export default Content;
