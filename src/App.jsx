import React from 'react';
import Count from './Container/Count';
import DropDownList from './Container/DropDownList';
import Password from './Container/Password';
import CountryClass from './Container/CountryClass';
import PasswordClass from './Container/PasswordClass';
import ChangeCount from './Container/ChangeCount';
import Course from './Container/Course';
import CourseClass from './Container/CourseClass';
import Timer from './Container/Timer';
import TimerFunctionlifecycle from './Container/TimerFunctionlifecycle';
import ChangeBackground from './Container/ChangeBackground';
import FormData from './Container/FormData';
import Calculator from './Container/Calculator';
import AscDscTitle from './Container/AscDscTitle';
import Products from './Container/Products';
import { Route, Routes } from 'react-router';
import Header from './component/Header';
import './App.css';
import ValidationYupFormik from './Container/ValidationYupFormik';
import LearnFormikYup1 from './Container/LearnFormikYup1';
import LearnGrid from './Container/LearnGrid';
// import TodoList from './Container/TodoList';

// import EmployeeData from './Container/EmployeeData';
// import Muibasics from './Container/Muibasics';
// import Theme from './Container/Theme';
// import TimerFunction from './Container/TimerFunction';

function App(props) {
  return (
    <div>

      {/* <ValidationUsingUsefield/> */}
      {/* <TodoList/> */}
      {/* <Header /> */}

      <Routes>
        <Route path='/count' element={<Count />} />
        <Route path='/password' element={<Password />} />
        <Route path='/products/:id' element={<Products />} />
        <Route path='/validationyupformik' element={<ValidationYupFormik />} />
        <Route path='/learnformikyup1' element={<LearnFormikYup1 />} />
        <Route path='/muigrid' element={<LearnGrid />}/>
      </Routes>
      {/* <Muibasics/> */}
      {/* <Count/> */}
      {/* <Password/> */}

      {/* <DropDownList/> */}

      {/* <CountryClass /> */}
      {/* <hr />
      <hr /> */}
      {/* <PasswordClass />
      <br />
      <br />
      <ChangeCount /> */}

      {/* <Course />

      <hr />
      <hr />

      <CourseClass/> */}


      {/* <Timer /> */}



      {/* <TimerFunction/> */}

      {/* <TimerFunctionlifecycle/> */}

      {/* <Products/> */}

      {/* <ChangeBackground/> */}

      {/* <Theme /> */}

      {/* <FormData /> */}

      {/* <Calculator/> */}

      {/* <AscDscTitle/> */}
      {  /* <EmployeeData/> */}
    </div>
  );
}

export default App;