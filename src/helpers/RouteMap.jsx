/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import { Suspense, lazy, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Spin } from "antd";
import { useNavigate } from 'react-router-dom';
import SingleSearchPersonCompanity from "../components/searchPerson/SingleSearchPersonCompanity"
const Home = lazy(() => import("./../components/home/Home"));
const Question = lazy(() => import("./../components/question/Question"));
const SportFood = lazy(() => import("../components/registration/sport&food/SportsFood"));
const Sports = lazy(() => import("../components/registration/sport/Sports"));
const Foods = lazy(() => import("../components/login/foods/Foods"));
const AboutUs = lazy(() => import("./../components/about_us/AboutUs"));
const Contact = lazy(() => import("./../components/contact/Contact"));
const Login = lazy(() => import("./../components/login/Login"));
const Direction = lazy(() => import("../components/login/Pages/Direction"));
const Registration = lazy(() =>
  import("./../components/registration/Registration")
);
const FemaleOrMale = lazy(() =>
  import("./../components/login/femaleOrMale/FemaleOrMale")
);
const WhoIsTheUser = lazy(() =>
  import("../components/login/Pages/WhoIsTheUser")
);
const Conclusion = lazy(() => import("./../components/conclusion/Conclusion"));
const Reference = lazy(() =>
  import("./../components/login/reference/Reference")
);
const Goal = lazy(() => import("./../components/login/Pages/Goal"));
const Loader = lazy(() => import("./../components/login/loader/Loader"));
const OtherCreateAccount = lazy(() =>
  import("./../components/login/otherCreateAccount/OtherCreateAccount")
);
const SearchPerson = lazy(() =>
  import("./../components/searchPerson/SeachPerson")
);
const AllDietolog = lazy(() =>
  import("./../components/searchPerson/AllDietolog")
);
const AllTrainer = lazy(() =>
  import("./../components/searchPerson/AllTrainer")
);

const UserSettings = lazy(() =>
  import("./../components/userSettings/UserSettings")
)
const OtherAccSettings = lazy(() =>
  import("./../components/userSettings/OtherAccSettings")
)
const PersonExpert = lazy(() =>
  import("./../components/search/Person_expert")
)

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
  const [can_not_sports, setcan_not_sports] = useState([]);
  const [can_not_dieta, setcan_not_dieta] = useState([]);
  const [type, settype] = useState("");
  const [token, setToken] = useState("");

  const navigate = useNavigate()
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

    fetch("http://ehealthuz.pythonanywhere.com/register/", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        if (result == 1) {
          navigate('/signUp')
        } else {
          setToken(result.slice(1, -1));
          localStorage.setItem("token", result.slice(1, -1))
        }
      })
      .catch((error) => console.log("error", error));
  }

  let data = [
    { id: 1, url: "/", element: <Home /> },
    { id: 2, url: "about_us", element: <AboutUs /> },
    { id: 3, url: "contact", element: <Contact /> },
    {
      id: 4,
      url: "signUp",
      element: (
        <Registration
          email={email}
          password={password}
          username={username}
          first_name={first_name}
          last_name={last_name}
          setFirstname={setFirstname}
          setEmail={setEmail}
          setName={setName}
          setUsername={setUsername}
          setPassword={setPassword}
          type={type}

        />
      ),
    },
    {
      id: 5,
      url: "femaleOrMale",
      element: <FemaleOrMale SignApp={SignApp} setGender={setGender} />,
    },
    { id: 6, url: "faq", element: <Question /> },
    { id: 7, url: "login", element: <Login  settype={settype}/> },
    {
      id: 8,
      url: "reference",
      element: (
        <Reference
          setweight={setweight}
          setheight={setheight}
          setAge={setAge}
        />
      ),
    },
    {
      id: 9,
      url: "whoIsTheUser",
      element: <WhoIsTheUser settype={settype} />,
    },
    { id: 10, url: "goal", element: <Goal /> },
    {
      id: 11,
      url: "foods",
      element: <Foods setcan_not_dieta={setcan_not_dieta} />,
    },
    {
      id: 12,
      url: "foods&sport",
      element: <SportFood setcan_not_sports={setcan_not_sports} setcan_not_dieta={setcan_not_dieta} />,
    },
    {
      id: 13,
      url: "sports",
      element: <Sports setcan_not_sports={setcan_not_sports} />,
    },
    {
      id: 14,
      url: "direction",
      element: <Direction settype_loss={settype_loss} />,
    },
    { id: 15, url: "loader", element: <Loader /> },
    { id: 16, url: "loaderAcc", element: <Loader text="Sizning ma'lumotingiz bazaga qo'shilmoqda!" link="/expertPerson"/> },
    { id: 17, url: "conclusion", element: <Conclusion token={token} /> },
    {
      id: 18,
      url: "otherAccount",
      element: (
        <OtherCreateAccount first_name={first_name} last_name={last_name} type={type} />
      ),
    },
    { id: 19, url: "search_person", element: <SearchPerson /> },
    { id: 20, url: "search_deatolog_all", element: <AllDietolog /> },
    { id: 21, url: "search_trainer_all", element: <AllTrainer /> },
    { id: 22, url: "otherAccSettings", element: <OtherAccSettings /> },
    { id: 22, url: "userSettings", element: <UserSettings /> },
    { id: 22, url: "expertPerson", element: <PersonExpert /> },
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
  return <Routes>
    {dataMapForRoute}
    <Route path="/singilur" element={<SingleSearchPersonCompanity />}>
      <Route path=":userId" element={<SingleSearchPersonCompanity />} />
    </Route>
  </Routes>;
};



