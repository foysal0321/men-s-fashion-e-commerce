import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="">
      <RouterProvider router={router}>
        
      </RouterProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
