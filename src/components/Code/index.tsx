import { useRef, useEffect, useState } from 'react';
import Button from 'corelabui/Button';
import Prism from 'prismjs';
import { copy } from '@/utils/general';
import styles from './code.module.scss';

const Code = ({
    children,
    language = 'javascript',
    canCopy = true,
    className
}: {
    children: string;
    language?: string;
    canCopy?: boolean;
    className?: string;
}) => {
    const codeRef = useRef(null);
    const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const [title, setTitle] = useState('Copy');

    const onClick = () => {
        copy(children);
        setTitle('Copied!');
        if (timer.current) clearTimeout(timer.current);
        timer.current = setTimeout(() => setTitle('Copy'), 3000);
    };

    useEffect(() => {
        return () => {
            if (timer.current) clearTimeout(timer.current);
        };
    }, []);

    useEffect(() => {
        Prism.highlightAll();
    }, [children]);

    return (
        <div className={`${styles.container} ${className}`}>
            <pre className={styles.pre}>
                <code ref={codeRef} className={`language-${language}`}>
                    {children}
                </code>
                {canCopy && (
                    <Button
                        title={title}
                        onClick={onClick}
                        size="small"
                        width="75px"
                        variant="secondary"
                    />
                )}
            </pre>
        </div>
    );
};

export default Code;
