import React, {FC} from "react";
import CSSTransition from "react-transition-group/CSSTransition";
import {ContentArea} from "../../content/content-area/ContentArea";

interface FormStepProps {
    active: boolean
}

export const FormStep: FC<FormStepProps> = (props) => {
   return <CSSTransition unmountOnExit timeout={300} in={props.active} classNames={'formstep'}>
        <ContentArea>
            {props.children}
        </ContentArea>
    </CSSTransition>
}

export default FormStep;