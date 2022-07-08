import React from "react";
import LoginPages from "../../../helpers/Helpers";
import { useTranslation } from 'react-i18next';

const WhoIsTheUser = (props) => {
  const {t}=useTranslation()
  const data = [
    { id: 1, name: "User" },
    { id: 2, name: "Treyner" },
    { id: 3, name: "Dietolog" },
  ];
  return (
    <div className="WhoIsTheUser"> 
      <LoginPages settype={props.settype}
        navigateUrl={"/signUp"}
        title={t("royhat")}
        data={data}
        navigateUrl2={"/otherAccount"}
      />
    </div>
  );
};

export default WhoIsTheUser;



