import React from 'react';
import RoutesApp from './routes/RoutesApp';
import { ThemeProvider, useTheme} from './themes/ThemeContext';



const App = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <RoutesApp />
      </div>
    </ThemeProvider>
  );
};




export default App
;