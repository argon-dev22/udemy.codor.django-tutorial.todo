import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './page/Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<Home />} />
          <Route path='/task' element={<div>Task</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
