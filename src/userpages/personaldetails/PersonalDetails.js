import React, { useState, useEffect ,useRef} from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiChevronRight, FiCheck } from 'react-icons/fi'
import Dark from "../../DarkAuth";
import Select from 'react-select';
import DatePicker from "react-datepicker";
import moment from 'moment';
import { getMonth, getYear } from 'date-fns';
import range from "lodash/range";
import SelectBox from "../SelectBox";
import countryListAllIsoData from "../CountryList";

const PersonalDetails = (props) => {
    const ref = useRef();
    const navigate = useNavigate();
    const [numberchecked, setNumberChecked] = React.useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [txt, setTxt] = useState('');
    const [selectedData, setSelectedData] = useState('')
    const [error, setError] = useState(false);
    const [businessError, setBusinessError] = useState(false);
    const [address, setAddress] = useState('');
    const [websiteError, setWebsiteError] = useState(false);
    const [website, setWebsite] = useState(false);
    const [maxValue, setMaxValue] = useState('');
    const [checked, setChecked] = useState(false);
    const [checkError, setCheckError] = useState(false);
    const [otherPostcodeError, setOtherPostcodeError] = useState(false);
    const [postCode, setpostCode] = useState('');
    const [show, setShow] = useState(false);
    const [houseno, setHouseNo] = useState('');
    const [surname, setSurname] = useState('');
    const [SurnameError, setSurnameError] = useState(false);
    const [dateofBirth, setDateofBirth] = useState('');
    const [dateofBirthError, setDateofBirthError] = useState(false);
    const [nationality, setNationality] = useState('');
    const [nationalityError, setNationalityError] = useState(false);
    const [PhoneNumber, setPhoneNumber] = useState(0);
    const [PhoneNumberError, setPhoneNumberError] = useState(false);
    const [mobileNumber, setMobileNumber] = useState('07');
    const [mobileNumberError, setMobileNumberError] = useState(false);
    const [emailAddress, setEmailAddress] = useState('');
    const [emailAddressError, setEmailAddressError] = useState(false);
    const [confirmEmailError, setConfirmEmailError] = useState(false);
    const [checkedConfirm, setCheckedConfirm] = useState(false);
    const [checkedConfirmError, setCheckedConfirmError] = useState(false);
    const [BuildingName, setBuildingName] = useState('');
    const [townName, setTownName] = useState('');
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [birthday, setBirthday] = useState({ birthday: '' });
    const [confirmValue, setConfirmValue] = useState('')
    const [confirmValueError, setConfirmValueError] = useState('')
    const [show2, setShow2] = useState(false);
    const [addressSelect, setAddressSelect] = useState('')
    const [findError, setFindError] = useState(false);
 const awayMessageText = "07"
    const select_data = [
        {label: 'america', value: 'Example 1' },
        {label: 'unitedkingdom', value: 'Example 2' },
        {label: 'india', value: 'Example 3' },
        {label: 'germany', value: 'Example 4' },
        {label: 'argentina', value: 'Example 5' }
    ]
    const numberhandleChange = () => {
        setNumberChecked(!numberchecked);
       
      }
      console.log('numberchecked',numberchecked)
    const day_data = [
        { key: '1', value: '11' },
        { key: '2', value: '12' },
        { key: '3', value: '13' },
        { key: '4', value: '14' },
        { key: '5', value: '55' }
    ]
    const month_data = [
        { key: '1', value: 'jan' },
        { key: '2', value: 'feb' },
        { key: '3', value: 'march' },
        { key: '4', value: 'april' },
        { key: '5', value: 'may' }
    ]
    const year_data = [
        { key: '1', value: '1998' },
        { key: '2', value: '1667' },
        { key: '3', value: '2010' },
        { key: '4', value: '2003' },
        { key: '5', value: '2055' }
    ]
    const options = [
        { value: 'French', label: 'French' },
        { value: 'French', label: 'French' },
        { value: 'English', label: 'English' },
    ];

    useEffect(() => {

        function enableDragSort(listClass) {
            const sortableLists = document.getElementsByClassName(listClass);
            Array.prototype.map.call(sortableLists, (list) => { enableDragList(list) });
        }

        function enableDragList(list) {
            Array.prototype.map.call(list.children, (item) => { enableDragItem(item) });
        }

        function enableDragItem(item) {
            item.setAttribute('draggable', true)
            item.ondrag = handleDrag;
            item.ondragend = handleDrop;
        }

        function handleDrag(item) {
            const selectedItem = item.target,
                list = selectedItem.parentNode,
                x = window.event.clientX,
                y = window.event.clientY;

            selectedItem.classList.add('drag-sort-active');
            let swapItem = document.elementFromPoint(x, y) === null ? selectedItem : document.elementFromPoint(x, y);

            if (list === swapItem.parentNode) {
                swapItem = swapItem !== selectedItem.nextSibling ? swapItem : swapItem.nextSibling;
                list.insertBefore(selectedItem, swapItem);
            }
        }

        function handleDrop(item) {
            item.target.classList.remove('drag-sort-active');
        }

        (() => { enableDragSort('drag-sort-enable') })();
    }, [])
    /*validations */
    const onInputChange = e => {
        const { value } = e.target;
        const re = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
        if (value === "" || re.test(value)) {
            setMaxValue(value)

            setError(false)
        }
    }
    const onSurname = e => {
        const { value } = e.target;
        const re = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
        if (value === "" || re.test(value)) {
            setSurname(value)
            setSurnameError(false)
        }
    }
    const onDateofBirth = e => {
        const { value } = e.target;
        setDateofBirth(value)
        setDateofBirthError(false)
    }
    const onNationality = value => {
        // const { value } = e.target;
        console.log('value...........', value);
        setNationality(value)
        setNationalityError(false)
    }


    const handleSelect = (value) => {
        console.log('value......', value);
        setSelectedData(value)
        setBusinessError(false)
    }
    const handleAddressSelect = (value) => {
        setAddressSelect(value)
        // setAddSelectError(false)
      }
    const nextPage = () => {
        let pattern = /^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/i;
        if (selectedData === '') {
            setBusinessError('Please select your title')
        } else if (maxValue === '') {
            setError('Please enter your first name')
        } else if (surname === '') {
            setSurnameError('Please enter your surname')
        } else if (birthday.birthday === '') {
            setDateofBirthError('Please select your date of birth')
        } else if (nationality === '') {
            setNationalityError('Please select an nationality from the dropdown')
        } else if (postCode === '') {
            setOtherPostcodeError('Please enter your postcode, press Find address and select your address from the options')
        } else if (PhoneNumber === 0) {
            setPhoneNumberError('Please enter your work phone number')
        } else if (mobileNumber === '07') {
            setMobileNumberError('Please enter a valid UK mobile number starting with 07')
        } else if (emailAddress === '') {
            setEmailAddressError('Please enter a valid email address')
        } else if (!pattern.test(emailAddress)) {
            setEmailAddressError("Email is Invalid")
        } else if (!pattern.test(confirmValue)) {
            setConfirmEmailError("Email is Invalid")
        } else if (confirmValue === '') {
            setConfirmEmailError('Please confirm your email address')
        } else if (!confirmValue == emailAddress) {
            setConfirmEmailError('Email does not match')
        } else if (checked === false) {
            setCheckError('Please read the Terms & Conditions and check the box to show you agree to them')
        } else if (checkedConfirm === false) {
            setCheckedConfirmError('Please acknowledge the cover of the Financial Services Compensation Scheme')
        }
        // else if (houseno === '') {
        //     setHouseError('Please enter your House number')
        // }
        else {
            navigate('/userform')
        }
    }

    const handleorganisation = (value) => {
        setWebsite(value)
        setWebsiteError(true)
    }
    const [message, setMessage] = useState('www');
    const [websiteUrl, setWebsiteUrl] = useState(false);

    const handleChange = e => {
        setMessage(e.target.value);
        var res = message.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
        console.log('res', res);
        if (res == null) {
            setWebsiteUrl('Please enter a valid website address')
        }
        else {
            setWebsiteUrl(true)
        }


    };

    const handleCheckbox = () => {
        setChecked(!checked)
        setCheckError(false)
    }
    const onCheckbox = () => {
        setCheckedConfirm(!checkedConfirm)
        setCheckedConfirmError(false)
    }


    const onPostcode = e => {
        const { value } = e.target;
        const re =/^[0-9a-zA-Z-,]+(\s{0,1}[0-9a-zA-Z-, ])*$/;
        if (value === "" || re.test(value)) {
            setpostCode(value)
        }
        setOtherPostcodeError(false)
    }

    const onPhoneNumber = e => {
        const { value } = e.target;
        const re = /^[0-9\b]+$/;
        if (value === '' || value.length <= 11 && re.test(value)) {
            setPhoneNumber(value)

        }
        setPhoneNumberError(false)
    }
    const onMobileNumber = e => {
        const { value } = e.target;
        const re = /^[0-9\b]+$/;
        if (value.length < 2) {
            // value = '07';
            if(numberchecked){
                setMobileNumber(PhoneNumber)
            }else{
                setMobileNumber('07')
            }
        
          }else if (value.length <= 11 && re.test(value)) {
            if(numberchecked){
                setMobileNumber(PhoneNumber)
            }else{
                setMobileNumber(value)
            }
           
        }
        setMobileNumberError(false)
    }
    const onEmailAddress = e => {
        const { value } = e.target;
        setEmailAddress(value)
        setEmailAddressError(false)
    }

    const onConfirmEmail = e => {
        if (e.target.value != emailAddress) {
            setConfirmValueError('not match')
        }
        // else if (e.target.value === emailAddress) {
        //     setConfirmValue(e.target.value)
        //     setConfirmValueError('')
        // } 
        else {
            setConfirmValue(e.target.value)
            setConfirmValueError('')
        }
        setConfirmEmailError(false)
        // const { value } = e.target;

        // setConfirmEmail(value)
        // if (emailAddress != confirmEmail) {

        //     setConfirmEmailError('not match')
        // }else{
        //     setConfirmValue(confirmEmail)
        //     setConfirmEmailError(false)
        // }
        // setConfirmEmailError(false)
    }
    const onHouseNo = e => {
        const { value } = e.target;


        const re = /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/;
        if (value === "" || re.test(value)) {
            setHouseNo(value);
            // setHouseError(false);
        }
    }
    const onBuildingName = e => {
        const { value } = e.target;
        const re = /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/;
        if (value === "" || re.test(value)) {
            setBuildingName(value);

        }
    }

    const onAddress = e => {
        const { value } = e.target;


        const re = /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/;
        if (value === "" || re.test(value)) {
            setAddress(value);
        }
    }
    const onTownName = e => {
        const { value } = e.target;
        setTownName(value);

        // const re = /^[0-9a-zA-Z]+$/;
        // if (value === "" || re.test(value)) {
        //     TownName(value);
        // }
    }
    const mergeDate = (type, value) => {
        if (type === 'year') { setYear(value) }
        if (type === 'month') { setMonth(value) }
        if (type === 'day') { setDay(value) }

        let newDate = new Date(year.date_year, month.date_mth, day.date_day);
        setBirthday({ birthday: newDate });
        setDateofBirthError(false)
    }

    const customStyles = {
        // menu: (provided, state) => ({
        //   ...provided,
        //   width: state.selectProps.width,
        //   borderBottom: '1px dotted pink',
        //   color: state.selectProps.menuColor,
        //   padding: 20,
        //   display: state.selectProps.flex
        // }),

        control: (_, { selectProps: { width, display, border, borderRadius } }) => ({
            width: width,
            display: display,
            border: border,
            borderRadius: borderRadius
        }),

        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';

            return { ...provided, opacity, transition };
        }
    }

    const handleNationality = (value) => {
        console.log('value', value);
        setNationality(value);
        setNationalityError(false)
    }
    const years = range(1920, getYear(new Date()) + 1, 1);
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const handleFind =()=>{
        if(postCode===" "){
            console.log("errorrrrrrrrrrrrrrr", postCode);
            setFindError("Please enter your postcode, press Find address and select your address from the options")
        }
        else{
        setShow2(true)
        setFindError(false)
         } }
         var fromMax = moment().add(0, 'day')
         var eighteenYearsAgo = moment().subtract("years", 18);
        //  console.log(this.state.playerId, OneSignal, 'jflkdskjfjdsl')
         var valid = function (current) {
 
             return (eighteenYearsAgo.isAfter(current) && fromMax >= current);
         };
    return (
        <>
            <Dark darkmodes={props.darkmodes} setDarkmodes={props.setDarkmodes} />
            <div className="container-scroller">
                <div className="container-fluid page-body-wrapper full-page-wrapper">
                    <div className="content-wrapper d-flex align-items-stretch auth auth-img-bg " >
                        <div className={" row flex-grow form-bg1 drag-sort-enable " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>
                            <div className="col-lg-6  d-flex flex-row">
                                {/* <div className="register-half-bg"></div> */}
                                <div className="register-half-div">
                                    <img src={process.env.PUBLIC_URL + "images/auth/register-bg.png"} className="register-half-img" />
                                </div>
                            </div>

                            <div className="col-lg-6 d-flex align-items-center justify-content-center">
                                <div className="auth-form-transparent text-left p-3">
                                    <div className="brand-logo">
                                        <div>
                                            <a className="navbar-brand brand-logo" href="/">
                                                <img src="../../images/Logo.png" alt="logo" />
                                            </a>

                                        </div>
                                    </div>
                                    <div>
                                        {/* <p className="text-end para_col">
                    You have selected {props.priceSelect} package
                  </p> */}
                                        <h4 className="heading-form dark-mode-text">Tell Us About You</h4>
                                        <div className="selectflex mt-4">
                                            <div className="lable-fix-width">
                                                <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Title*</label>
                                            </div>
                                            <div className="search-input-div div-search-inputs search-input-div1">
                                            <SelectBox handleorganisation={handleSelect} website={selectedData} options={select_data} input1={ref} isDisabled={true}/>
                                                {/* <select onChange={(event) => handleSelect(event.target.value)} className={"search-input " + (props.darkmodes ? "select-box-dark" : "select-box-white")}
                                                    id="exampleFormControlSelect2"
                                                    value={selectedData}
                                                >
                                                    <option value=''>select</option>
                                                    {select_data.map((option, index) => (
                                                        <option key={index} value={option.value}>
                                                            {option.value}
                                                        </option>
                                                    ))}
                                                </select> */}
                                                <p className="para-form show_result">{businessError}</p>
                                            </div>
                                        </div>

                                        <div className="selectflex mt-4">
                                            <div className="lable-fix-width">
                                                <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>First name*</label>
                                            </div>
                                            <div className="search-input-div div-search-inputs search-input-div1">
                                                <input
                                                    type="text"
                                                    placeholder="Enter your first name"
                                                    className={"search-input " + (props.darkmodes ? "text-white" : "text-dark")}
                                                    value={maxValue}
                                                    onChange={onInputChange}
                                                />
                                                <p className="para-form show_result">{error}</p>
                                            </div>
                                            {/* {txt ? <FiCheck className="text-success mt-1 mx-2 display-5" /> : ''} */}

                                        </div>
                                        <div className="selectflex mt-4">
                                            <div className="lable-fix-width">
                                                <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Surname*</label>
                                            </div>
                                            <div className="search-input-div div-search-inputs search-input-div1">
                                                <input
                                                    type="text"
                                                    placeholder="Enter your Surname"
                                                    className={"search-input " + (props.darkmodes ? "text-white" : "text-dark")}
                                                    value={surname}
                                                    onChange={onSurname}
                                                />
                                                <p className="para-form show_result">{SurnameError}</p>
                                            </div>
                                            {txt.length === 5 ? <FiCheck className="text-success mt-1 mx-2 display-5" /> : ''}

                                        </div>
                                        <div className="selectflex mt-4">
                                            <div className="lable-fix-width">
                                                <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Date of birth*</label>
                                            </div>
                                            <div className="search-input-div div-search-inputs search-input-div1 d-flex">
                                                {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} dateFormat="dd/MM/yyyy" className={"date_pick "+ (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")} /> */}
                                                <DatePicker
                                         
                                                 filterDate={valid}
                                                maxDate={moment().subtract(18, "years")}
                                                    renderCustomHeader={({
                                                        date,
                                                        changeYear,
                                                        changeMonth,
                                                        decreaseMonth,
                                                        increaseMonth,
                                                        prevMonthButtonDisabled,
                                                        nextMonthButtonDisabled,
                                                    }) => (
                                                        <div
                                                            style={{
                                                                margin: 10,
                                                                display: "flex",
                                                                justifyContent: "center",
                                                            }}
                                                        >
                                                            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                                                                {"<"}
                                                            </button>
                                                            <select
                                                                value={getYear(date)}
                                                                onChange={({ target: { value } }) => mergeDate(changeYear(value))}
                                                            >
                                                                {years.map((option) => (
                                                                    <option key={option} value={option}>
                                                                        {option}
                                                                    </option>
                                                                ))}
                                                            </select>

                                                            <select
                                                                value={months[getMonth(date)]}
                                                                onChange={({ target: { value } }) =>
                                                                    mergeDate(changeMonth(months.indexOf(value)))
                                                                }
                                                            >
                                                                {months.map((option) => (
                                                                    <option key={option} value={option}>
                                                                        {option}
                                                                    </option>
                                                                ))}
                                                            </select>

                                                            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                                                                {">"}
                                                            </button>
                                                        </div>
                                                    )}
                                                    selected={startDate}
                                                    onChange={(date) => mergeDate(setStartDate(date))}
                                                    className={"date_pick " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}
                                                />
                                                {/* <select className={"search-input " + (props.darkmodes ? "select-box-dark" : "select-box-white")}
                                                    id="exampleFormControlSelect2" onChange={(event) => mergeDate('day', event.target.value)}>
                                                    <option value="">Day</option>
                                                    {day_data.map((option, index) => (
                                                        <option key={index} value={option.value}>
                                                            {option.value}
                                                        </option>
                                                    ))}
                                                </select>
                                                <select
                                                    className={"search-input " + (props.darkmodes ? "select-box-dark mx-2" : "select-box-white mx-2")}
                                                    id="exampleFormControlSelect2"
                                                    onChange={(event) => mergeDate('month', event.target.value)}>
                                                    <option value="">Month</option>
                                                    {month_data.map((option, index) => (
                                                        <option key={index} value={option.value}>
                                                            {option.value}
                                                        </option>
                                                    ))}
                                                </select>
                                                <select
                                                    className={"search-input " + (props.darkmodes ? "select-box-dark" : "select-box-white")}
                                                    id="exampleFormControlSelect2"
                                                    onChange={(event) => mergeDate('year', event.target.value)}>
                                                    <option value="">Year</option>
                                                    {year_data.map((option, index) => (
                                                        <option key={index} value={option.value}>
                                                            {option.value}
                                                        </option>
                                                    ))}
                                                </select> */}

                                            </div>

                                            {txt.length === 5 ? <FiCheck className="text-success mt-1 mx-2 display-5" /> : ''}
                                            <p className="para-form show_result">{dateofBirthError}</p>
                                        </div>
                                        <div className="selectflex mt-4">
                                            <div className="lable-fix-width">
                                                <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Nationality*</label>
                                            </div>
                                            <div className="search-input-div div-search-inputs search-input-div1">
                                                {/* <Select
                                                    styles={customStyles}
                                                    display='flex'
                                                    border="1px solid #d0e3e9"
                                                    borderRadius="4px"
                                                    className="nationality"
                                                    value={nationality}
                                                    onChange={e => {
                                                        setNationality();
                                                        setNationalityError(false)
                                                    }}
                                                    options={options}
                                                    placeholder="Search"
                                                /> */}

                                                {/* <select
                                                    onChange={(event) => handleNationality(event.target.value)}
                                                    className={"search-input " + (props.darkmodes ? "select-box-dark" : "select-box-white")}
                                                    id="exampleFormControlSelect2"
                                                >Website address*
                                                    <option value=''>select</option>
                                                    {countryListAllIsoData && countryListAllIsoData.map((option, index) => (
                                                        <option key={index} value={option.code}>
                                                            {option.name}
                                                        </option>
                                                    ))}
                                                </select> */}
   <SelectBox handleorganisation={handleNationality} website={nationality} options={countryListAllIsoData} input1={ref} isDisabled={true}/>
                                                <p className="para-form show_result">{nationalityError}</p>
                                            </div>
                                            {/* <div className="search-input-div search-input-div1">
                                                <Select
                                                    className={"search-input nationality " + (props.darkmodes ? "text-white" : "text-dark")}
                                                    styles={customStyles}
                                                    value={nationality}
                                                    onChange={e=>{
                                                        setNationality();
                                                        setNationalityError(false)
                                                    } }
                                                    options={options}
                                                    placeholder="Search"
                                                />
                                               
                                                <p className="para-form show_result">{nationalityError}</p>
                                            </div> */}
                                            {/* <input
                                                    type="text"
                                                    placeholder="Search"
                                                    className={"search-input " + (props.darkmodes ? "text-white" : "text-dark")}
                                                    value={nationality}
                                                    onChange={onNationality}
                                                /> */}
                                        </div>
                                        <div className="selectflex mt-4">
                                            <div className="lable-fix-width">
                                                <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Home postcode*</label>
                                            </div>
                                            <div className="search-input-div div-search-inputs search-input-div1">
                                                <div className="d-inline-flex">
                                                    <input
                                                        type="text"
                                                        onChange={onPostcode}
                                                        value={postCode}
                                                        placeholder="Enter your postcode*"
                                                        className={"search-input search-input-post " + (props.darkmodes ? "text-white" : "text-dark")}
                                                    />

                                                    <div className="ps-4 find-btn-postcode">
                                                        <button type="submit" className="btn-default btn-find-post" onClick={handleFind}>
                                                            Find &nbsp;  <i className="icon-search " style={{ transform: 'rotate(80deg)' }}></i>
                                                        </button>
                                                    </div></div>
                                                {/* {postCode === '' ? <h6 className="mt-2">This is where we will send your card and letters</h6> : ''} */}
                                                <p className="para-form show_result">{otherPostcodeError}</p>
                                                {!show ? (
                                                    <p
                                                        onClick={() => {
                                                            (setShow(true)||setShow2(!show2));
                                                        }}
                                                        className="pt-2"
                                                    >
                                                        Enter manually
                                                    </p>
                                                ) : (
                                                    <p
                                                        onClick={() => {
                                                            (setShow(false)||setShow2(!show2));
                                                        }}
                                                    >
                                                        Find address by lookup
                                                    </p>
                                                )}
                                            </div>

                                        </div>
                                        {show2 ?(
                                             <div className="selectflex mt-4">
                                             <div className="lable-fix-width">
                                                 <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Home Address*</label>
                                             </div>
                                             <div className="search-input-div div-search-inputs search-input-div1">
                                             {/* <select onChange={(event) => handleAddressSelect(event.target.value)} className={"search-input " + (props.darkmodes ? "select-box-dark" : "select-box-white")}
                                                    id="exampleFormControlSelect2"
                                                    value={addressSelect}
                                                    placeholder="Enter Address"
                                                >
                                                    <option value=''>select</option>
                                                    {select_data.map((option, index) => (
                                                        <option key={index} value={option.value}>
                                                            {option.value}
                                                        </option>
                                                    ))}
                                                </select> */}
                                                 <SelectBox handleorganisation={handleSelect}  website={selectedData}   options={select_data} input1={ref} isDisabled={true}/>
                                             </div>

                                         </div>
                                        ) : (
                                            " "
                                        )
}
                                        {show || addressSelect ? (
                                            <>
                                                {" "}
                                                <div>
                                                    <div className="selectflex mt-4 ">
                                                        <div className="lable-fix-width">
                                                            <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Building No. or name</label>
                                                        </div>
                                                        <div className="search-input-div div-search-inputs search-input-div1">
                                                            <input
                                                                value={BuildingName}
                                                                onChange={onBuildingName}
                                                                type="text"
                                                                className={"search-input " + (props.darkmodes ? "text-white" : "text-dark")}
                                                                placeholder="Building No. or Name"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="selectflex mt-4">
                                                        <div className="lable-fix-width">
                                                            <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>House number*</label>
                                                        </div>
                                                        <div className="search-input-div div-search-inputs search-input-div1">
                                                            <input type="text" className={"search-input " + (props.darkmodes ? "text-white" : "text-dark")}
                                                                value={houseno}
                                                                onChange={onHouseNo}
                                                                placeholder="House Number" />
                                                            {/* <p className="para-form show_result">{houseError}</p> */}
                                                        </div>

                                                    </div>
                                                    <div className="selectflex mt-4">
                                                        <div className="lable-fix-width">
                                                            <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Address line*</label>
                                                        </div>
                                                        <div className="search-input-div div-search-inputs search-input-div1">
                                                            <input type="text" className={"search-input " + (props.darkmodes ? "text-white" : "text-dark")}
                                                                value={address}
                                                                onChange={onAddress}
                                                                placeholder="Address line" />
                                                        </div>

                                                    </div>
                                                    <div className="selectflex mt-4">
                                                        <div className="lable-fix-width">
                                                            <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Town / City*</label>
                                                        </div>
                                                        <div className="search-input-div div-search-inputs search-input-div1">
                                                            <input
                                                                value={townName}
                                                                onChange={onTownName}
                                                                type="text" className={"search-input " + (props.darkmodes ? "text-white" : "text-dark")} 
                                                                placeholder="Town or City"/>
                                                        </div>

                                                    </div>
                                                </div>
                                            </>
                                        ) : (
                                            " "
                                        )}
                                        
                                        <h4 className="heading-form dark-mode-text">Tell Us How We Can Contact You</h4>
                                        <div className="selectflex mt-4">
                                            <div className="lable-fix-width">
                                                <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Primary work phone number*</label>
                                            </div>
                                            <div className="search-input-div div-search-inputs search-input-div1">
                                                <input
                                                    type="text"
                                                    className={"search-input " + (props.darkmodes ? "text-white" : "text-dark")}
                                                    value={PhoneNumber}
                                                    onChange={onPhoneNumber}
                                                    max="10"
                                                    min="10"
                                                />
                                                <h6 className="mt-2">This can be a mobile number. Please enter numbers only. Spaces are not allowed.</h6>
                                                <p className="para-form show_result">{PhoneNumberError}</p>
                                            </div>
                                            {PhoneNumber.length === 11 ? <FiCheck className="text-success mt-1 mx-2 display-5" /> : ''}

                                        </div>
                                        <div className="selectflex mt-4">
                                            <div className="lable-fix-width">
                                                <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Mobile number*</label>
                                            </div>
                                            <div className="search-input-div div-search-inputs search-input-div1">
                                                <input
                                                    type="text"
                                                    className={"search-input " + (props.darkmodes ? "text-white" : "text-dark")}
                                                    value={mobileNumber} prefix="07"
                                                    onChange={onMobileNumber}
                                                />
                                                <h6 className="mt-2">Please enter numbers only. Spaces are not allowed.</h6>

                                                <label className="float-none d-flex align-items-baseline" style={{ cursor: "pointer" }}>
                                                    <input type="checkbox"
                                                        className="mx-1"
                                                        onChange={numberhandleChange}
                                                    />

                                                    <div>
                                                        <h6 className="mx-2 mt-3"> Same as primary work phone number</h6>
                                                    </div>
                                                </label>

                                                <p className="para-form show_result">{mobileNumberError}</p>
                                            </div>
                                            {mobileNumber.length === 11 ? <FiCheck className="text-success mt-1 mx-2 display-5" /> : ''}

                                        </div>
                                        <div className="selectflex mt-4">
                                            <div className="lable-fix-width">
                                                <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Work email address*</label>
                                            </div>
                                            <div className="search-input-div  div-search-inputs search-input-div1">
                                                <input
                                                    type="email"
                                                    placeholder="Enter your work email address"
                                                    className={"search-input " + (props.darkmodes ? "text-white" : "text-dark")}
                                                    value={emailAddress}
                                                    onChange={onEmailAddress}
                                                />
                                                <p className="para-form show_result">{emailAddressError}</p>
                                            </div>
                                            {emailAddressError ? <FiCheck className="text-success mt-1 mx-2 display-5" /> : ''}

                                        </div>
                                        <div className="selectflex mt-4">
                                            <div className="lable-fix-width">
                                                <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Confirm email address*</label>
                                            </div>
                                            <div className="search-input-div div-search-inputs search-input-div1">
                                                <input
                                                    type="email"
                                                    placeholder="Confirm your email address"
                                                    className={"search-input " + (props.darkmodes ? "text-white" : "text-dark")}
                                                    // value={confirmValue}
                                                    onChange={onConfirmEmail}
                                                />
                                                <p className="para-form show_result">{confirmValueError}</p>
                                                <p className="para-form show_result">{confirmEmailError}</p>
                                            </div>
                                            {/* {confirmEmailError ? <FiCheck className="text-success mt-1 mx-2 display-5" /> : ''} */}

                                        </div>
                                        <hr />

                                        <label className="float-none d-flex align-items-baseline" style={{ cursor: "pointer" }}>
                                            <input type="checkbox"
                                                defaultChecked={checked}
                                                onChange={handleCheckbox}
                                                className="mx-3"
                                            />

                                            <div>
                                                <h6 className="fw-bold mt-3">I have read and accepted the current <a href="/#" className="confirm_text"> Terms and Conditions</a> </h6>
                                                <p className="para-form show_result">{checkError}</p>
                                            </div>
                                        </label>
                                        <label className="float-none d-flex align-items-baseline" style={{ cursor: "pointer" }}>
                                            <input type="checkbox"
                                                defaultChecked={checkedConfirm}
                                                onChange={onCheckbox}
                                                className="mx-3"
                                            />

                                            <div><h6 className="fw-bold mt-3">I acknowledge the cover of the <a href="/#" className="confirm_text"> Financial Services Compensation Scheme</a><br /></h6>
                                                <p className="para-form show_result">{checkedConfirmError}</p>
                                                <h6 className="fw-bold mt-3">You can see the fee information for this account <a href="/#" className="confirm_text">here</a> </h6></div>
                                        </label>
                                        <div className="mt-3 text-end  align-items-center justify-content-around">
                                            <p className="already-login">
                                                Already account please{" "}
                                                <Link to="/login" className="auth-link register-here register-here">
                                                    Login
                                                </Link>{" "}

                                            </p>
                                            <button className={"btn  auth-form-btn auth-form-btn1 " + (props.darkmodes ? "hover-text-white" : "hover-text-white")} onClick={nextPage}>Next <FiChevronRight /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- content-wrapper ends --> */}
                </div>
                {/* <!-- page-body-wrapper ends --> */}
            </div>
        </>
    );
};

export default PersonalDetails;
