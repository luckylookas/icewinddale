import React, {FC} from "react";
import CSSTransition from "react-transition-group/CSSTransition";
import {ContentArea} from "../../content/content-area/ContentArea";
import {ScrollableContentArea} from "../../content/content-area/ScrollableContentArea";

interface FormStepProps {
    active: boolean
}

export const FormStep: FC<FormStepProps> = (props) => {
    return <CSSTransition unmountOnExit timeout={10000} in={props.active} classNames={'formstep'}>
        <ScrollableContentArea>
            {props.children}
        </ScrollableContentArea>
    </CSSTransition>
}

export default FormStep;