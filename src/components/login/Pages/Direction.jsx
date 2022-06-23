import React from "react";
import LoginPages from "../../../helpers/Helpers";

const Direction = (props) => {
  const data = [
    { id: 1, name: "Sport" },
    { id: 2, name: "Dieta" },
    { id: 3, name: "Diet & Sport" },
  ];
  return (
    <div>
      <LoginPages
        settype={props.settype_loss}
        navigateUrl={"/foods"}
        title={"Qaysi yo‘nalish sizga maqul "}
        data={data}

      />
    </div>
  );
};

export default Direction;
