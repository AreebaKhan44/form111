
import './App.css';

//import { Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/system';
import Navbar from './Navbar';
import Form from './Form';

const theme = createTheme({
  palette: {
    primary: {
      main: '#864313',
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
      <Container>
      <Form/>
      </Container>
      </ThemeProvider>
  )
}


