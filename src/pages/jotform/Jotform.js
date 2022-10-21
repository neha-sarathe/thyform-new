import React, { useRef, useEffect, useState } from "react";
import { FormBuilder } from "cb-react-forms";

const Jotform = ({darkmodes,setDarkmodes }) => {
  const [formData, setFormData] = useState();

  return (
    <>
      <div className={darkmodes ? "body-dark formbuilder-dark" : 'formbuilder-light'}>
        <br/>
        <br/>
        <br/>
          <FormBuilder onSubmit={data => console.log("Data---->",data)} />
        <div >
          <div id="formio-result" />
        </div>
      </div></>
  )
}

export default Jotform;