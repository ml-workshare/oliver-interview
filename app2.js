let React = require('react');

const ButtonRenderer = props => {
  const className = props.className;
  const symbol = props.symbol;
  return (
    <button onClick={props.onClick} className={className}>{symbol}</button>
  );
}
const IncrAllButton = props => (
  <button onClick={props.onClick} className='incrButtonAll'>+1 to all</button>
);

const CounterGroupRenderer = props => {
  const value = props.value;
  const containerClass = props.containerClass;
  const valueClass = props.valueClass;
  const incrClass = props.incrClass;
  const decrClass = props.decrClass;
  return (
    <div className={containerClass}>
          <div className={valueClass}>{value}</div>
          <ButtonRenderer 
            onClick={props.onClickIncr}  
            className={incrClass} 
            symbol='+' 
          />
          <ButtonRenderer 
            onClick={props.onClickDecr}
            className={decrClass} 
            symbol='-' 
          />
    </div>
  ); 
};


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      valueZero: 0,
      valueOne: 0,
      valueTwo: 0
    }
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleAllButtonClick = this.handleAllButtonClick.bind(this);
  }
  handleButtonClick(symbol, counter) {
    let action;
    symbol === '+' ? action = 'increase' : action = 'decrease';
    
    this.setState((prevState, currentProps) => {
      let value;
      let stateValue;
      if (counter === '0') {
        value = prevState.valueZero;
        stateValue = 'valueZero';  
      } else if (counter === '1') {
        value = prevState.valueOne;
        stateValue = 'valueOne';
      } else {
        value = prevState.valueTwo;
        stateValue = 'valueTwo';
      }
     
      let updatedValue; 
      if (action === 'increase') {
        updatedValue = value += 1;
      } else {
        updatedValue = value -= 1;
      }
    
      return { ...prevState, [stateValue]: updatedValue }
    });
  }
  handleAllButtonClick() {
    this.setState((prevState, currentProps) => {
      let valueZeroPrevious = prevState.valueZero;
      let valueOnePrevious = prevState.valueOne;
      let valueTwoPrevious = prevState.valueTwo;
      
      const valueZero = valueZeroPrevious += 1;
      const valueOne = valueOnePrevious += 1;
      const valueTwo = valueTwoPrevious += 1;
      return {
        ...prevState,
        valueZero,
        valueOne,
        valueTwo,
      }
    });  
  }
  
  render() {
    const valueZero = this.state.valueZero;
    const valueOne = this.state.valueOne;
    const valueTwo = this.state.valueTwo;
      
    const incrButtonClassZero = 'incrButtonZero';
    const decrButtonClassZero = 'decrButtonZero';
    const incrButtonClassOne = 'incrButtonOne';
    const decrButtonClassOne = 'decrButtonOne';
    const incrButtonClassTwo = 'incrButtonTwo';
    const decrButtonClassTwo = 'decrButtonTwo';
    
    return (
      <div id="app">
        <CounterGroupRenderer 
          containerClass='counterZero'
          valueClass='valueZero'
          incrClass={incrButtonClassZero}
          decrClass={decrButtonClassZero}
          value={valueZero} 
          onClickIncr={() => this.handleButtonClick('+', '0')}
          onClickDecr={() => this.handleButtonClick('-', '0')}
        />
         <CounterGroupRenderer 
          containerClass='counterOne'
          valueClass='valueOne'
          incrClass={incrButtonClassOne}
          decrClass={decrButtonClassOne}
          value={valueOne} 
          onClickIncr={() => this.handleButtonClick('+', '1')}
          onClickDecr={() => this.handleButtonClick('-', '1')}
        />
        <CounterGroupRenderer 
          containerClass='counterTwo'
          valueClass='valueTwo'
          incrClass={incrButtonClassTwo}
          decrClass={decrButtonClassTwo}
          value={valueTwo} 
          onClickIncr={() => this.handleButtonClick('+', '2')}
          onClickDecr={() => this.handleButtonClick('-', '2')}
        />
        <IncrAllButton onClick={this.handleAllButtonClick} />    
      </div>
    )
  }
}