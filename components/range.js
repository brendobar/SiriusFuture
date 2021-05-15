import React,{Component} from 'react';
import styles from '../styles/Range.module.css';



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
    }

    componentDidMount() {
        localStorage.setItem(this.props.name, this.state.value)
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