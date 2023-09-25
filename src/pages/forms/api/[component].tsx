import React from 'react';
import Typography from 'corelabui/Typography';

import FormsLayout from '@/components/MainLayout';
import Property from '@/components/Property';
import Link from '@/components/Link';

import { Component, Props } from '../interfaces';

import classes from '../forms.module.scss';

const Forms = ({ data }: { data: Component }) => {
    return (
        <FormsLayout>
            <section>
                <Typography variant="heading4" htmlElement="h2">
                    {data?.title}
                </Typography>
                <Typography variant="body1">
                    <span
                        dangerouslySetInnerHTML={{ __html: data?.description }}
                        className={classes.description}
                    />
                </Typography>
                <br />
                <Typography variant="heading5" htmlElement="h3">
                    {data?.title} properties
                </Typography>
                <Typography variant="body1">
                    Props of the
                    <Link href={data?.url ?? ''} target="_blank">
                        &nbsp;native component&nbsp;
                    </Link>
                    are also available.
                </Typography>
                <table>
                    <tbody>
                        {data?.props.map((prop: Props) => (
                            <tr
                                id={`${data?.key}-${prop.name}`}
                                key={prop.name}>
                                <td className={classes.properties}>
                                    <Link href={`#${data?.key}-${prop.name}`}>
                                        #
                                    </Link>
                                    <dl className={classes.properties__list}>
                                        <dt
                                            className={
                                                classes.properties__list__form
                                            }>
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
                                        </dt>
                                        <dt
                                            className={
                                                classes.properties__list__form
                                            }>
                                            <Typography variant="body1">
                                                <span
                                                    dangerouslySetInnerHTML={{
                                                        __html: prop.description
                                                    }}
                                                    className={
                                                        classes.description
                                                    }
                                                />
                                            </Typography>
                                        </dt>
                                        {prop.default && (
                                            <dt
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
                                            </dt>
                                        )}
                                        <dt
                                            className={
                                                classes.properties__list__form
                                            }>
                                            <Typography variant="body1">
                                                Type:
                                                <strong>
                                                    &nbsp;
                                                    {prop.type}
                                                </strong>
                                            </Typography>
                                        </dt>
                                    </dl>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
            <section className={classes.main__section} id="example">
                <Typography variant="heading5" htmlElement="h3">
                    Example
                </Typography>
                <br />
                <iframe
                    src={data?.exampleUrl}
                    style={{
                        width: '100%',
                        height: '500px',
                        border: 0,
                        borderRadius: '4px',
                        overflow: 'hidden'
                    }}
                    title={data?.exampleTitle}
                    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                />
            </section>
            <footer className={classes.footer}>
                <Typography variant="caption" align="right">
                    Next
                </Typography>
                <Link href={data?.nextUrl ?? ''}>{data?.nextUrlTitle}</Link>
            </footer>
        </FormsLayout>
    );
};

export async function getStaticPaths() {
    return {
        paths: [
            { params: { component: 'form' } },
            { params: { component: 'input' } },
            { params: { component: 'textarea' } }
        ],
        fallback: true
    };
}

export async function getStaticProps({ params }: any) {
    try {
        const data = await require(`@/data/${params.component}.json`);
        return {
            props: {
                data
            }
        };
    } catch (err) {
        console.log(
            `Error fetching data for component page ${params.component}`,
            err
        );

        return {
            notFound: true
        };
    }
}

export default Forms;
