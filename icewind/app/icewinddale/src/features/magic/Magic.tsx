import React,  {FC, Fragment} from "react";
import {ContentArea} from "../content/content-area/ContentArea";

export const Magic: FC = () => {
    return <Fragment>
        <ContentArea>
            <h2>cantrips & everyday magic</h2>
            <p>
                Use the optional spellcasting rules from the Core Rulebook (Fantasy) to craft the mage you want to play.
            </p>
            <p>More often than not, the correct combination if descriptor and focus should give you almost everything you need</p>
        </ContentArea>

        <ContentArea>
            <h2>spells</h2>
            <p>
                The system's 'cipher-limit' are the equivalent of 'Spell slots' from Dnd 5e - with the exception that every class gets them.
                You choose what these 'spells' are for your character.
            </p>
            <ul>
            <li>Are you a Wizard from a tribe in the south who inks magic symbols into their skin, which fade when the spell is released?</li>
            <li>Are you a Priest who needs to perform complex prayers and ceremonies to appease your diety for the next week?</li>
            <li>Are you a totally different Priest who needs to carve totems from wood and imbue them with blood to catch magic spirits?</li>
            <li>Are Bard who needs to practice melodies that manipulate the elements or minds of people?</li>
            <li>Are you a Warrior who needs to meditate to channel the strength of your ancestors?</li>
            </ul>
            <br />
            <p>you tell me, as long as it is unique and it's possible to fail.</p>
        </ContentArea>

        <ContentArea>
            <h2>creating a cipher - rules</h2>
            <p>
                creating a cipher is a task of a pool matching your preparation technique. <br />
                The difficulty is the {'{target-level}'} and it takes the {'{target-level}'} of rests to perform, during which you do not gain the benefits of resting.<br />
                The PC can apply assets and effort to reduce the difficulty as by the normal rules.<br />
                They can also remove the longest rest by applying one point of effort, which can be done multiple times.<br />
            </p><p>
                so creating a level 6 cipher means: <br />
            <br />
                task difficulty: 6<br />
                time required: 6 rests [ 1 action, 10 minutes, 1 hour, 8 hours, 24 hours, 1 action]<br />
            <br />
                1 effort could reduce the difficulty to 5 or eliminate the 24 hour rest requirement.<br />
            <br />
                failing the tasks consumes the time and effort spent, but yields no results.<br />
                There is no upper limit on the cipher levels a PC can target, the lower limit is the <b>level the cipher from the book would have if you rolled a 1 on the d6 roll</b> required
            <br /><br />
                eg.:<br />
                "Age Taker" = 1d6+4, so it can be created at level 5 or higher.
            </p>
        </ContentArea>
    </Fragment>
}