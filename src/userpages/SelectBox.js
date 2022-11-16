import React,{useState} from 'react';
import Select from 'react-select';

const colourStyles = {
    menuList: styles => ({
        ...styles,
        background: 'papayawhip',
        border: styles.isFocused ? "1px solid #ff8b67" : "1px solid #cccccc",
    }),
 
    option: (styles, {isFocused, isSelected}) => ({
        ...styles,
        
        background: isFocused
            ? '#DC143C'
            : isSelected
                ? '#DC143C'
                : undefined,
                color: isFocused
                ? '#ffffff'
                : isSelected
                    ? '#ffffff'
                    : undefined,
        zIndex: 1
    }),
    menu: base => ({
        ...base,
        zIndex: 100
    })
    }
    
const options = [
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' },
  ];
  
const SelectBox = ({defaultValue,handleorganisation})=>{
    const [selectedOption, setSelectedOption] = useState(null);
    return(
        <>
             <Select
   // defaultValue={[colourOptions[2], colourOptions[3]]}
      name="colors"
      defaultValue={selectedOption}
        onChange={(event)=>{setSelectedOption(event); handleorganisation(event.target.value)}}
        options={options}
      className="basic-multi-select"
      classNamePrefix="select"
      styles={colourStyles}
   />
        </>
    )
}

export default SelectBox;