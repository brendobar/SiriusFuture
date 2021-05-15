import React from 'react';
import styles from '../styles/Speed.module.css';

export default function Speed() {
    const [value, setValue] = React.useState(5);
    
    React.useEffect(() => localStorage.setItem('speed', value))
    

    return (
        <>
            <span>Скорость
                <input 
                    type='text' 
                    className={styles.speedInput}
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value)
                        localStorage.setItem('speed', e.target.value)
                    }}
                /> сек.
            </span>

            <div className={styles.speed}>
              <button 
                id='minus' 
                onClick={() => {
                    setValue(value-0.5)
                    localStorage.setItem('speed', value)
                    }}
                    >-</button>

              <button 
                id='plus'
                onClick={() => {
                    setValue(value+0.5)
                    localStorage.setItem('speed', value)
                    }}>+</button>
            </div>
        </>
    );
}