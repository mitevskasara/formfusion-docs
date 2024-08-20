import React, { RefObject, useEffect, useRef } from 'react';
import styles from './cursor.module.scss';

const Cursor = ({ targetRef }: { targetRef: RefObject<HTMLInputElement> }) => {
    const cursorRef = useRef<HTMLSpanElement>(null);
    let focusTimeout: any = null;
    let changeCursorTimeout: any = null;
    let hideCursorTimeout: any = null;
    let fillInputTimeout: any = null;
    let focusNextFieldTimeout: any = null;

    useEffect(() => {
        const handleAnimation = () => {
            const cursorElement = cursorRef.current;
            const targetElement = targetRef.current;

            if (cursorElement && targetElement) {
                cursorElement.style.transform = `translate(33px, 60px)`;

                focusTimeout = setTimeout(() => {
                    const input =
                        targetElement.getElementsByTagName('input')[0];
                    input.focus();

                    hideCursorTimeout = setTimeout(() => {
                        cursorElement.style.display = 'none';
                    }, 600);

                    fillInputTimeout = setTimeout(() => {
                        const simulateTyping = async () => {
                            const initialChar = '1';
                            const fullText = 'MyName';

                            if (input) {
                                input.value = initialChar;
                                input.dispatchEvent(
                                    new Event('input', { bubbles: true })
                                );

                                await new Promise((resolve) =>
                                    setTimeout(resolve, 1000)
                                );

                                input.value = '';
                                input.dispatchEvent(
                                    new Event('input', { bubbles: true })
                                );

                                await new Promise((resolve) =>
                                    setTimeout(resolve, 700)
                                );

                                for (let i = 0; i <= fullText.length; i++) {
                                    input.value = fullText.substring(0, i);
                                    input.dispatchEvent(
                                        new Event('input', { bubbles: true })
                                    );
                                    await new Promise((resolve) =>
                                        setTimeout(resolve, 350)
                                    );
                                }
                            }
                        };

                        simulateTyping();
                        input.blur();

                        focusNextFieldTimeout = setTimeout(() => {
                            const input: any =
                                targetElement.nextSibling?.firstChild
                                    ?.childNodes[1];
                            if (input) {
                                input.focus();
                            }
                        }, 5000);
                    }, 1000);
                }, 2000);
            }
        };

        handleAnimation();

        return () => {
            if (focusTimeout) {
                clearTimeout(focusTimeout);
            }
            if (changeCursorTimeout) {
                clearTimeout(changeCursorTimeout);
            }
            if (hideCursorTimeout) {
                clearTimeout(hideCursorTimeout);
            }
            if (fillInputTimeout) {
                clearTimeout(fillInputTimeout);
            }
            if (focusNextFieldTimeout) {
                clearTimeout(focusNextFieldTimeout);
            }
        };
    }, [targetRef]);

    return (
        <span
            className={`icon-mouse-pointer ${styles.cursor}`}
            ref={cursorRef}
        />
    );
};

export default Cursor;
