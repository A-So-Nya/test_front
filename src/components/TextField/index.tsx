import * as React from 'react';
import cx from 'classnames';
import styles from './TextField.module.scss';

export type TextColorsType =
    | 'white'
    | 'black'
    | 'grey'
    | 'darkGrey'
    | 'greyBlue';
export type TextType =
    | 'normal-900-34-31'
    | 'normal-900-22-20'
    | 'normal-400-16-20'
    | 'normal-400-14-19';

export type TextProps = {
    type?: TextType;
    children: React.ReactNode;
    className?: string;
    align?: 'left' | 'center' | 'right';
    color?: TextColorsType;
};

export const TextField = ({
    children,
    type,
    className,
    align,
    color,
}: TextProps) => (
    <span
        className={cx(
            styles.text,
            {
                [styles[`text--type--${type || ''}`]]: type,
                [styles[`text--align--${align || ''}`]]: align,
                [styles[`text--color--${color || ''}`]]: color,
            },
            className,
        )}
    >
        {children}
    </span>
);
