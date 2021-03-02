import React, {FC, useEffect, useState} from "react";
import "../forms.css"
import {TextField} from "../textfield/TextField";

interface origin {
    text: string,
    key: string,
    details: string
}

const ORIGINS: origin[] =  [
    {text: 'I know of an Artefact worth a kingdom stranded in the dale.', key: 'artefact', details:`
            I searched far and wide for pieces of the cross of Vigil, a 3 foot golden cross set with 6 rubies.
            But your ambition is not for the coin this artefact will earn you. Far more interestingly,
            The cross is the key to open the material planes connection to Avernus.
            For unknown reasons, the Duke of Avernus sealed the Gates and left the key with mortal Soldiers - the Order of the Cross.
            As the decades and centuries passed, the Order of the Cross vanished and the crosses original purpose was forgotten.
            You found, that a Pirate Ship named 'The Dark Duchess' must have carried it last.
            The Pirates stole the cross from a Transport to Chult and fled the Imperial fleet to the north about one and a halt years ago.
            The ship was never seen again.
            This artefact must not fall into the wrong hands, and it might just be stranded in icewind dale.
        `},
    {text: 'ancient magic beyond belief is conserved in ice.',key: 'artefact', details: `
            Before the Humans, the Goliaths roamed the tundra. Before the Goliaths, the Giants rules the World from their Throne in the North.
            And before the Giants, the Capital of the Legendary Nethereese Empire was rumored to be there.
            Their skill and knowledge about the weave are unparalleled today and you have heard rumors of artefacts surfacing in icewind dale.
        `},
    {text: 'my brothers and I left our heritage long ago. I return to claim it.',key: 'artefact', details: `
            That's it. You traveled the world, learned a trade, earned a living. It is now time to go home.
            Home where you and your 4 brothers could not agree on a name for your tavern in Bremen, so you opened 5 of them next to each other.
            All of you lost all your gold and all of you had to leave.
            But you miss the northern people, the clean water, the mountains, even the cold.
            You figure no one will habe bothered to tear down your tavern and maybe, just maybe, you will finally see your brothers again.
        `},
    {text: 'my Grandmothers sister was taken to the north by witches.',key: 'artefact', details: `
            An old story in our family, Grandma told it over and over again.
            Her sister, Hilda, was once taken by witches.
            'Oh boy, the doors flew open from the wind and it carried Hildie with it one day. I will never forget the evil whispers.
            And the cold! The wind was ever so cold!'
            when rumors of witches reached my father and brother 5 years ago, they took up arms and traveled north.
            'To Bremen and then we will see'. That is the last I ever heard of them.
            Now that Grandma is dead, it is time for me to look for them, and the witches that seem to be the bane of my family.
        `},
    {text: 'I have strange nightmares of black ice that draw me north.',key: 'artefact', details: `
           A black obelisk. A ship growing tentacles. clicking. growling. red eyes int he dark.
            Chewing noises, a floating city. A monster, covering the sun.
            Darkness. You are cold. A shrill screech. A Diamond,impossibly shaped, glowing with colors you cannot name.
            An owl. without eyes...

            You awake. sweating. again.
            Your dreams draw you north.
            Something is calling you. Calling for...aid? And it won't stop until you come.
        `},
    {text: "Kelvin's Cairn is the hardest climb there is and I will make it.",key: 'artefact', details:
            `
              You have all the money you can ever need,
                a Mansion, all the influence and fame one could achieve. You are bored.
                The last time you felt alive was when you sclaed the Dragon's Mountain in Chult last year.
                The Jungle, he Insects. the Undead, the heat, the stories! You need another adventure!
               And a new Adventure you found! Kelvin's Cairn, at the center of icewind dale.
                6 miles high, covered in snow deep enough to cover the yetis living there!
                You prepared for 6 months. You are ready!
                People from the north warned you about 'the never ending winter' up there. But that is just what you want, a challenge!
            `},
    {text: 'an Angel tasked me to save Ten Towns from their impending doom.', key: 'artefact', details: `
            Was that a dream? No she was real. And she meant you! You have to go north and bring hope to the people of icewind dale!
            They must be prepared for what is to come.
            You must save them. From whatever is about to happen. Or has already happened?
            The invisible devils from the underdark have come she said. The Frostmaiden brought icewind dale to their knees, but the killing blow comes not from ice.
            It comes from the heart of a red dragon.
            The winds of winter has weakened their spirits, they cannot stand and fight for themselves anymore.
            What did she mean?
            Devils? No one has seen devils for hundreds of years...
            `},
]

interface OriginFormProps {
    done: (origin: string) => void
}

export const OriginForm: FC<OriginFormProps> = ({done}) => {

    const [origin, setOrigin] = useState<string>('');

    useEffect(() => {
        if (origin && ORIGINS.map(it => it.text.toUpperCase()).includes(origin.toUpperCase())) {
            done(ORIGINS.find(it => it.text.toUpperCase() === origin.toUpperCase())!!.details);
        }
    }, [origin])

    return<div className='flexbox'>
        <div className='flexInput'>
            <TextField label={'i came to icewind dale because '}
                       hint={"so, why have you come?"}
                       setValue={setOrigin}
                       optionsSource={() => ORIGINS.map(it => it.text)}
                       value={origin}
            />
        </div>

    </div>
}
