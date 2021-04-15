import "../forms/forms.css"


export interface Character {
    pname: string
    name: string
    type: string
    descriptor: string
    flavor: string
    focus: string
    origin: string
}

interface Help {
    [key: string]: string;
}

export const TYPEHELP :Help = {'WARRIOR': `
You are a physical fighter, either nimble and quick or strong like an ox. 
<br />
You wield any weapon with expertise and overcome challenges with force or dexterity.
<br /><br />Anyone would be happy to be your ally in a fight.
<br /><br />
Warriors are: Barbarians, Knights, Duelists or Veteran Soldiers
`,
'ADEPT': `Your master powers beyond the physical world. Your greatest weapon is Your mind.<br />
You wield Magic to fight enemies or boost your allies.<br /> You try to solve Problems by thinking about them.
<br /><br />Anyone would be glad to get your help when dealing with the supernatural.
<br /><br />
Adepts are: Wizards, Warlocks, Sorcerers or Priests
`,
'EXPLORER': `You live for the action. <br />
Your are dexterous and clever enough to live through the toughest situations.<br />
While not as studied as Adepts, nur as steeled in fights as Warriors, nobody can  hold the candle to your ability to survive
in eny envirnoment and situation.
<br /><br />
Anyone would be glad to be on your side if things start to go south.\
<br /><br />
Explorers are any type of Character that needs physical and mental abilities like War-Clerics/Inquisitors, Monks or Rangers`
,
'SPEAKER': `The word in mightier than the sword.<br /> Where others fight, jump or shoot lighting and hurt themselves,
 you solve issues by communicating. You know you are not a fighter, because you don't have to be.
 <br />Even if violence is appropriate, you have your ways to let others gladly do the work for you.
<br /><br />Friend and foe alike will rejoice to see you instead of a brutish barbarian in almost any situation!
<br /><br />
Speakers can be any type of non violent Character like Bards, Scholars, Priests or Teachers`};

export const characterToString = (char: Character): string => {
    let str = `You are `;
    if (char.pname) {
        str = str + char.pname + ` and will be playing as `
    }
    if (char.name) {
        str = str + char.name + `, a`
    }
    if (char.descriptor) {
        str = str + getVocalPreposition(char.descriptor)
        str += char.descriptor + ` `
    }
    if (char.type) {
        str += char.type + ` specialized in `
    }
    if (char.flavor) {
        str += char.flavor + ` who `
    }
    if (char.focus) {
        str += char.focus
    }

    if(!(char.pname && char.name && char.descriptor && char.type && char.flavor && char.focus)) {
        str += ` ...`
    } else {
        str += '.'
    }
    return str;
}

const getVocalPreposition = (str: string): string => {
    return str.toUpperCase().startsWith('A') ||
    str.toUpperCase().startsWith('E') ||
    str.toUpperCase().startsWith('I') ||
    str.toUpperCase().startsWith('O') ||
    str.toUpperCase().startsWith('U') ? 'n ' : ' '
}

export const TYPES = ["Warrior", "Adept", "Explorer", "Speaker"]
export const DESCRIPTORS = ['appealing', 'Beneficient', 'Brash', 'calm'
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
export const FLAVORS = ['Stealth', 'Combat', 'Magic', 'Knowledge']
export const FOCI = [
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