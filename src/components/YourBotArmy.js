import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ bots, handleClick, handeleDelete }) {
  //your bot army code here...
  const displayArmyBots = bots.map((bot) => (
    <BotCard 
    key={bot.id} 
    bot={bot} 
    handleClick={handleClick} 
    handleDelete={handeleDelete} />
  ))

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <h4>Your Army Bots will appear here.</h4>
        <div className="row bot-army-row">
          {displayArmyBots}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
