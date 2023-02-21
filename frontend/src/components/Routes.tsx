import { Redirect, Route, Switch } from "react-router-dom";

import { ConfirmBooking } from "./ConfirmBooking";
import Flights from "./Flights";

const Routes = () => {
  return (
    <Switch>
      <Route path="/flights">
        <Flights />
      </Route>
      <Route path="/booking-confirm">
        <ConfirmBooking />
      </Route>
      <Route path="*">
        <Redirect to="flights" />
      </Route>
    </Switch>
  );
};

export default Routes;
