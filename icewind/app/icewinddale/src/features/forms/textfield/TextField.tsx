import React, {FC, useEffect, useState} from "react";
import "./TextField.css"
import CompleteOption from "./option/CompleteOption";

export interface TextFieldProps {
    hint?: string;
    label: string
    setValue: (value: string) => void
    value: string
    link?: string
    optionsSource?: (filter: string) => string[]
    onBlur?: () => void
}

export const TextField: FC<TextFieldProps> = ({onBlur, hint, label, value, setValue, link, optionsSource}) => {
    const [options, setOptions] = useState<string[]>([])
    const [active, setActive] = useState(false);

    const onFocus = () => {
        setActive(true);
    }

    const onFocusLost = () => {
        setActive(false);
        if (onBlur) {
            onBlur();
        }
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

    return <div>
        <span className={'label'}>{label}</span>
        <div className='textfield'>
            <input name={label}
                   autoFocus
                   type='text'
                   placeholder={hint ? hint : ''}
                   value={value}
                   onFocus={onFocus}
                   onBlur={onFocusLost}
                   onKeyUp={(event) => {
                       event.stopPropagation();
                       event.preventDefault();
                       if (event.key.toUpperCase() === 'ENTER') {
                           onFocusLost();
                       }
                   }}
                   onChange={($event) => setValue($event.target.value)}/>
            {
                link ? <a className={'help'} href={link} rel='noreferrer' target='_blank'>?</a> : null
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
    </div>
}
