import {FC} from "react";

export const FinalView: FC = ({children}) => {
    return (<div className={'finalview'}>
            {children}
        </div>
    );
}

export default FinalView;