import { useState } from 'react';

export const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        const storedData = localStorage.getItem(key);

        return storedData ? storedData : defaultValue;
    });

    const setLocalStorageValue = (newValue) => {
        localStorage.setItem(key, newValue);

        setValue(newValue);
    };

    return [
        value,
        setLocalStorageValue,
    ];
}
