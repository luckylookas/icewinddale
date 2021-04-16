import {FC} from "react";
import "./ContentArea.css"

export const ScrollableContentArea: FC = ({children}) => {
    return (
            <div className="scrollableContentArea">{children}</div>
    );
}