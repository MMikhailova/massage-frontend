
import './App.css';

import '@fontsource-variable/cinzel';
// import Slider from './components/Carousel';


// import { useEffect, useState } from 'react';
// import { blogArticlesVm } from './api/viewModels/getBlogArticlesVm';
import ResponsiveAppBar from './components/NavBar';
import Banner from './components/Banner';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          fontFamily: "font-family: 'Montserrat', sans-serif",
          fontSize: "1.1em",
          fontWeight: "300",
         
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontFamily: "font-family: 'Montserrat', sans-serif",
          fontSize: "1.1em",
          fontWeight:"500",
           fontStyle: "Italic"
        },
      },
    },
  },
});

function App() {
 
  // const [blogData, setBlogData] = useState([])
  //  const [isLoading, setIsLoading] = useState(true);
   
  // useEffect(() => { blogArticlesVm("https://strapi-production-7702.up.railway.app/api/blogs?populate=*")
  //   .then((vm) => setBlogData(vm))
  //   .then((res) => {
  //     setTimeout(() => {
  //       setIsLoading(false);
  //     }, 2000);
  //   }); }, [])
  // console.log(blogData)
// document.body.style.overflow = "hidden";
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <ResponsiveAppBar />
        <Banner />
        {/* <Slider data={blogData} isLoading={isLoading} /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
