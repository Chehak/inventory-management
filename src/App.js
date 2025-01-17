import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import ManageTypes from "./components/ManageTypes";
import Type from "./components/Type";
import { Provider } from "react-redux";
import { store } from "./utils/appStore";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/type/:typeId" element={<Type />} />
              <Route path="/types" element={<ManageTypes />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
