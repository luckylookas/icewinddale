import React, {FC, Fragment, useEffect, useState} from "react";
import "./TextField.css"
import CompleteOption from "./option/CompleteOption";

interface TextFieldProps {
    hint?: string;
    label: string
    setValue: (value: string) => void
    value: string
    link?: string
    optionsSource?: (filter: string) => string[]
}

export const TextField: FC<TextFieldProps> = ({hint, label, value, setValue, link, optionsSource}) => {

    const [options, setOptions] = useState<string[]>([])
    const [active, setActive] = useState(false);

    const onFocus = () => {
        setActive(true);
    }

    const onFocusLost = () => {
        setActive(false);
    }

    useEffect(() => {
            if (optionsSource) {
                setOptions(optionsSource(value))
            }
    }, [value, optionsSource])

    const onOption = (value: string) => {
        setValue(value);
        setActive(false);
    }

    return <Fragment>
        <span className={'label'}>{label}</span>
        <div className='textfield'>
            <input name='label'
                   type='text'
                   placeholder={hint ? hint : ''}
                   value={value}
                   onFocus={onFocus}
                   onBlur={onFocusLost}
                   onChange={($event) => setValue($event.target.value)}/>
            {
                link ? <a href={link} rel='noreferrer' target='_blank'>?</a> : null
            }
            {
                options.length && active
                    ?
                    <div className={'options'}>
                        {options.slice(0, 100).map(option => <CompleteOption key={option} onClick={onOption} value={option} />)}
                    </div>
                    :
                    null
            }
        </div>
    </Fragment>
}
