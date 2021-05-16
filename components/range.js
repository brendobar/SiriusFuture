import React,{Component} from 'react';
import styles from '../styles/Range.module.css';

// стилизация ползунков (в firefox можно обйтись -ms-fill-lower и -ms-fill-upper)
function rangeColor(elem, min, max, value) {
    elem.style.background = 'linear-gradient(to right,#FDD207 0%, #FDD207 ' + (value-min)/(max-min)*100 + '%, #fff ' + (value-min)/(max-min)*100 + '%, #fff 100%)'
    }

export default class Range extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: this.props.value,
      };
    }

    handleOnChange = (event) => {
        this.setState({value: event.target.value})
        localStorage.setItem(this.props.name, event.target.value)
        rangeColor(event.target, this.props.min, this.props.max, event.target.value)
    }

    componentDidMount() {
        localStorage.setItem(this.props.name, this.state.value)
        rangeColor(document.getElementById(this.props.name), this.props.min, this.props.max, this.state.value)
    }


    


    render() {
        const numbers = [];
        for(let i=this.props.min; i<=this.props.max; i=i+this.props.step)numbers.push(i);
        
        
        return (
            <>
                <p>{this.props.label}</p>
                <div className={styles.labelRange}>
                    <ul>
                    {numbers.map(item =>
                        <li >{item}</li>
                    )}    
                    </ul>
                </div>


                <input 
                    className={styles.range} 
                    id={this.props.name}
                    type="range" 
                    min={this.props.min} 
                    max={this.props.max} 
                    step={this.props.step} 
                    value={this.state.value} 
                    onChange={this.handleOnChange}
                />
            </>
        );
    }
  }