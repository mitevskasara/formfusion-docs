import { Input as FRMInput } from '@corelabui/rfm';

import classes from './input.module.scss';

interface InputProps {}

const Input = (props: InputProps & any) => {
    return (
        <FRMInput
            {...props}
            classes={{
                field: 'input',
                label: classes.input__label,
                error: classes.input__error
            }}
        />
    );
};

export default Input;
