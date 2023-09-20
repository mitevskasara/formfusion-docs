import classes from './property.module.scss';

const Property = ({ children }: { children: React.ReactNode }) => (
    <code className={classes.property}>{children}</code>
);

export default Property;
