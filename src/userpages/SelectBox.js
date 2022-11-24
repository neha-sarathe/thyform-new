import React, { useState } from 'react';
import Select from 'react-select';



// const options = [
//     { value: 'Yes', label: 'Yes' },
//     { value: 'No', label: 'No' },
//   ];

const SelectBox = ({ handleorganisation, website, options, isDisabled, input1, darkmodes, setDarkmodes }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    console.log(isDisabled, 'isDisabledisDisabledisDisabledisDisabled')

    const colourStyles = {
        menuList: styles => ({
            ...styles,
            background: darkmodes ? '#343a40' : "white",
            color: darkmodes ? '#ffffff' : "#000000",
            border: styles.isFocused ? "1px solid #ff8b67" : "1px solid #cccccc",
        }),
        singleValue: styles => ({ ...styles, color: darkmodes ? 'white' : "black" }),
        option: (styles, { isFocused, isSelected }) => ({
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
            color: state.isSelected ? "red" : "blue",
            backgroundColor: darkmodes ? '#343a40' : "white",
            // background: darkmodes ?  "#000000" : '#ffffff',
            // color: "black",
            color: darkmodes ? '#ffffff' : "#000000",
            border: state.isFocused && '2px solid black',
            // This line disable the blue border
            boxShadow: state.isFocused && 0,
            '&:hover': {
                border: state.isFocused && '2px solid black'
            }
        })

    }
    return (
        <>
            <Select
                // defaultValue={[colourOptions[2], colourOptions[3]]}
                name="colors"
                ref={input1}
                isDisabled={!isDisabled ? true : false}
                defaultValue={website}
                onChange={(event) => { handleorganisation(event.value) }}
                options={options}
                className={"basic-multi-select  " + (darkmodes ? "select_dark_new " : "text-dark body-light")}

                classNamePrefix="select"
                styles={colourStyles}
            />
        </>
    )
}

export default SelectBox;