import { useRef, useEffect, useState } from 'react';
import Button from 'corelabui/Button';
import Prism from 'prismjs';
import { copy } from '@/utils/general';
import styles from './code.module.scss';

const Code = ({
    children,
    language = 'javascript',
    canCopy = true
}: {
    children: string;
    language?: string;
    canCopy?: boolean;
}) => {
    const codeRef = useRef(null);
    let timer: any = null;
    const [title, setTitle] = useState('Copy');

    const onClick = () => {
        copy(children);
        setTitle('Copied!');
        timer = setTimeout(() => setTitle('Copy'), 3000);
    };

    useEffect(() => {
        Prism.highlightAll();
    }, [children]);

    return (
        <div className={styles.container}>
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
