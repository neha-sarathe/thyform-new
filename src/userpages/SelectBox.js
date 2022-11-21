import React,{useState} from 'react';
import Select from 'react-select';

const colourStyles = {
    menuList: styles => ({
        ...styles,
        // background: 'papayawhip',
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
    }),
    control: (base, state) => ({
        ...base,
        border: state.isFocused && '2px solid black',
        // This line disable the blue border
        boxShadow: state.isFocused && 0,
        '&:hover': {
           border: state.isFocused && '2px solid black'
        }
    })
    }
    
// const options = [
//     { value: 'Yes', label: 'Yes' },
//     { value: 'No', label: 'No' },
//   ];
  
const SelectBox = ({handleorganisation,website,options,isDisabled,input1,darkmodes,setDarkmodes})=>{
    const [selectedOption, setSelectedOption] = useState(null);
    console.log(isDisabled,'isDisabledisDisabledisDisabledisDisabled')
    return(
        <>
             <Select
   // defaultValue={[colourOptions[2], colourOptions[3]]}
      name="colors"
      ref={input1}
      isDisabled={!isDisabled  ? true : false}
      defaultValue={website}
        onChange={(event)=>{handleorganisation(event.value)}}
        options={options}
        className={"basic-multi-select  "+(darkmodes ? "select_dark" : "text-dark body-light")}

      classNamePrefix="select"
      styles={colourStyles}
   />
        </>
    )
}

export default SelectBox;