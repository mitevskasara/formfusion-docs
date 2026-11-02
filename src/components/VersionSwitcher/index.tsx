import { useRouter } from 'next/router';

import classes from './versionSwitcher.module.scss';

interface VersionSwitcherProps {
    version: 'v1' | 'v2';
}

// The v1 and v2 doc trees are 1:1 mirrors of each other (same slugs, just
// under /docs/v1/... vs /docs/...), so switching is a plain prefix swap -
// no lookup table needed.
const toOtherVersion = (path: string, target: 'v1' | 'v2') => {
    const withoutHash = path.split('#')[0];

    if (target === 'v1') {
        if (/^\/docs\/v1(\/|$)/.test(withoutHash)) return withoutHash;
        return withoutHash.replace(/^\/docs(\/|$)/, '/docs/v1$1');
    }

    return withoutHash.replace(/^\/docs\/v1(\/|$)/, '/docs$1');
};

const VersionSwitcher = ({ version }: VersionSwitcherProps) => {
    const router = useRouter();

    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const target = e.target.value as 'v1' | 'v2';
        if (target === version) return;
        router.push(toOtherVersion(router.asPath, target));
    };

    return (
        <select
            aria-label="Documentation version"
            className={classes.versionSwitcher}
            value={version}
            onChange={onChange}>
            <option value="v2">Latest</option>
            <option value="v1">v1</option>
        </select>
    );
};

export default VersionSwitcher;
