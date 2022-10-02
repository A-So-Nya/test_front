import * as React from 'react';
import { TextField } from '../TextField';
import { useDebouncedCallback } from 'use-debounce';
import styles from './InputWithSlider.module.scss';
import cx from 'classnames';

export type InputWithSliderProps = {
    label: string;
    max: number;
    min: number;
    value: number;
    setValue: React.Dispatch<React.SetStateAction<number>>;
    isLoading: boolean;
    inputText: string;
    inverted?: boolean;
    price?: number;
    className?: string;
    disabled?: boolean;
};

export const InputWithSlider = ({
    label,
    max,
    min,
    value,
    setValue,
    isLoading,
    inputText,
    inverted = false,
    price,
    className,
    disabled,
}: InputWithSliderProps) => {
    const debounce = useDebouncedCallback((newValue: number) => {
        if (newValue < min) {
            setValue(min);
        } else if (newValue > max) {
            setValue(max);
        } else {
            setValue(newValue);
        }
    }, 1000);
    return (
        <div
            className={cx(
                styles.container,
                className,
                disabled && styles.disabled,
            )}
        >
            <TextField
                className={styles.title}
                type='normal-400-14-19'
                color='greyBlue'
            >
                {label}
            </TextField>
            <div className={styles.inputWithSlider}>
                <div className={styles.inputWithText}>
                    {!inverted ? (
                        <>
                            <input
                                value={value.toLocaleString('ru-RU')}
                                onChange={(e) => {
                                    if (
                                        !Number.isNaN(
                                            +e.target.value.replace(/\s/g, ''),
                                        )
                                    ) {
                                        setValue(
                                            +e.target.value.replace(/\s/g, ''),
                                        );
                                        debounce(
                                            +e.target.value.replace(/\s/g, ''),
                                        );
                                    }
                                }}
                                disabled={disabled}
                                className={styles.input}
                            />
                            <TextField
                                className={styles.text}
                                type='normal-900-22-20'
                                color='greyBlue'
                            >
                                {inputText}
                            </TextField>
                        </>
                    ) : (
                        <div className={styles.invertedInputContainer}>
                            <TextField
                                className={styles.invertedText}
                                type='normal-900-22-20'
                                color='greyBlue'
                            >{`${Math.round(
                                ((value > max
                                    ? max
                                    : value < min
                                    ? min
                                    : value) /
                                    100) *
                                    price!,
                            ).toLocaleString('ru-RU')} ₽`}</TextField>
                            <input
                                value={`${value}%`}
                                onChange={(e) => {
                                    if (
                                        `${Number.parseInt(
                                            e.target.value,
                                        )}%` === e.target.value
                                    ) {
                                        setValue(
                                            Number.parseInt(e.target.value),
                                        );
                                        debounce(
                                            Number.parseInt(e.target.value),
                                        );
                                    }
                                }}
                                disabled={disabled}
                                className={styles.invertedInput}
                            />
                        </div>
                    )}
                </div>
                <input
                    style={{
                        background: `linear-gradient(to right, #FF9514 0%, #FF9514 ${
                            ((value - min) / (max - min)) * 100
                        }%, #E1E1E1 ${
                            ((value - min) / (max - min)) * 100
                        }%, #E1E1E1 100%)`,
                    }}
                    disabled={disabled}
                    className={styles.slider}
                    max={max}
                    min={min}
                    value={value}
                    onChange={(e) => {
                        console.log(e.target.value);
                        setValue(+e.target.value);
                    }}
                    type='range'
                />
            </div>
        </div>
    );
};
