import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/mainComponent';
import ResumeBuilder from './components/printComponent';
import { DataProvider } from './context/DataContext';

function App() {
    return (
        <DataProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/top-cv-project-hooks/" element={<Main />} />
                    <Route path="/top-cv-project-hooks/preview" element={<ResumeBuilder />} />
                </Routes>
            </BrowserRouter>
        </DataProvider>
    );
}

export default App;
