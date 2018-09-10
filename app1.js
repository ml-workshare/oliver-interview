let React = require('react');

const ButtonRenderer = props => {
  const className = props.className;
  const symbol = props.symbol;
  return (
    <button onClick={props.onClick} className={className}><img src={props.img}>{symbol}</img></button>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0
    }
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  handleButtonClick(symbol) {
    let action;
    symbol === '+' ? action = 'increase' : action = 'decrease';
    
    this.setState((prevState, currentProps) => {
      let value = prevState.value;
     
      let updatedValue; 
      if (action === 'increase') {
        updatedValue = value += 1;
      } else {
        updatedValue = value -= 1;
      }
      return { ...prevState, value: updatedValue }
    });
  }
  
  render() {
    const value = this.state.value;
    return (
      <div id="app">
        <div className="counter">
          <div className="value">{value}</div>
          <ButtonRenderer 
            onClick={}  
            className='incrButton' 
            symbol='+' 
          />
          <ButtonRenderer 
            onClick={}
            className='decrButton' 
            symbol='-' 
          />
        </div>
      </div>
    )
  }
}