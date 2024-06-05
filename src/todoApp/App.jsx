import { Link, Outlet, Route, Router, Routes } from "react-router-dom";
import {AllTask,CompletedTask,LayOut} from './pages/all-in-one.js';

const App = () => {

  return (
    <div>
      APP
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<AllTask />} />
          <Route path="completed" element={<CompletedTask />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
