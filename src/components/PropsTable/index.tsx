import Typography from 'corelabui/Typography';

import { Component, Props } from '@/pages/formfusion/api/interfaces';
import Link from '@/components/Link';
import Property from '@/components/Property';
import HTMLText from '@/components//HTMLText';

import classes from './propsTable.module.scss';

interface PropsTableProps {
    data: Component;
}

const PropsTable = ({ data }: PropsTableProps) => {
    return (
        <table>
            <tbody>
                {data?.props.map((prop: Props) => (
                    <tr id={`${data?.key}-${prop.name}`} key={prop.name}>
                        <td className={classes.properties}>
                            <Link href={`#${data?.key}-${prop.name}`}>#</Link>
                            <ul className={classes.properties__list}>
                                <li className={classes.properties__list__form}>
                                    <Typography variant="body1">
                                        <Property>{prop.name}</Property>
                                        {prop.required && (
                                            <small
                                                className={
                                                    classes.properties__list_required
                                                }>
                                                Required
                                            </small>
                                        )}
                                    </Typography>
                                </li>
                                <li className={classes.properties__list__form}>
                                    <Typography variant="body1">
                                        <HTMLText text={prop.description} />
                                    </Typography>
                                </li>
                                {prop.default && (
                                    <li
                                        className={
                                            classes.properties__list__form
                                        }>
                                        <Typography variant="body1">
                                            Default:
                                            <strong>
                                                &nbsp;
                                                {prop.default}
                                            </strong>
                                        </Typography>
                                    </li>
                                )}
                                <li className={classes.properties__list__form}>
                                    <Typography variant="body1">
                                        Type:
                                        <strong>
                                            &nbsp;
                                            {prop.type}
                                        </strong>
                                    </Typography>
                                </li>
                            </ul>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default PropsTable;
