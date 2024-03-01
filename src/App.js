import "./app.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import UrlShortner from './pages/UrlShortner';
import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <div className="text-container">
      <h2 className="text-center heading">Shortify</h2>
      <p>One stop solution for shortening your url!</p>
      </div>
      
      <UrlShortner/>
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={true}
newestOnTop={true}
theme="light"
/>
{/* Same as */}
<ToastContainer />
    </div>
  );
}

export default App;
