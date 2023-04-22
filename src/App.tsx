import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseLine from '@mui/material/CssBaseline'
import BookAppointmentForm from './components/bookAppointmentForm'
import './index.css';

function App() {

  return (
    <div className="App">
      <CssBaseLine enableColorScheme />
      <BookAppointmentForm />
    </div>
  )
}

export default App
