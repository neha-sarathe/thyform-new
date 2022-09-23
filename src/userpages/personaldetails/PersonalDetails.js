import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiChevronRight, FiCheck } from 'react-icons/fi'
import Dark from "../../DarkAuth";
const PersonalDetails = (props) => {

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
    const [confirmEmail, setConfirmEmail] = useState('');
    const [confirmEmailError, setConfirmEmailError] = useState(false);
    const [checkedConfirm, setCheckedConfirm] = useState(false);
    const [checkedConfirmError, setCheckedConfirmError] = useState(false);
    const [BuildingName, setBuildingName] = useState('');
    const [townName, setTownName] = useState('');
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [birthday, setBirthday] = useState({ birthday: '' });

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
    const onNationality = e => {
        const { value } = e.target;
        setNationality(value)
        setNationalityError(false)
    }


    const handleSelect = (value) => {
        console.log('value......', value);
        setSelectedData(value)
        setBusinessError(false)
    }

    const nextPage = () => {
        if (selectedData === '') {
            setBusinessError('Please select your title')
        } else if (maxValue === '') {
            setError('Please enter your first name')
        } else if (surname === '') {
            setSurnameError('Please enter your surname')
        } else if (dateofBirth === '') {
            setDateofBirthError('Please select your date of birth')
        } else if (nationality === '') {
            setNationalityError('Please select an nationality from the dropdown')
        } else if (postCode === '') {
            setOtherPostcodeError('Please enter your postcode, press Find address and select your address from the options')
        } else if (PhoneNumber === '') {
            setPhoneNumberError('Please enter your work phone number')
        } else if (mobileNumber === '') {
            setMobileNumberError('Please enter a valid UK mobile number starting with 07')
        } else if (emailAddress === '') {
            setEmailAddressError('Please enter a valid email address')
        } else if (confirmEmail === '') {
            setConfirmEmailError('Please confirm your email address')
        } else if (checked === false) {
            setCheckError('Please read the Terms & Conditions and check the box to show you agree to them')
        } else if (checkedConfirm === false) {
            setCheckedConfirmError('Please acknowledge the cover of the Financial Services Compensation Scheme')
        } else {
            // navigate('/login')
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
        setpostCode(value)
        setOtherPostcodeError(false)
    }

    const onPhoneNumber = e => {
        const { value } = e.target;
        setPhoneNumber(value)
        setPhoneNumberError(false)
    }
    const onMobileNumber = e => {
        const { value } = e.target;
        setMobileNumber(value)
        setMobileNumberError(false)
    }
    const onEmailAddress = e => {
        const { value } = e.target;
        setEmailAddress(value)
        setEmailAddressError(false)
    }
    const onConfirmEmail = e => {
        const { value } = e.target;
        setConfirmEmail(value)
        setConfirmEmailError(false)
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
                                        <h4 className="heading-form dark-mode-text">Tell Us About You</h4>
                                        <div className="d-flex mt-4 align-items-center">
                                            <div className="w-25">
                                                <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Title*</label>
                                            </div>
                                            <div className="search-input-div search-input-div1">
                                                <select onChange={(event) => handleSelect(event.target.value)} className={"search-input " + (props.darkmodes ? "select-box-dark" : "select-box-white")}
                                                    id="exampleFormControlSelect2"
                                                    value={selectedData}
                                                >
                                                    <option value=''>select</option>
                                                    {select_data.map((option, index) => (
                                                        <option key={index} value={option.value}>
                                                            {option.value}
                                                        </option>
                                                    ))}
                                                </select>
                                                <p className="para-form show_result">{businessError}</p>
                                            </div>
                                        </div>

                                        <div className="d-flex mt-4 align-items-center">
                                            <div className="w-25">
                                                <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>First name*</label>
                                            </div>
                                            <div className="search-input-div search-input-div1">
                                                <input
                                                    type="text"
                                                    placeholder="Enter your first name"
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
                                                <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Surname*</label>
                                            </div>
                                            <div className="search-input-div search-input-div1">
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
                                        <div className="d-flex mt-4 align-items-center">
                                            <div className="w-25">
                                                <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Date of birth*</label>
                                            </div>
                                            <div className="search-input-div search-input-div1 d-flex">
                                                <select className={"search-input " + (props.darkmodes ? "select-box-dark" : "select-box-white")}
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
                                                </select>
                                                {/* <input
                                                    type="text"
                                                    placeholder="Registration Number"
                                                    className={"search-input " + (props.darkmodes ? "text-white" : "text-dark")}
                                                    value={dateofBirth}
                                                    onChange={onDateofBirth}
                                                /> */}
                                                <p className="para-form show_result">{dateofBirthError}</p>
                                            </div>
                                            {txt.length === 5 ? <FiCheck className="text-success mt-1 mx-2 display-5" /> : ''}

                                        </div>
                                        <div className="d-flex mt-4 align-items-center">
                                            <div className="w-25">
                                                <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Nationality*</label>
                                            </div>
                                            <div className="search-input-div search-input-div1">
                                                <input
                                                    type="text"
                                                    placeholder="Search"
                                                    className={"search-input " + (props.darkmodes ? "text-white" : "text-dark")}
                                                    value={nationality}
                                                    onChange={onNationality}
                                                />
                                                <p className="para-form show_result">{nationalityError}</p>
                                            </div>

                                        </div>
                                        <div className="d-flex mt-4 align-items-center">
                                            <div className="w-25">
                                                <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Home postcode*</label>
                                            </div>
                                            <div className="search-input-div search-input-div1">
                                                <div className="d-flex">
                                                    <input
                                                        type="text"
                                                        onChange={onPostcode}
                                                        value={postCode}
                                                        placeholder="Enter your postcode*"
                                                        className={"search-input search-input-post " + (props.darkmodes ? "text-white" : "text-dark")}
                                                    />

                                                    <div className="ps-4 find-btn-postcode">
                                                        <button type="submit" className="btn-default btn-find-post">
                                                            Find &nbsp;  <i className="icon-search " style={{ transform: 'rotate(80deg)' }}></i>
                                                        </button>
                                                    </div></div>
                                                <p className="para-form show_result">{otherPostcodeError}</p>
                                                {!show ? (
                                                    <p
                                                        onClick={() => {
                                                            setShow(true);
                                                        }}
                                                        className="pt-2"
                                                    >
                                                        Enter manually
                                                    </p>
                                                ) : (
                                                    <p
                                                        onClick={() => {
                                                            setShow(false);
                                                        }}
                                                    >
                                                        Find address by lookup
                                                    </p>
                                                )}
                                            </div>

                                        </div>

                                        {show ? (
                                            <>
                                                {" "}
                                                <div>
                                                    <div className="d-flex mt-4 align-items-center">
                                                        <div className="w-25">
                                                            <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Building No. or name</label>
                                                        </div>
                                                        <div className="search-input-div search-input-div1">
                                                            <input
                                                                value={BuildingName}
                                                                onChange={onBuildingName}
                                                                type="text"
                                                                className={"search-input " + (props.darkmodes ? "text-white" : "text-dark")}
                                                                placeholder="Building No. or name"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="d-flex mt-4 align-items-center">
                                                        <div className="w-25">
                                                            <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>House number*</label>
                                                        </div>
                                                        <div className="search-input-div search-input-div1">
                                                            <input type="text" className={"search-input " + (props.darkmodes ? "text-white" : "text-dark")}
                                                                value={houseno}
                                                                onChange={onHouseNo} />
                                                        </div>

                                                    </div>
                                                    <div className="d-flex mt-4 align-items-center">
                                                        <div className="w-25">
                                                            <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Address line*</label>
                                                        </div>
                                                        <div className="search-input-div search-input-div1">
                                                            <input type="text" className={"search-input " + (props.darkmodes ? "text-white" : "text-dark")}
                                                                value={address}
                                                                onChange={onAddress} />
                                                        </div>

                                                    </div>
                                                    <div className="d-flex mt-4 align-items-center">
                                                        <div className="w-25">
                                                            <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Town / City*</label>
                                                        </div>
                                                        <div className="search-input-div search-input-div1">
                                                            <input
                                                                value={townName}
                                                                onChange={onTownName}
                                                                type="text" className={"search-input " + (props.darkmodes ? "text-white" : "text-dark")} />
                                                        </div>

                                                    </div>
                                                </div>
                                            </>
                                        ) : (
                                            ""
                                        )}
                                        <h4 className="heading-form dark-mode-text">Tell Us How We Can Contact You</h4>
                                        <div className="d-flex mt-4 align-items-center">
                                            <div className="w-25">
                                                <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Primary work phone number*</label>
                                            </div>
                                            <div className="search-input-div search-input-div1">
                                                <input
                                                    type="text"
                                                    placeholder="0"
                                                    className={"search-input " + (props.darkmodes ? "text-white" : "text-dark")}
                                                    value={PhoneNumber}
                                                    onChange={onPhoneNumber}
                                                />
                                                <p className="para-form show_result">{PhoneNumberError}</p>
                                            </div>
                                            {PhoneNumberError.length <= 10 ? <FiCheck className="text-success mt-1 mx-2 display-5" /> : ''}

                                        </div>
                                        <div className="d-flex mt-4 align-items-center">
                                            <div className="w-25">
                                                <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Mobile number*</label>
                                            </div>
                                            <div className="search-input-div search-input-div1">
                                                <input
                                                    type="text"
                                                    placeholder="07"
                                                    className={"search-input " + (props.darkmodes ? "text-white" : "text-dark")}
                                                    value={mobileNumber}
                                                    onChange={onMobileNumber}
                                                />
                                                <p className="para-form show_result">{mobileNumberError}</p>
                                            </div>
                                            {mobileNumberError.length <= 10 ? <FiCheck className="text-success mt-1 mx-2 display-5" /> : ''}

                                        </div>
                                        <div className="d-flex mt-4 align-items-center">
                                            <div className="w-25">
                                                <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Work email address*</label>
                                            </div>
                                            <div className="search-input-div search-input-div1">
                                                <input
                                                    type="email"
                                                    placeholder="Registration Number"
                                                    className={"search-input " + (props.darkmodes ? "text-white" : "text-dark")}
                                                    value={emailAddress}
                                                    onChange={onEmailAddress}
                                                />
                                                <p className="para-form show_result">{emailAddressError}</p>
                                            </div>
                                            {emailAddressError ? <FiCheck className="text-success mt-1 mx-2 display-5" /> : ''}

                                        </div>
                                        <div className="d-flex mt-4 align-items-center">
                                            <div className="w-25">
                                                <label className={"lable-form " + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>Confirm email address*</label>
                                            </div>
                                            <div className="search-input-div search-input-div1">
                                                <input
                                                    type="email"
                                                    placeholder="Registration Number"
                                                    className={"search-input " + (props.darkmodes ? "text-white" : "text-dark")}
                                                    value={confirmEmail}
                                                    onChange={onConfirmEmail}
                                                />
                                                <p className="para-form show_result">{confirmEmailError}</p>
                                            </div>
                                            {confirmEmailError ? <FiCheck className="text-success mt-1 mx-2 display-5" /> : ''}

                                        </div>
                                        <hr />

                                        <label className="float-none d-flex align-items-baseline" style={{ cursor: "pointer" }}>
                                            <input type="checkbox"
                                                defaultChecked={checked}
                                                onChange={handleCheckbox}
                                                className="mx-3"
                                            />

                                            <div>
                                                <h6 className="fw-bold mt-3">I have read and accepted the current <a href="/#" className="text-primary"> Terms and Conditions</a> </h6>
                                                <p className="para-form show_result">{checkError}</p>
                                            </div>
                                        </label>
                                        <label className="float-none d-flex align-items-baseline" style={{ cursor: "pointer" }}>
                                            <input type="checkbox"
                                                defaultChecked={checkedConfirm}
                                                onChange={onCheckbox}
                                                className="mx-3"
                                            />

                                            <div><h6 className="fw-bold mt-3">I acknowledge the cover of the <a href="/#" className="text-primary"> Financial Services Compensation Scheme</a><br /></h6>
                                                <p className="para-form show_result">{checkedConfirmError}</p>
                                                <h6 className="fw-bold mt-3">You can see the fee information for this account <a href="/#" className="text-primary">here</a> </h6></div>
                                        </label>
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

export default PersonalDetails;