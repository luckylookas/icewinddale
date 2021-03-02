import React, {FC, useEffect, useState} from "react";
import "../forms.css"
import {TextField} from "../textfield/TextField";

const TYPES = ["Warrior", "Adept", "Explorer", "Speaker"]
const DESCRIPTORS = ['appealing', 'Beneficient', 'Brash', 'calm'
    , 'chaotic'
    , 'charming'
    , 'clever'
    , 'clumsy'
    , 'craven'
    , 'creative'
    , 'cruel'
    , 'dishonorable'
    , 'doomed'
    , 'empathic'
    , 'exiled'
    , 'fast'
    , 'foolish'
    , 'graceful'
    , 'guarded'
    , 'hardy'
    , 'hideous'
    , 'honorable'
    , 'impulsive'
    , 'inquisitive'
    , 'intelligent'
    , 'intuitive'
    , 'jovial'
    , 'kind'
    , 'learned'
    , 'lucky'
    , 'mad'
    , 'mechanical'
    , 'mysterious'
    , 'naive'
    , 'perceptive'
    , 'resilient'
    , 'risk-taking'
    , 'rugged'
    , 'sharp-eyed'
    , 'skeptical'
    , 'stealthy'
    , 'strong'
    , 'strong-willed'
    , 'swift'
    , 'tounge-tied'
    , 'tough'
    , 'vicious'
    , 'virtuous'
    , 'wierd']
const FLAVORS = ['Stealth', 'Combat', 'Magic', 'Knowledge']
const FOCI = [
    'abides in stone',
    'absorbs energy',
    'awakens dreams',
    'bears a halo of fire',
    'blazes with radiance',
    'brandishes an exotic shield',
    'calculates the incalculable',
    'channels divine blessings',
    'commadn mental powers',
    'conducts wierd sience',
    'consorts with the dead',
    'controls beasts',
    'controls gravity',
    'crafts illusions',
    'craft unqiue objects',
    'dances with dark matter',
    'defends the gate',
    'defends the weak',
    'descends from nobility',
    "doesn't do much",
    'emerged from the obelisk',
    'eploys magnetism',
    'entertains',
    'exists in two places at once',
    'exists partially out of phase',
    'explores dark places',
    'fights dirty',
    'fights with panache',
    'focuses mind over matter',
    'grows to towering heights',
    'helps their friends',
    'howls at the moon',
    'hunts',
    'infiltrates',
    'interprets the law',
    'is wanted by the law',
    'keeps a magic ally',
    'leads',
    'learns quickly',
    'lives in the wilderness',
    'looks for trouble',
    'masters defense',
    'masters spells',
    'masters the swarm',
    'masters weaponry',
    'metes out justice',
    'moves like a cat',
    'moves liek the wind',
    'murders',
    'need no weapon',
    'never says die',
    'operates undercover',
    'performs feats of strength',
    'plays too many games',
    'rages',
    'rides the lightning',
    'runs away',
    'sailed beneath the jolly roger',
    'scavenges',
    'sees beyond',
    'separates mind from body',
    'shepherds the community',
    'shepherds spirits',
    'shreds the walls of the world',
    'slays monsters',
    'solves mysteries',
    'speaks of the land',
    'stands like a bastion',
    'throws with deadly accuracy',
    'thunders',
    'was foretold',
    'wears a sheen of ice',
    'wears power armos',
    'wields two weapons at once',
    'works for a living',
    'works miracles',
    'works the back alleys',
    'works the system',
    'would rather be reading'

]

interface CharacterFormProps {
    done: (value: string) => void
}

export const CharacterForm: FC<CharacterFormProps> = ({done}) => {
    const [pname, setPname] = useState('')
    const [name, setName] = useState('')
    const [descriptor, setDescriptor] = useState('')
    const [type, setType] = useState('')
    const [flavor, setFlavor] = useState('')
    const [focus, setFocus] = useState('')

    useEffect(() => {
        if (name && pname &&
            descriptor && DESCRIPTORS.map(it => it.toUpperCase()).includes(descriptor.toUpperCase()) &&
            type && TYPES.map(it => it.toUpperCase()).includes(type.toUpperCase()) &&
            focus && FOCI.map(it => it.toUpperCase()).includes(focus.toUpperCase()) &&
            (!flavor || FLAVORS.map(it => it.toUpperCase()).includes(flavor.toUpperCase()))
    ) {
            done(`I am ` + pname + ` and will be ` + name + toggleAAn(descriptor) + ` ` + type + (flavor ? ` specializing in ` + flavor : '') + ' who ' + focus)}

    }, [pname, name, descriptor, type, flavor, focus, done])

    const toggleAAn = (str: string): string => {
        return str.toUpperCase().startsWith('A')  ||
        descriptor.toUpperCase().startsWith('E') ||
        descriptor.toUpperCase().startsWith('I')||
        descriptor.toUpperCase().startsWith('O') ||
        descriptor.toUpperCase().startsWith('U') ? ' an ' : ' a '
    }

    return <form autoComplete={'off'} className={'characterform'}>
        <div className='flexbox'>
            <div className='flexInput'>
                <TextField label={'I am '}
                           hint={"Player's name"}
                           setValue={setPname}
                           value={pname}
                />
            </div>
            <div className='flexInput'>
                <TextField label={' and will be '}
                           hint={"Character's name"}
                           setValue={setName}
                           value={name}
                />
            </div>
            <div className='flexInput'>
                <TextField label={toggleAAn(descriptor)} setValue={setDescriptor}
                           optionsSource={(f: string) => DESCRIPTORS.filter(it => it.toUpperCase().startsWith(f.toUpperCase()))}
                           value={descriptor}
                           hint={'Descriptor'}
                           link={"http://cypherguide.com/descriptors/"}/>
            </div>
            <div className='flexInput'>
                <TextField label={' '}
                           setValue={setType}
                           value={type}
                           hint={'Type'}
                           optionsSource={(f: string) => TYPES.filter(it => it.toUpperCase().startsWith(f.toUpperCase()))}
                           link={"http://cypherguide.com/types/"}/>
            </div>
            <div className='flexInput'>
                <TextField label={' specializing in '}
                           setValue={setFlavor}
                           hint={'Flavor'}
                           optionsSource={(f: string) => FLAVORS.filter(it => it.toUpperCase().startsWith(f.toUpperCase()))}
                           value={flavor}/>
            </div>
            <div className='flexInput'>
                <TextField label={' who '} hint={'Focus'}
                           setValue={setFocus} value={focus}
                           optionsSource={(f: string) => FOCI.filter(it => it.toUpperCase().startsWith(f.toUpperCase()))}
                           link={"http://cypherguide.com/foci/"}/>
            </div>
        </div>
    </form>
}

export default CharacterForm;
