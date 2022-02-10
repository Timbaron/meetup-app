import { Route } from "react-router-dom";

import AllMeetupPage from "./Pages/AllMeets";
import NewMeetupPage from "./Pages/NewMeetup";
import FavoritePage from "./Pages/Favorite";
function App() {
  return (
    <div>
      <Route path='/'>
        <AllMeetupPage />
      </Route>
      <Route path='/new-meetup/'>
        <NewMeetupPage />
      </Route>
      <Route path='/favorite'>
        <FavoritePage />
      </Route>
    </div>
  );
}

export default App;
