import React, {FC} from "react";
import "./Content.css"

const Content: FC = ({children}) => {

    return <div className={'content-container'}>
        {children}
    </div>
}

export default Content;
