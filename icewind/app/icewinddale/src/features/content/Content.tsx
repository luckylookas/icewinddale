import React, {useState} from "react";
import "./Content.css"
import CharacterForm from "../forms/characterform/CharacterForm";
import { Fragment } from "react";
import {OriginForm} from "../forms/originform/OriginForm";
import {ContentArea} from "./content-area/ContentArea";

function Content() {

    const [character, setCharacter] = useState('')
    const [origin, setOrigin] = useState<React.ReactFragment>()

    const characterDone = (sentence: string) => {
        setCharacter(sentence);
    }
    const originDone = (sentence: string) => {
        setOrigin(sentence);
    }

    return <div className={'content-container'}>
        <ContentArea>
            <CharacterForm done={characterDone} />
        </ContentArea>
        <ContentArea>
            <OriginForm done={originDone} />
            {
                origin ? <div>{origin}</div> : null
            }
        </ContentArea>
    </div>
}

export default Content;
