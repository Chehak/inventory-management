import { BrowserRouter ,Route, Routes} from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import ManageTypes from './components/ManageTypes';


function App() {
  return (  
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Body/>}>
    <Route path='/type/:id' element={<Body/>}/>
    <Route path='/types' element={<ManageTypes/>}/>
    </Route>
    </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;
