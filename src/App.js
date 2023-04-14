import { useState } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";

function Home(){
 const [n,setn]= useState(0)
  return(<div>
    <button onClick={()=> setn(n-1)}>-</button><span>{n}</span><button onClick={()=> setn(n+1)}>+</button>
  </div>)
}

function SignIn(){
  return(<div>SignIn</div>)
}

function SignUp(){
  return(<div>SignUp</div>)
}

function Profile(){
  return(<div>Profile</div>)
}

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/UserProfile" element={<Profile />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
