import React from "react";
import LoginPages from "../../../helpers/Helpers";

const WhoIsTheUser = (props) => {
  const data = [
    { id: 1, name: "User" },
    { id: 2, name: "Treyner" },
    { id: 3, name: "Dietolog" },
  ];
  return (
    <div className="WhoIsTheUser"> 
      <LoginPages settype={props.settype}
        navigateUrl={"/reference"}
        title={"Kim sifatida ro'yxatdan o'tmoqchisiz"}
        data={data}
        navigateUrl2={"/otherAccount"}
      />
    </div>
  );
};

export default WhoIsTheUser;



