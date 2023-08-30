import { Route, Routes } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';
import { ThemeProvider, createTheme } from '@mui/material';
import Layout from './components/layouts/Layout';
import { orange } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: orange[900],
    }
  },
});


function App(){
  return <div>
    <ThemeProvider theme={theme}>
    <main>
    <Layout>
    <Routes>
    <Route path='/' element={<Home />} />
    </Routes>
    </Layout>
    </main>
    </ThemeProvider>
    </div>
}

export default App;
