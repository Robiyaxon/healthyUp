import React from "react";
import LoginPages from "../../../helpers/Helpers";

const Goal = () => {
  const data = [
    { id: 0, name: "Ozish" },
    { id: 1, name: "Saqlab qolish" },
  ];
  return (
    <div>
      <LoginPages
        navigateUrl={"/direction"}
        title={"Maqsadingizni tanlang"}
        data={data}
      />
    </div>
  );
};

export default Goal;
