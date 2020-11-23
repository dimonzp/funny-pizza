import React from "react";
import "./App.sass";
import { Route } from "react-router-dom";
import Info from "./component/Info/Info";
import PizzaContainer from "./component/Pizza/PizzaContainer";
import DrinksContainer from "./component/Drinks/DrinksContainer";
import PizzaProfileContainer from "./component/Pizza/PizzaProfile/PizzaProfileContainer";
import RegistrationContainer from "./component/Login/RegistrationContainer";
import LoginContainer from "./component/Login/LoginContainer";
import HeaderContainer from "./component/Header/HeaderContainer";
import CartContainer from "./component/Cart/CartContainer";
import DrinkProfileContainer from "./component/Drinks/DrinkProfile/DrinkProfileContainer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HeaderContainer />

        <div>
          <Route
            exact
            path="/pizza/:id"
            component = {PizzaProfileContainer}
          />
          {/* like this */}
          <Route exact path="/pizza" component={PizzaContainer} />
          <Route exact path="/drinks" component = {DrinksContainer} />
          <Route
            exact
            path="/drinks/:id"
            component = {DrinkProfileContainer}
          />
          <Route path="/info" component = {Info} />
          <Route path="/login" component = {LoginContainer} />
          <Route path="/cart" component = {CartContainer} />
          <Route
            path="/registration"
            component = {RegistrationContainer}
          />
        </div>
      </div>
    );
  }
}

export default App;
