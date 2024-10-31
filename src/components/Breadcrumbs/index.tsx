import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import pathLabels from '@/constants/path-labels';
import styles from './breadcrumbs.module.scss';

const Breadcrumbs: React.FC = () => {
    const router = useRouter();

    const pathWithoutHash = router.asPath.split('#')[0];
    const pathParts: string[] = pathWithoutHash.split('/').filter(Boolean);

    return (
        <nav aria-label="breadcrumb" className={styles.container}>
            <ul className={styles.container__list}>
                {pathParts.map((part, index) => {
                    const href = '/' + pathParts.slice(0, index + 1).join('/');
                    const isLast = index === pathParts.length - 1;
                    const label =
                        pathLabels[decodeURIComponent(part)] ||
                        decodeURIComponent(part);

                    return (
                        <li key={href} className={styles.container__list__item}>
                            {isLast ? (
                                <span
                                    className={
                                        styles.container__list__item_active
                                    }>
                                    {label}
                                </span>
                            ) : (
                                <Link
                                    href={href}
                                    className={styles.container__list__item}>
                                    {label}
                                </Link>
                            )}
                            {!isLast && (
                                <span
                                    className={`icon-chevron-right ${styles.container__list__item__separator}`}
                                />
                            )}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Breadcrumbs;
