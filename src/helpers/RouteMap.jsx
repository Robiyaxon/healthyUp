import { Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';
import { Spin } from 'antd';

import { Home } from './../components/home/Home';
import { MyCabinet } from './../components/my_cabinet/My_Cabinet';
import { News } from './../components/news/News';
import { AboutUs } from './../components/about_us/AboutUs';
import { Contact } from './../components/contact/Contact';

const Question = lazy(() => import("./../components/question/Question.jsx"));
const Login = lazy(() => import("./../components/login/Login.jsx"));
const Registration = lazy(() => import("./../components/registration/Registration.jsx"));
const FemaleOrMale = lazy(() => import("./../components/login/femaleOrMale/FemaleOrMale.jsx"));
const WhoIsTheUser = lazy(() => import("./../components/login/whoIsTheUser/WhoIsTheUser.jsx"));

const data = [

  { id: 1, url: "/", element: <Home /> },
  { id: 2, url: "my_cabinets", element: <MyCabinet /> },
  { id: 3, url: "news", element: <News /> },
  { id: 4, url: "about_us", element: <AboutUs /> },
  { id: 5, url: "contact", element: <Contact /> },
  { id: 6, url: "signUp", element: <Registration /> },
  { id: 6, url: "femaleOrMale", element: <FemaleOrMale /> },
  { id: 7, url: "faq", element: <Question /> },
  { id: 7, url: "login", element: <Login /> },
  { id: 7, url: "whoIsTheUser", element: <WhoIsTheUser /> },
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