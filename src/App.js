import "./App.scss";
import { Switch, Route, BrowserRouter, Link } from "react-router-dom";
import Counter from "./Counter";
import Summary from "./Summary";

function App() {
  return (
    <div className="p-5">
      <BrowserRouter>
        <div className="mb-5">
          <Link to="/">
            Counter
          </Link>
          <Link to="/summary" className="ml-5">
            Summary
          </Link>
        </div>

        <Switch>
          <Route path="/summary" component={Summary}></Route>
          <Route path="/" component={Counter}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
