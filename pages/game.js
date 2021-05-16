import React from 'react'
import Head from 'next/head'
import styles from '../styles/Game.module.css'
import Router from 'next/router'


// отбор слов из списка по выбранному количеству букв
function deleteElemsMoreThen (arr, lenght) {                       
    for (let i = arr.length - 1; i >= 0; i--) {
        if(arr[i].toString().length>=lenght) {
            arr.splice(i,1)
        }
    }
    return arr;
}


export default class Game extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          word_first_part: '',
          word_second_part: '',
          shouldRedirect: false
        };
      }
    
    componentDidMount() {

        const words = ['Человек','год','время','дело','жизнь','день','рука','раз','работа','слово','место','лицо','друг','глаз','вопрос','дом','сторона','страна','мир','случай','голова','ребенок','сила','конец','вид','система','часть','город','отношение','женщина','деньги','земля','машина','вода','отец','проблема','час','право','нога','решение','дверь','образ','история','власть','закон','война','бог','голос','тысяча','книга','возможность','результат','ночь','стол','имя','область','статья','число','компания','народ','жена','группа','развитие','процесс','суд','условие','средство','начало','свет','пора','путь','душа','уровень','форма','связь','минута','улица','вечер','качество','мысль','дорога','мать','действие','месяц','государство','язык','любовь','взгляд','мама','век','школа','цель','общество','деятельнось','организация','президент','комната']
        let gameArray = []


        // значения ползунков
        let count_word = parseInt(localStorage.getItem('count_word'));
        let distance = parseInt(localStorage.getItem('distance'))
        let count_letters = parseInt(localStorage.getItem('count_letters'))
        let inc_distance = parseInt(localStorage.getItem('inc_distance'))
        let speed = parseInt(localStorage.getItem('speed'))


        var showWord = (arr) => {
            document.getElementById('space_s').innerHTML=new Array(Math.floor(distance/2)).join('&nbsp;');
            document.getElementById('space_e').innerHTML=new Array(Math.floor(distance/2)).join('&nbsp;');
            distance+=inc_distance/2
            
            let id_current_word = Math.floor(Math.random()*arr.length);
            let current_word = arr[id_current_word];
            if(current_word==undefined) {
                debugger
                Router.push('/end')
            }else{
                this.setState({
                    word_first_part: current_word.slice(0,current_word.toString().length/2),
                    word_second_part: current_word.slice(current_word.toString().length/2)
                });
                arr.splice(id_current_word,1)                
            }
        }

        
        deleteElemsMoreThen(words, count_letters);
        for( let i=0; i<count_word;i++){
            gameArray.push(words[Math.floor(Math.random()*words.length)])                     // выборка рандомных слов по выбранному количеству слов из отфильтрованого списка  
        }

        showWord(gameArray)
        let timerId = setInterval(() => showWord(gameArray), speed*1000);
        setTimeout(() => { clearInterval(timerId);  }, count_word*speed*1000);
    }

    render() {
    return(
        <>
        <Head>
            <title>Sirius Future</title>
            <link rel="icon" href="/Sirius_Future_Logo.png" />
        </Head>
        <header className={styles.header}>
            <img src='/Sirius_Future_Full_Logo.png' className={styles.fullLogo}></img>
        </header>
        <main>
            <p className={styles.word}>
                {this.state.word_first_part}<span id='space_s'></span>
                 ~ 
                <span id='space_e'></span>{this.state.word_second_part}
            </p>
        </main>
        </>
    );
    }
  }