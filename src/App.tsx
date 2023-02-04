import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseLine from '@mui/material/CssBaseline'
import SignInSide from './components/signinSide'
import BookAppointmentForm from './components/bookAppointmentForm'
import './index.css';
import TattoDetailsForm from './components/tattooDetails';

function App() {

  return (
    <div className="App">
      <CssBaseLine enableColorScheme />
      <SignInSide />
      <BookAppointmentForm />
      <TattoDetailsForm />
    </div>
  )
}

export default App
