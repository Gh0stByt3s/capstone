import {Routes, Route} from 'react-router-dom'
import Navigation from './routes/navigation/navigation.component';

import Home from "./routes/home/home.components";

import SignIn from './routes/sign-in/sign-in.components';
const Shop = () =>{
  return(
    <div>
      I am a shopping page
    </div>
  )
}

const App = () =>{
  return(
    // Wrapping the whole app in the routes tag to declare that there should be routes to be expected inside the app
    <Routes>
      {/* Render the component on the element attribute when the path matches what's in the string */}
      < Route path='/' element={<Navigation />}>
      <Route index element={<Home/>} />
      {/* Render what is in the shopping component when path matches the string /shop */}
      < Route path='shop' element={<Shop />} />
      < Route path='sign-in' element={<SignIn />} />
        </Route>/>
      
    </Routes>
  )  
}

export default App;
