import classes from './playground.module.scss';

interface PlaygroundProps extends Partial<HTMLIFrameElement & any> {}

const Playground = ({ className, ...props }: PlaygroundProps) => {
    return (
        <iframe
            {...props}
            className={`${className ?? ''} ${classes.playground}`}
            loading="lazy"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        />
    );
};

export default Playground;
