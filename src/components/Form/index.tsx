import { Form as FRMForm } from '@corelabui/rfm';

import classes from './form.module.scss';

interface FormProps {}

const Form = (props: FormProps & any) => {
    return <FRMForm {...props} className={classes.form} />;
};

export default Form;
