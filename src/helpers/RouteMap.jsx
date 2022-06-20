import { Suspense, lazy, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Spin } from "antd";
import { useNavigate } from "react-router-dom";
import { Home } from "./../components/home/Home";
const Question = lazy(() => import("./../components/question/Question.jsx"));
const Foods = lazy(() => import("../components/login/foods/Foods"));
const AboutUs = lazy(() => import("./../components/about_us/AboutUs"));
const Contact = lazy(() => import("./../components/contact/Contact"));
const MyCabinet = lazy(() => import("./../components/my_cabinet/My_Cabinet"));
const Login = lazy(() => import("./../components/login/Login.jsx"));
const Direction = lazy(() => import("../components/login/Pages/Direction.jsx"));

const Registration = lazy(() =>
  import("./../components/registration/Registration.jsx")
);
const FemaleOrMale = lazy(() =>
  import("./../components/login/femaleOrMale/FemaleOrMale.jsx")
);
const WhoIsTheUser = lazy(() =>
  import("../components/login/Pages/WhoIsTheUser.jsx")
);
const Conclusion = lazy(() =>
  import("./../components/conclusion/Conclusion")
);
const Reference = lazy(() =>
  import("./../components/login/reference/Reference.jsx")
);


export const RouterMap = () => {
  const [last_name, setName] = useState("");
  const [first_name, setFirstname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [height, setheight] = useState("");
  const [weight, setweight] = useState("");
  const [type_loss, settype_loss] = useState("");
  const [going_to_loss, setgoing_to_loss] = useState("1");
  const [can_not_sports, setcan_not_sports] = useState("[1]");
  const [can_not_dieta, setcan_not_dieta] = useState("[21]");
  const [type, settype] = useState("");
  function SignApp(gender2) {
    var formdata = new FormData();
    formdata.append("type", type);
    formdata.append("username", username);
    formdata.append("email", email);
    formdata.append("password", password);
    formdata.append("first_name", first_name);
    formdata.append("last_name", last_name);
    formdata.append("gender", gender2);
    formdata.append("age", age);
    formdata.append("height", height);
    formdata.append("weight", weight);
    formdata.append("type_loss", type_loss);
    formdata.append("going_to_loss", going_to_loss);
    formdata.append("can_not_sports", can_not_sports);
    formdata.append("can_not_dieta", can_not_dieta);
    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("http://10.10.8.46:8000/register/", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        if (result == 1) {
          console.log("xato");
        } else {
          console.log(result);
        }
      })
      .catch((error) => console.log("error", error));
  }
  let data = [
    { id: 1, url: "/", element: <Home /> },
    { id: 2, url: "my_cabinets", element: <MyCabinet /> },
    { id: 4, url: "about_us", element: <AboutUs /> },
    { id: 5, url: "contact", element: <Contact /> },
    { id: 6, url: "signUp", element: <Registration email={email} password={password} username={username} first_name={first_name} last_name={last_name} setFirstname={setFirstname} setEmail={setEmail} setName={setName} setUsername={setUsername} setPassword={setPassword} /> },
    { id: 7, url: "femaleOrMale", element: <FemaleOrMale SignApp={SignApp} setGender={setGender} /> },
    { id: 8, url: "faq", element: <Question /> },
    { id: 9, url: "login", element: <Login /> },
    { id: 10, url: "reference", element: <Reference weight={weight} setweight={setweight} height={height} setheight={setheight} age={age} setAge={setAge} /> },
    { id: 13, url: "foods", element: <Foods setcan_not_dieta={setcan_not_dieta} /> },
    { id: 11, url: "whoIsTheUser", element: <WhoIsTheUser settype={settype} /> },
    { id: 14, url: "direction", element: <Direction settype={settype_loss} /> },
    { id: 15, url: "conclusion", element: <Conclusion /> },
  ];

  const dataMapForRoute = data.map((d) => (
    <Route
      key={d.id}
      path={d.url}
      element={
        <Suspense
          fallback={
            <div className="SpinStyle">
              <Spin />
            </div>
          }
        >
          {d.element}
        </Suspense>
      }
    />
  ));

  return <Routes>{dataMapForRoute}</Routes>;
};
