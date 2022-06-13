import { Route } from 'react-router-dom';
import { Home } from './../components/home/Home';
import { MyCabinet } from './../components/my_cabinet/My_Cabinet';
import { News } from './../components/news/News';
import { AboutUs } from './../components/about_us/AboutUs';
import { Contact } from './../components/contact/Contact';
import Registration from './../components/registration/Registration';
import { FemaleOrMale } from './../components/registration/femaleOrMale/FemaleOrMale';
import Question from './../components/question/Question2';
import { Suspense } from 'react';
import { Spin } from 'antd';

const data = [
  { id: 1, url: "/", element: <Home /> },
  { id: 2, url: "my_cabinets", element: <MyCabinet /> },
  { id: 3, url: "news", element: <News /> },
  { id: 4, url: "about_us", element: <AboutUs /> },
  { id: 5, url: "contact", element: <Contact /> },
  { id: 6, url: "signUp", element: <Registration /> },
  { id: 6, url: "femaleOrMale", element: <FemaleOrMale /> },
  { id: 7, url: "faq", element: <Question /> },
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