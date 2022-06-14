import React from "react";
import LoginPages from "../../../helpers/LoginPages";

const Direction = () => {
  const data = [
    { id: 0, name: "Dieta" },
    { id: 1, name: "Sport" },
    { id: 2, name: "Diet & Sport" },
  ];
  return (
    <div>
      <LoginPages
        navigateUrl={"/food"}
        title={"Qaysi yo‘nalish sizga maqul "}
        data={data}
      />
    </div>
  );
};

export default Direction;
