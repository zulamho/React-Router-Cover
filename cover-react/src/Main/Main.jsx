import Text1 from "./Text1";
import Text2 from "./Text2";
import Home from "./Home";
import NotFound from "./NotFound";
import { Route, Redirect, Switch, useHistory } from "react-router-dom";
import Iframe from "./Contact";
function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/home">
          <Text1 />
        </Route>

        <Route path="/text2">
          <Text2 />
        </Route>

        <Route path="/Contact">
          <Iframe />
        </Route>

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </main>
  );
}
export default Main;
