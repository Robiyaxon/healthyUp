import React from "react";
import FormRegistration from "./form/FormRegistration";

const Registration = React.memo((props) =>{
  return (
    <>
      <FormRegistration email={props.email} password={props.password} username={props.username} first_name={props.first_name} last_name={props.last_name}  setFirstname={props.setFirstname} setEmail={props.setEmail} setUsername={props.setUsername} SignApp={props.SignApp}  setPassword={props.setPassword} setName={props.setName} type={props.type}/>
    </>
  );
}
)
export default Registration;
