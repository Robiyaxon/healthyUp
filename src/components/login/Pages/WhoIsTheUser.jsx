import React from "react";
import LoginPages from "../../../helpers/Helpers";

const WhoIsTheUser = () => {
  const data = [
    { id: 0, name: "User" },
    { id: 1, name: "Dietolog" },
    { id: 2, name: "Treyner" },
  ];
  return (
    <div>
      <LoginPages
        navigateUrl={"/femaleOrMale"}
        title={"Kim sifatida ro'yxatdan o'tmoqchisiz"}
        data={data}
      />
    </div>
  );
};

export default WhoIsTheUser;



