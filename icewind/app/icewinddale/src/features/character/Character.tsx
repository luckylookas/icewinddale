import React, { useEffect, useState} from "react";
import "./Character.css"
import {Character, characterToString, DESCRIPTORS, FLAVORS, FOCI, TYPEHELP, TYPES} from "./CharacterFormOptions";
import {TextField} from "../forms/textfield/TextField";
import FormStep from "../forms/step/FormStep";
import { ORIGINS} from "./OriginValues";
import {ContentArea} from "../content/content-area/ContentArea";
import FinalView from "./FinalView";
import { Fragment } from "react";

const toggleAAn = (str: string): string => {
    return str.toUpperCase().startsWith('A') ||
    str.toUpperCase().startsWith('E') ||
    str.toUpperCase().startsWith('I') ||
    str.toUpperCase().startsWith('O') ||
    str.toUpperCase().startsWith('U') ? ' an ' : ' a '
}

function CharacterForm() {

    const [pname, setPname] = useState('')
    const [name, setName] = useState('')
    const [descriptor, setDescriptor] = useState('')
    const [type, setType] = useState('')
    const [flavor, setFlavor] = useState('')
    const [focus, setFocus] = useState('')

    const [step, setStep] = useState(0)
    const [character, setCharacter] = useState('')
    const [origin, setOrigin] = useState('')

    const advance = (condition: boolean, target: number) => {
        if (condition) {
            setStep(target);

        }
    }
    useEffect(() => {
        setCharacter(characterToString({pname, name, descriptor, type, flavor, focus, origin} as Character))
    }, [origin, step, pname, name, descriptor, type, flavor, focus])

    return <Fragment>
        { step < 6 ?
                <ContentArea>{character}</ContentArea> : null
        }

        <FormStep active={step === 0}>
            <TextField
                label={'You are '}
                       hint={"Player's name"}
                       setValue={setPname}
                       value={pname}/>

            <div className={'buttons'}>
                <div className={pname ? 'button' : 'buttondisabled'} onClick={() => advance(!!pname,1)}>
                    {'>>'}</div>
            </div>

        </FormStep>
        <FormStep active={step === 1}>
            <TextField label={' and will be '}
                       hint={"Character's name"}
                       setValue={setName}
                       value={name}/>
            <div className={'buttons'}>
                <div className={'button'} onClick={() => advance(true,0)}>
                    {'<<'}</div>
                <div className={name ? 'button' : 'buttondisabled'} onClick={() => advance(!!name, 2)}>
                    {'>>'}</div>
            </div>
        </FormStep>
        <FormStep active={step === 2}>
            <TextField label={toggleAAn(descriptor)} setValue={setDescriptor}
                       optionsSource={(f: string) => DESCRIPTORS.filter(it => it.toUpperCase().startsWith(f.toUpperCase()))}
                       value={descriptor}
                       hint={'Descriptor'}
                       link={"http://cypherguide.com/descriptors/"}/>
            <div className={'buttons'}>
                <div className={'button'} onClick={() => advance(true, 1)}>
                    {'<<'}</div>
                <div className={DESCRIPTORS.map(d => d.toUpperCase()).includes(descriptor.toUpperCase()) ? 'button' : 'buttondisabled'}
                     onClick={() => advance(DESCRIPTORS.map(d => d.toUpperCase()).includes(descriptor.toUpperCase()),3)}>
                    {'>>'}</div>
            </div>
        </FormStep>
        <FormStep active={step === 3}>
            <TextField label={' '}
                       setValue={setType}
                       value={type}
                       hint={'Type'}
                       optionsSource={(f: string) => TYPES.filter(it => it.toUpperCase().startsWith(f.toUpperCase()))}
                       link={"http://cypherguide.com/types/"}/>
            <div className={'buttons'}>
                <div className={'button'} onClick={() => advance(true,2)}>
                    {'<<'}</div>
                <div
                    className={TYPES.map(d => d.toUpperCase()).includes(type.toUpperCase()) ? 'button' : 'buttondisabled'}
                     onClick={() => advance(TYPES.map(d => d.toUpperCase()).includes(type.toUpperCase()), 4)}>
                    {'>>'}</div>
            </div>
        </FormStep>
        <FormStep active={step === 4}>
            <TextField label={' specializing in '}
                       setValue={setFlavor}
                       hint={'Flavor'}
                       optionsSource={(f: string) => FLAVORS.filter(it => it.toUpperCase().startsWith(f.toUpperCase()))}
                       value={flavor}/>
            <div className={'buttons'}>
                <div className={'button'} onClick={() => advance(true,3)}>
                    {'<<'}</div>
                <div className={'button'} onClick={() => advance(true, 5)}>
                    {'>>'}</div>
            </div>
        </FormStep>
        <FormStep active={step === 5}>
            <TextField label={' who '} hint={'Focus'}
                       setValue={setFocus} value={focus}
                       optionsSource={(f: string) => FOCI.filter(it => it.toUpperCase().startsWith(f.toUpperCase()))}
                       link={"http://cypherguide.com/foci/"}/>
            <div className={'buttons'}>
                <div className={'button'} onClick={() => advance(true, 4)}>
                    {'<<'}</div>
                <div
                     className={FOCI.map(d => d.toUpperCase()).includes(focus.toUpperCase()) ? 'button' : 'buttondisabled'}
                     onClick={() => advance(FOCI.map(d => d.toUpperCase()).includes(focus.toUpperCase()),6)}>
                    {'>>'}</div>
            </div>
        </FormStep>
        <FormStep active={step === 6}>
            <h1>{character}</h1>
            <div className={'buttons'}>
                <div className={'button'} onClick={() => advance(true, 5)}>
                    {'no'}</div>
                <div className={'button'} onClick={() => advance(true,7)}>
                    {'yes'}</div>
            </div>
        </FormStep>
        <FormStep active={step === 7}>
            <TextField label={'i came to icewind dale because '}
                       hint={"so, why have you come?"}
                       setValue={value => {
                           const tmp = ORIGINS.find(it => it.text.toUpperCase() === value.toUpperCase())
                           if (tmp) {
                               setOrigin(tmp.details)
                           }
                       }}
                       optionsSource={() => ORIGINS.map(it => it.text)}
                       value={origin}
            />

        </FormStep>

        {
            type && TYPEHELP[type.toUpperCase()] && step === 3 ?
               <ContentArea>
                   <div dangerouslySetInnerHTML={{__html: TYPEHELP[type.toUpperCase()]}} />
               </ContentArea> : null
        }
        {
            origin && step === 7 ?
                <FormStep active={step === 7}>
                    <div dangerouslySetInnerHTML={{__html: origin!}}/>
                    <div className={'buttons'}>
                        <div className={'button'} onClick={() => advance(true,6)}>
                            {'wait, no'}</div>
                        <div className={'button'} onClick={() => advance(true,8)}>
                            {'embark!'}</div>
                    </div>
                </FormStep> : null
        }
        {
            step === 8 ?
                <FinalView>
                    <h1>Adventure awaits!</h1>
                    <h3>{character}</h3>
                    <br />
                    <div dangerouslySetInnerHTML={{__html: origin!}} />
                    <div>
                        <br />
                        You pack the most necessary, you say your goodbyes and hurry of.
                        A Dwarf by the name of Gorward IronMug operates a trading and fairing business
                        across the Spine of the world and he agrees to take you on the next run, as he already plans to take some other people.
                    </div>
                    <br />
                    <h3>the table is set</h3>
                    <br />
                    <div className={'tablepic'}>
                        <img alt={'a set table'} className={'ensure_size'} src={'../tisch.jpg'} />
                    </div>
                </FinalView> : null
        }
    </Fragment>
}

export default CharacterForm;
