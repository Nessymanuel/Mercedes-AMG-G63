import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TestDriveForm } from './components/TestDriveForm';
import { Home } from './screens/Home';

 function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/test-drive" element={<TestDriveForm />} />
            </Routes>
        </Router>
    );
}
export default App
