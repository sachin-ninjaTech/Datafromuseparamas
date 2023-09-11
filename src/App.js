import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UnSubscribe from './pages/unsubscribe/unSubscribe';
import "../src/custom.css";


function App() {
  return (
    <Router>
    <Routes>
       <Route path="/notifications/unsubscribe-email" element={<UnSubscribe />} />
    </Routes>
  </Router>
  );
}
export default App; 






