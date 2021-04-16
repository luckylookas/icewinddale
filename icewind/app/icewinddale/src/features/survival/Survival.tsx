import React,  {FC, Fragment} from "react";
import {ContentArea} from "../content/content-area/ContentArea";

export const Survival: FC = () => {
    return <Fragment>

        <ContentArea>
            <h2>Resting</h2>
            <p>
              Resting for more than 10 minutes requires a warm and dry place to have beneficial effects.<br />
            </p>
            <p>In addition, if a PC requires a full resting cycle all at once (eg. when preparing spells or regenerating massive amounts), an additional 12 hours are added to the time spent.</p>
        </ContentArea>

        <ContentArea>
            <h2>nutrition and sleep</h2>
            <p>
                starvation or exhaustion are an ever present danger in the northern tundra. To reflect this aspect, the following moves a Character one step down the damage track.
            </p>
            <ul>
                <li>Not eating once per rest cycle</li>
                <li>Not sleeping at least once every 2 rest cycles</li>
            </ul>
        </ContentArea>

        <ContentArea>
            <h2>cold</h2>
            <p>
                every 8 hours spent in the cold, requires a might defense roll, depending on the time spent and the weather. failing this roll, moves the Character one step down the damage track.
            </p>
            <ul>
                <li>+1 for each day since the last warm rest</li>
                <li>+1 (regular day) up to +4 (heavy blizzard)</li>
                <li>+0 (dry clothes) up to +4 (fallen into water)</li>
            </ul>
        </ContentArea>

        <ContentArea>
            <h2>still heroes</h2>
            <p>
               You are heroes, so the last step on the damage track is not necessarily 'dead'. <br />
               You get a say in what lasting physical or mental consequences you take away from the experience.<br />
               <br />
               If the table deems your proposal to be adequate for what 'killed' you - you get to live.
            </p>
        </ContentArea>

        <ContentArea>
            <h2>supplies</h2>
            <p>
              Climbing Kelvins Cairn is not just hard because the way is long - it is hard because the more you take with you, the harder it gets!<br />
              You can carry up to {'{your might pool}'} of minor items worth of supplies without penalty.<br /><br />
              Everytime you break a multiple of your might pool, you suffer the stacking effects of wearing heavy armor. Your ability to 'ignore' these effects, only count for one stack!
                <br />
                <br />
                <ul>
                    <li>1 minor item (things you could comfortably carry multiples of on your belt or in your pockets, light weapons)</li>
                    <li>1 medium item = 2 minor items (medium weapons, things you'd need a bag or a free hand for to carry, rations for a day)</li>
                    <li>1 major item = 2 medium items (heavy weapons, large or especially heavy objects)</li>
                </ul>
            </p>

        </ContentArea>

    </Fragment>
}

