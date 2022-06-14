import { Suspense, lazy } from "react";
import { Route } from "react-router-dom";
import { Spin } from "antd";

import { Home } from "./../components/home/Home";

const Question = lazy(() => import("./../components/question/Question.jsx"));
const Foods = lazy(() => import("../components/login/foods/Foods"));
const AboutUs = lazy(() => import("./../components/about_us/AboutUs"));
const Contact = lazy(() => import("./../components/contact/Contact"));
const MyCabinet = lazy(() => import("./../components/my_cabinet/My_Cabinet"));
const Login = lazy(() => import("./../components/login/Login.jsx"));
const Goal = lazy(() => import("./../components/login/goal/Goal.jsx"));
const Direction = lazy(() => import("./../components/login/direction/Direction.jsx"));

const Registration = lazy(() =>
  import("./../components/registration/Registration.jsx")
);
const FemaleOrMale = lazy(() =>
  import("./../components/login/femaleOrMale/FemaleOrMale.jsx")
);
const WhoIsTheUser = lazy(() =>
  import("./../components/login/whoIsTheUser/WhoIsTheUser.jsx")
);
const Reference = lazy(() =>
  import("./../components/login/reference/Reference.jsx")
);


const data = [
  { id: 1, url: "/", element: <Home /> },
  { id: 2, url: "my_cabinets", element: <MyCabinet /> },
  { id: 4, url: "about_us", element: <AboutUs /> },
  { id: 5, url: "contact", element: <Contact /> },
  { id: 6, url: "signUp", element: <Registration /> },
  { id: 7, url: "femaleOrMale", element: <FemaleOrMale /> },
  { id: 8, url: "faq", element: <Question /> },
  { id: 9, url: "login", element: <Login /> },
  { id: 10, url: "reference", element: <Reference /> },
  { id: 13, url: "foods", element: <Foods /> },
  { id: 11, url: "whoIsTheUser", element: <WhoIsTheUser /> },
  { id: 14, url: "goal", element: <Goal /> },
  { id: 15, url: "direction", element: <Direction /> },
];
export const dataMapForRoute = data.map((d) => (
  <Route
    key={d.id}
    path={d.url}
    element={
      <Suspense
        fallback={
          <>
            <Spin />
          </>
        }
      >
        {d.element}
      </Suspense>
    }
  />
));
