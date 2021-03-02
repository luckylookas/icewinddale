import React, {FC} from "react";

interface OptionProps {
    onClick: (value: string) => void
    value: string;
    label?: string;
}

export const CompleteOption: FC<OptionProps> = ({onClick, value, label}) => {
    return <div onMouseDown={() => {
        onClick(value)
    }}>{label ? label : value}</div>
}

export default CompleteOption;
