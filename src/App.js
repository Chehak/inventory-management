import { BrowserRouter ,Route, Routes} from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import ManageTypes from './components/ManageTypes';
import Type from './components/Type';


function App() {
  return (  
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Body/>}>
    <Route path='/type' element={<Type/>}/>
    <Route path='/types' element={<ManageTypes/>}/>
    </Route>
    </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;
