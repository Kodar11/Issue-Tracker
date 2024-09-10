// import IssueForm from "./IssueForm";
// import History from "./History";
// import LoginForm from "./LoginForm";
// import Register from "./Register";
// import Reports from "./Reports";
// import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
// import Home from "./Home";


// function App(){
//   return(
//     <>
      
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Register />} ></Route>
//           <Route path="/login" element={<LoginForm />} ></Route>
//           <Route path="/issue-history" element={<History/>}></Route>
//           <Route path="/issue-form" element={<IssueForm />} ></Route>
//           <Route path="/reports" element={<Reports />} ></Route>
//           <Route path="/home" element={<Home /> }/>
//           </Routes>
//       </BrowserRouter>
//     </>
//   );
// } 

// export default App;





import IssueForm from "./IssueForm";
import History from "./History";
import LoginForm from "./LoginForm";
import Register from "./Register";
import Reports from "./Reports";
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Home from "./Home";

import ProtectedRoute from "./ProtectdRouter";



function App(){
  return(
    <>
      {/* <IssueForm/> */}
      {/* <History/> */}
      {/* <LoginForm/> */}
      {/* <Register/> */}
      {/* <Reports/>   */}
      {/* <Home/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} ></Route>
          <Route path="/login" element={<LoginForm />} ></Route>
          <Route path="/issue-history" element={<ProtectedRoute element  = {<History/>}/>} el={"Hello"} ></Route>
          <Route path="/issue-form" element={<ProtectedRoute element = {<IssueForm />}/>} ></Route>
          <Route path="/reports" element={<ProtectedRoute element = {<Reports />}/>} ></Route>
          {/* <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} /> */}
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />

          </Routes>
      </BrowserRouter>
    </>
  );
} 

export default App;