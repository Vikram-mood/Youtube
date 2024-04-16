import "./App.css"
import Header from "./components/Header";
import Body from "./components/Body";
import store from "./utils/store";
import {BrowserRouter, RouterProvider,createBrowserRouter} from "react-router-dom"
import {Provider} from "react-redux";

import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchResult from "./components/SearchResult";

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<Body />,
    children:[
      {
        path:"/",
        element:<MainContainer />
      },
      {
        
          path:"watch",
          element:<WatchPage />
        
      },
      {
        path:'results',
        element:<SearchResult />
      }
      
    ]
  },
  
])

const App=()=>{
  return (
    <Provider store={store}>
      <div>
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
