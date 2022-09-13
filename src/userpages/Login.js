import React, { useState, useEffect } from "react";
import { FiLogIn } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Dark from "../DarkAuth";
const Login = (props) => {
  const navigate = useNavigate();
  const [pincode, setPincode] = useState('');
  const [hide, setHide] = useState(true)
  const hideSwitch = ev => {
    setHide(!hide)
  }

  const [image, setImage] = useState({ preview: "", raw: "" });
  useEffect(() => {
    function enableDragSort(listClass) {
      const sortableLists = document.getElementsByClassName(listClass);
      Array.prototype.map.call(sortableLists, (list) => {
        enableDragList(list);
      });
    }

    function enableDragList(list) {
      Array.prototype.map.call(list.children, (item) => {
        enableDragItem(item);
      });
    }

    function enableDragItem(item) {
      item.setAttribute("draggable", true);
      item.ondrag = handleDrag;
      item.ondragend = handleDrop;
    }

    function handleDrag(item) {
      const selectedItem = item.target,
        list = selectedItem.parentNode,
        x = window.event.clientX,
        y = window.event.clientY;

      selectedItem.classList.add("drag-sort-active");
      let swapItem =
        document.elementFromPoint(x, y) === null
          ? selectedItem
          : document.elementFromPoint(x, y);

      if (list === swapItem.parentNode) {
        swapItem =
          swapItem !== selectedItem.nextSibling
            ? swapItem
            : swapItem.nextSibling;
        list.insertBefore(selectedItem, swapItem);
      }
    }

    function handleDrop(item) {
      item.target.classList.remove("drag-sort-active");
    }

    (() => {
      enableDragSort("drag-sort-enable");
    })();
  }, []);


  // const handleChange = e => {
  //   if (e.target.files.length) {
  //     setImage({
  //       preview: URL.createObjectURL(e.target.files[0]),
  //       raw: e.target.files[0]
  //     });
  //   }
  // };

  const onPincode = e => {
    const { value } = e.target;
    // console.log('Input value: ', value);

    const re = /^[0-9\b]+$/;
    if (value === "" || re.test(value)) {
      setPincode(value);
    }
  }
  console.log(props, 'props.handleLogin')
  return (
    <>
      <Dark darkmodes={props.darkmodes} setDarkmodes={props.setDarkmodes} />
      <div class="container-scroller">
        <div class="container-fluid page-body-wrapper full-page-wrapper">
          <div class="content-wrapper d-flex align-items-stretch auth auth-img-bg">
            <div class={"row flex-grow login-bg drag-sort-enable" + (props.darkmodes ? "text-white bg-dark" : "text-dark bg-white")}>
              <div
                class="col-lg-6 login-half-bg d-flex flex-row box"
                draggable="true"
              >
                <div className="login-half-div">
                  <img src={process.env.PUBLIC_URL + "images/auth/login-bg.png"} className="login-half-img" />
                </div>
              </div>
              <div
                class="col-lg-6 d-flex align-items-center justify-content-center box"
                draggable="true"
              >
                <div class="auth-form-transparent auth-form-transparents text-left p-3">
                  <div class="brand-logo brand-logo-main">
                    <div className="brand-logo1">
                      {image.preview ? (
                        <img src={image.preview} alt="dummy" className="upload-img" />
                      ) : (
                        <>
                          <img src="../../images/Logo.png" alt="logo" />
                        </>
                      )}

                    </div>

                    <div className="icon change-logo-btn mt-3">
                      {/* <label htmlFor="upload-button"> */}
                        <FiLogIn
                          style={{
                            width: "55px",
                            height: "auto",
                            color: "#ced4da",
                            // cursor: 'pointer'
                          }}
                        />
                      {/* </label>
                       <input
                        type="file"
                        id="upload-button"
                        style={{ display: "none" }}
                        onChange={handleChange}

                      /> */}

                    </div>

                  </div>
                  <h6 class={"fw-light login-heading " + (props.darkmodes ? "text-white" : "text-dark ")}>
                    Happy to see you again!
                  </h6>
                  <div className="form-div-loginpage">
                  <form class="pt-3">
                    <div class="form-group">
                      <div class="input-group  row d-flex justify-content-between align-items-center">
                        <div className="col-md-3 mt-1 login-text"><label className={props.darkmodes ? "text-white" : "text-dark"}>Username *</label></div>
                        <div className="col-md-9">  <input
                          type="text"
                          className={"form-control placeholder-login  border-left-0  input-login  " + (props.darkmodes ? " login-dark-text " : " login-light-text ")}
                          id="exampleInputEfmail"
                          placeholder="Username"

                        />
                        </div></div>
                    </div>
                    <div class="form-group">
                      {/* <label for="exampleInputPassword">Password</label> */}
                      <div class="input-group row d-flex justify-content-between align-items-center">
                        <div className="col-md-3 mt-1 login-text"> <label className={props.darkmodes ? "text-white" : "text-dark"}>Password *</label></div>
                        <div className="col-md-9">  <input
                          type={hide ? 'password' : 'input'}
                          className={"form-control placeholder-login  border-left-0 input-login " + (props.darkmodes ? " login-dark-text " : " login-light-text ")}
                          id="exampleInputfPassword"
                          placeholder="Password"
                        />
                          <span className="password__show field-icon" onClick={hideSwitch}>{hide ? <FiEyeOff /> : <FiEye />}</span>
                        </div></div>
                    </div>

                    <div class="form-group">
                      <div class="input-group row d-flex justify-content-between align-items-center">
                        <div className="col-md-3 mt-1 login-text"><label className={props.darkmodes ? "text-white" : "text-dark"}>Pin code *</label></div>
                        <div className="col-md-9">  <input
                          type="phone"
                          className={"form-control placeholder-login  border-left-0 input-login " + (props.darkmodes ? " login-dark-text " : " login-light-text ")}
                          id="exampleInputfPassword"
                          placeholder="Pin code"
                          value={pincode}
                          onChange={onPincode}
                        /></div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">


                      <div class="my-2 d-flex  align-items-center">
                        <input
                          className={"form-check-input " + (props.darkmodes ? " login-dark-text " : " login-light-text ")}
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          class={"form-check-label ms-2 " + (props.darkmodes ? "text-white" : "text-dark ")}
                          for="flexCheckDefault"
                        >
                          Remember Me
                        </label>

                      </div>
                      {/* <a href="#" class="auth-link text-black text-end">Forgot password?</a> */}
                    </div>
                    <div class="d-grid mt-3 col-12  mb-2 ms-0 me-0 d-flex justify-content-center">
                      <button class="btn btn-primary login-btn-width" type="button" onClick={() => { props.setUser(); navigate("../allform/allform"); window.location.reload(false); }}>
                        Log in
                      </button>
                      {/* <button class="btn btn-primary" type="button">Button</button> */}
                    </div>
                    <p className={"already-login ps-3 " + (props.darkmodes ? " login-dark-text input-login-dark" : " login-light-text input-login-light")}>
                      Not a member yet? Click{" "}
                      <Link to="/" class="auth-link login-here">
                        here
                      </Link>{" "}
                      to register.
                    </p>

                  </form></div>
                  <hr className="mt-5" />

                  {/* <p className="text-center">
                    © Color Admin All Right Reserved 2021
                  </p> */}
                </div>
              </div>
              {/* </DraggableList> */}
            </div>
          </div>
          {/* <!-- content-wrapper ends --> */}
        </div>
        {/* <!-- page-body-wrapper ends --> */}
      </div>
      {/* <!-- container-scroller --> */}
      {/* <!-- plugins:js --> */}
    </>
  );
};
export default Login;
