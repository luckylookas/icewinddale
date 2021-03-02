import {FC} from "react";
import "./ContentArea.css"

export const ContentArea: FC = ({children}) => {
    return (
        <div className="contentArea">{children}</div>
    );
}