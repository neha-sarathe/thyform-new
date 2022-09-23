import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiChevronRight, FiCheck } from 'react-icons/fi'
import Dark from "../../DarkAuth";
import Select from 'react-select';

const UserForm = (props) => {

    const navigate = useNavigate();
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
    const [PhoneNumber, setPhoneNumber] = useState('');
    const [PhoneNumberError, setPhoneNumberError] = useState(false);
    const [mobileNumber, setMobileNumber] = useState('');
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
    const [confirmValue,setConfirmValue] = useState('')
    const [confirmValueError,setConfirmValueError] = useState('')

    const select_data = [
        { key: 'america', value: 'Example 1' },
        { key: 'unitedkingdom', value: 'Example 2' },
        { key: 'india', value: 'Example 3' },
        { key: 'germany', value: 'Example 4' },
        { key: 'argentina', value: 'Example 5' }
    ]

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
        setMaxValue(value)
        // if (maxValue.length >= 3) {
        //     setMaxValue(value)
        // }else{
        //     setError('plz enter max 3 char')
        // }
        setError(false)

    }
    const onSurname = e => {
        const { value } = e.target;
        setSurname(value)
        setSurnameError(false)
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

    const nextPage = () => {
        // if (selectedData === '') {
        //     setBusinessError('Please select your title')
        // } else if (maxValue === '') {
        //     setError('Please enter your first name')
        // } else if (surname === '') {
        //     setSurnameError('Please enter your surname')
        // } else if (birthday.birthday === '') {
        //     setDateofBirthError('Please select your date of birth')
        // } else if (nationality === '') {
        //     setNationalityError('Please select an nationality from the dropdown')
        // } else if (postCode === '') {
        //     setOtherPostcodeError('Please enter your postcode, press Find address and select your address from the options')
        // } else if (PhoneNumber === '0') {
        //     setPhoneNumberError('Please enter your work phone number')
        // } else if (mobileNumber === '07') {
        //     setMobileNumberError('Please enter a valid UK mobile number starting with 07')
        // } else if (emailAddress === '') {
        //     setEmailAddressError('Please enter a valid email address')
        // } else if (confirmValue === '') {
        //     setConfirmEmailError('Please confirm your email address')
        // } else if (checked === false) {
        //     setCheckError('Please read the Terms & Conditions and check the box to show you agree to them')
        // } else if (checkedConfirm === false) {
        //     setCheckedConfirmError('Please acknowledge the cover of the Financial Services Compensation Scheme')
        // } else {
        //     navigate('/paymentmode')
        // }
        navigate('/paymentmode')

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
        setpostCode(value)
        setOtherPostcodeError(false)
    }

    const onPhoneNumber = e => {
        const { value } = e.target;
        // setPhoneNumber(value)
        // setPhoneNumberError(false)
        if (value.length <= 11) {
            setPhoneNumber(value)
            setPhoneNumberError(false)
        }
        setPhoneNumberError(false)
    }
    const onMobileNumber = e => {
        const { value } = e.target;
        if (value.length <= 11) {
            setMobileNumber(value)
        setMobileNumberError(false)
        } 
        // setMobileNumber(value)
        // setMobileNumberError(false)
    }
    const onEmailAddress = e => {
        const { value } = e.target;
        setEmailAddress(value)
        setEmailAddressError(false)
    }
    
    const onConfirmEmail = e => {
        if (e.target.value != emailAddress)
        {
            setConfirmValueError('not match')
        } else if (e.target.value === emailAddress) {
            setConfirmValue(e.target.value)
            setConfirmValueError('')
        }else{
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
        }
    }
    const onBuildingName = e => {
        const { value } = e.target;
        setBuildingName(value);

        // const re = /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/;
        // if (value === "" || re.test(value)) {
        //     setBuildingName(value);
        // }
    }

    const onAddress = e => {
        const { value } = e.target;


        const re = /^[0-9a-zA-Z]+$/;
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
      
        control: (_, { selectProps: { width, display, border, borderRadius }}) => ({
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
                                        <h4 className="heading-form dark-mode-text">Payment</h4>

                                        <div className="d-flex mt-4 align-items-center">
                                            <div className="w-25">
                                                <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>User Name*</label>
                                            </div>
                                            <div className="search-input-div search-input-div1">
                                                <input
                                                    type="text"
                                                    placeholder="Enter your name"
                                                    className={"search-input " + (props.darkmodes ? "text-white" : "text-dark")}
                                                    value={maxValue}
                                                    onChange={onInputChange}
                                                />
                                            </div>
                                            {/* {txt ? <FiCheck className="text-success mt-1 mx-2 display-5" /> : ''} */}
                                            <p className="para-form show_result">{error}</p>
                                        </div>
                                        <div className="d-flex mt-4 align-items-center">
                                            <div className="w-25">
                                                <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Password</label>
                                            </div>
                                            <div className="search-input-div search-input-div1">
                                                <input
                                                    type="password"
                                                    placeholder="Enter your password"
                                                    className={"search-input " + (props.darkmodes ? "text-white" : "text-dark")}
                                                    value={surname}
                                                    onChange={onSurname}
                                                />
                                                <p className="para-form show_result">{SurnameError}</p>
                                            </div>
                                            {txt.length === 5 ? <FiCheck className="text-success mt-1 mx-2 display-5" /> : ''}

                                        </div>
                                        <div className="d-flex mt-4 align-items-center">
                                            <div className="w-25">
                                                <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Confirm Password*</label>
                                            </div>
                                            <div className="search-input-div search-input-div1">
                                                <div className="d-flex">
                                                    <input
                                                        type="password"
                                                        onChange={onPostcode}
                                                        value={postCode}
                                                        placeholder="Enter your confirm password"
                                                        className={"search-input " + (props.darkmodes ? "text-white" : "text-dark")}
                                                    /></div>
                                                <p className="para-form show_result">{otherPostcodeError}</p>
                                               
                                            </div>

                                        </div>
                                       
                                        <div className="d-flex mt-4 align-items-center">
                                            <div className="w-25">
                                                <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Pin</label>
                                            </div>
                                            <div className="search-input-div search-input-div1">
                                                <input
                                                    type="text"
                                                    className={"search-input " + (props.darkmodes ? "text-white" : "text-dark")}
                                                    value={PhoneNumber}
                                                    onChange={onPhoneNumber}
                                                    placeholder="Enter your pin number"
                                                />
                                                {PhoneNumber === '0' ? <h6 className="mt-2">This can be a mobile number. Please enter numbers only. Spaces are not allowed.</h6>:''}
                                                <p className="para-form show_result">{PhoneNumberError}</p>
                                            </div>
                                            {PhoneNumber.length === 11 ? <FiCheck className="text-success mt-1 mx-2 display-5" /> : ''}

                                        </div>
                                        <div className="d-flex mt-4">
                                            <div className="w-25">
                                                <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Confirm Pin</label>
                                            </div>
                                            <div className="search-input-div search-input-div1">
                                                <input
                                                    type="text"
                                                    className={"search-input " + (props.darkmodes ? "text-white" : "text-dark")}
                                                    value={mobileNumber}
                                                    onChange={onMobileNumber}
                                                    placeholder="Enter your confirm pin number"
                                                />
                                               
                                                <p className="para-form show_result">{mobileNumberError}</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="mt-3 text-end d-flex align-items-center justify-content-between">
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

export default UserForm;
