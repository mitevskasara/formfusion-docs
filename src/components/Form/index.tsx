import { Form as FRMForm } from 'formfusion';

import classes from './form.module.scss';

interface FormProps {}

const Form = (props: FormProps & any) => {
    return <FRMForm {...props} className={classes.form} />;
};

export default Form;
