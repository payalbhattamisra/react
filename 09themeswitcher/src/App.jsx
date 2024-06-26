 
import { useEffect ,useState} from 'react';
import './App.css'
import { ThemeProvider } from './contexts/Theme'
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';

function App() {
  const [themeMode, setthemeMode] = useState('light');
  const darkTheme=()=>{
   setthemeMode('dark');
  }
  const lightTheme=()=>{
    setthemeMode('light');
   }

   //actual change in theme

   useEffect(()=>{
    document.querySelector('html').classList.remove('dark','light');
    document.querySelector('html').classList.add(themeMode);
   },[themeMode])
  return (
    <>
     {/* access */}
     <ThemeProvider value={{ themeMode,darkTheme,lightTheme}}> 
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                     {/* theme btn*/}
                     <ThemeBtn/>   
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       {/*card*/}
                       <Card/>
                    </div>
                </div>
            </div>
    </ThemeProvider>
    </>
  )
}

export default App
