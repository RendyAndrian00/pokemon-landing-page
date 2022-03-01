import React, { Component } from "react";
// import JumbotronComponent from "./components/JumbotronComponent";
import NavbarComponent from "./components/NavbarComponents";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomeContainers from "./containers/HomeContainers";
import StatusCard from "./page/StatusCard";
import "./App.css"; 
import "./assets/styles/tailwind.css";
import CountPokemonComponent from "./components/CountPokemonComponent";
import CountPokemonItemComponent from "./components/CountPokemonItemComponent";

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="bg-indigo-500 pt-14 pb-2 px-3 md:px-8 h-auto">
          <NavbarComponent />
        </div>
        <div className="bg-indigo-500 pt-14 pb-28 px-3 md:px-8 h-auto">
          <div className="container mx-auto max-w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-8">
              <CountPokemonComponent/>
              <CountPokemonItemComponent/>
              <StatusCard
                color="purple"
                icon="faGift"
                title="Spesies"
                amount="898"
                percentage="1.10"
                percentageIcon="arrow_downward"
                percentageColor="orange"
                date="Since yesterday"
              />
              <StatusCard
                color="blue"
                icon="faMap"
                title="Location"
                amount="796"
                percentage="1796,"
                percentageIcon="arrow_upward"
                percentageColor="green"
                date="Since last month"
              />
            </div>
            {/* <JumbotronComponent /> */}
          </div>
        </div>
        <div className="px-3 md:px-8 h-auto -mt-24">
          <div className="container mx-auto max-w-full">
            <div className="grid grid-cols-1 px-4">
              {/* <NavbarComponent /> */}
              <BrowserRouter>
                <Routes>
                  <Route exact path="/" element={<HomeContainers />} />                  
                  <Route exact path="/:id" element={<HomeContainers />} />
                  <Route exact path="*" element={<Navigate to="/" />} />
                </Routes>
              </BrowserRouter>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
