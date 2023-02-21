import { currencies } from "data/currencies";

export const getCurrencySign = (currency: string) => {
    const { euro } = currencies
    switch(currency) {
        case euro.shortcut:
            return euro.sign;
    }
}