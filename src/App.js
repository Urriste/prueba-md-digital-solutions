import R2 from "./components/r2/R2.jsx";
import R3 from "./components/r3/R3.jsx";
import R4 from "./components/r4/R4.jsx";
import Main from "./components/Main";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Main></Main>
      </Route>
      <Route exact path="/r2">
        <R2></R2>
      </Route>
      <Route exact path="/r3">
        <R3></R3>
      </Route>
      <Route exact path="/r4">
        <R4></R4>
      </Route>
    </Router>
  );
}

export default App;
