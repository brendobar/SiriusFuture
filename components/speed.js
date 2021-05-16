import React from 'react';
import styles from '../styles/Speed.module.css';

function disableButton(minus, plus , value) {
    if(value>=5){
        plus.disabled = true
        plus.style.opacity = '.5'
    }else if(value<=1){
        minus.disabled = true
        minus.style.opacity = '.5'
    }else{
        minus.disabled = false
        plus.disabled = false
        minus.style.opacity = '1'
        plus.style.opacity = '1'

    }
}


export default function Speed() {
    const [value, setValue] = React.useState(3);
    
    React.useEffect(() => {
        localStorage.setItem('speed', value)

        let minus = document.getElementById('minus')
        let plus = document.getElementById('plus')

        disableButton(minus, plus, value)
      }, [value]);


    
    return (
        <>
            <span>Скорость
                <input 
                    type='text' 
                    className={styles.speedInput}
                    value={value}
                    onChange={(e) => {
                        alert('ok')
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