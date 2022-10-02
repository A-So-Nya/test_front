import React, { useState } from 'react';
import { RootState, store } from './store/store';
import { TextField } from './components/TextField';
import styles from './styles.module.scss';
import { createRoot, Root } from 'react-dom/client';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { InputWithSlider } from './components/InputWIthSlider';
import { postData } from './store/dataReducer';
import { Button } from './components/Button';
import './index.css';

interface AppProps {}

type AppDispatch = typeof store.dispatch;

const App: React.FC<AppProps> = () => {
    const [price, setPrice] = useState(1000000);
    const [percent, setPercent] = useState(10);
    const [length, setLength] = useState(1);
    const useAppDispatch = () => useDispatch<AppDispatch>();
    const dispatch = useAppDispatch();
    const data = useSelector((state: RootState) => state.data);
    console.log(data.isLoading);
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <TextField>Рассчитайте стоимость автомобиля в лизинг</TextField>
            </div>
            <div className={styles.inputs}>
                <InputWithSlider
                    label='Стоимость автомобиля'
                    min={1000000}
                    max={6000000}
                    value={price}
                    setValue={setPrice}
                    isLoading={false}
                    inputText='₽'
                    className={styles.inputBlock}
                    disabled={data.isLoading}
                />
                <InputWithSlider
                    label='Первоначальный взнос'
                    min={10}
                    max={60}
                    value={percent}
                    setValue={setPercent}
                    isLoading={false}
                    inputText='%'
                    inverted={true}
                    price={price}
                    className={styles.inputBlock}
                    disabled={data.isLoading}
                />
                <InputWithSlider
                    label='Срок лизинга'
                    min={1}
                    max={60}
                    value={length}
                    setValue={setLength}
                    isLoading={false}
                    inputText='мес.'
                    className={styles.inputBlock}
                    disabled={data.isLoading}
                />
            </div>
            <div className={styles.outputsAndControl}>
                <div className={styles.outputs}>
                    <div className={styles.column}>
                        <TextField
                            type='normal-400-14-19'
                            className={styles.titleColumn}
                        >
                            Сумма договора лизинга
                        </TextField>
                        <TextField
                            type='normal-900-22-20'
                            className={styles.column_text}
                        >
                            {`${Math.round(
                                (percent / 100) * price +
                                    length *
                                        ((price - (percent / 100) * price) *
                                            ((0.035 *
                                                Math.pow(1 + 0.035, length)) /
                                                (Math.pow(1 + 0.035, length) -
                                                    1))),
                            ).toLocaleString('ru-RU')} ₽`}
                        </TextField>
                    </div>
                    <div className={styles.column}>
                        <TextField
                            type='normal-400-14-19'
                            className={styles.titleColumn}
                        >
                            Ежемесячный платеж от
                        </TextField>
                        <TextField
                            type='normal-900-22-20'
                            className={styles.column_text}
                        >
                            {`${Math.round(
                                (price - price * (percent / 100)) *
                                    ((0.035 * Math.pow(1 + 0.035, length)) /
                                        (Math.pow(1 + 0.035, length) - 1)),
                            ).toLocaleString('ru-RU')} ₽`}
                        </TextField>
                    </div>
                </div>
                <div>
                    <Button
                        className={styles.button}
                        isLoading={data.isLoading}
                        onClick={() => {
                            // eslint-disable-next-line @typescript-eslint/no-floating-promises
                            dispatch(
                                postData({
                                    price,
                                    firstContribution: percent,
                                    term: length,
                                }),
                            );
                        }}
                        disabled={data.isLoading}
                    >
                        <TextField color='white'>Оставить заявку</TextField>
                    </Button>
                </div>
            </div>
        </div>
    );
};

const root: Root = createRoot(document.querySelector('#root')!);
root.render(
    <Provider store={store}>
        <App />
    </Provider>,
);
