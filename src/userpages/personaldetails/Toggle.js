// import React, { Component } from 'react';
// import { render } from 'react-dom';
import React,{useState} from 'react';
import { Switch, SwitchLabel, SwitchRadio, SwitchSelection } from './SwitchBtn';

{/*
const titleCase = str =>
  str.split(/\s+/).map(w => w[0].toUpperCase() + w.slice(1)).join(' ');

const ClickableLabel = ({ title, onChange, id }) =>
  <SwitchLabel onClick={() => onChange(title)} className={id}>
    {titleCase(title)}
  </SwitchLabel>;

const ConcealedRadio = ({ value, selected }) =>
  <SwitchRadio type="radio" name="switch" checked={selected === value} />;

class ToggleSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: this.props.selected };
    }
  handleChange = val => {
    this.setState({ selected: val });
  };

  selectionStyle = () => {
    return {
      left: `${this.props.values.indexOf(this.state.selected) / 3 * 100}%`,
    };
  };

  render() {
    const { selected } = this.state;
    // console.log(selected, "toggle switch value on toggle.js page")
        return (
        <Switch>
        {this.props.values.map(val => {
          return (
            <span>
              <ConcealedRadio value={val} selected={selected} />
              <ClickableLabel title={val} onChange={this.handleChange} />
            </span>
          );
        })}
        <SwitchSelection style={this.selectionStyle()} />
      </Switch>
    );
  }
}

export default ToggleSwitch;
*/}

const ToggleSwitch = (props) => {
  // const [toggle,setToggle] =useState('');
  const [navigates, setNavigates] = useState(0);
  const [toggling, setToggling] = useState(props?.toggle );

  const handleChange = (val) => {
    props.setToggle(val);
    props.setPriceSelect(val)
    setNavigates(1);
  }
  const titleCase = str =>
    str.split(/\s+/).map(w => w[0].toUpperCase() + w.slice(1)).join(' ');

  const ClickableLabel = ({ title, onChange, id }) =>
    <SwitchLabel onClick={() => onChange(title)} className={id}>
      {titleCase(title)}
    </SwitchLabel>;

  const ConcealedRadio = ({ value, selected }) =>
    <SwitchRadio type="radio" name="switch" checked={selected === value} />;


  const selectionStyle = () => {
    return {
      left: `${props.values.indexOf(props.toggle) / 3 * 100}%`,
    };
  };
  console.log("toggleeeee", props.toggle);
  return (
    <>
      <Switch>
        {props.values.map(val => {
          return (
            <span>
              <ConcealedRadio value={val} onSelect={props.toggle} />
              <ClickableLabel title={val} onChange={handleChange} />
            </span>
          );
        })}
        <SwitchSelection style={selectionStyle()} />
      </Switch>
    </>
  )
}


export default ToggleSwitch;