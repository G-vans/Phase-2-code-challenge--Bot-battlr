import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, handleClick, handleDelete }) {
  // Your code here
  const displayBots = bots.map((bot) => (
    <BotCard 
    key={bot.id} 
    bot={bot} 
    handleClick={handleClick} 
    handleDelete={handleDelete} />
  ))
  return (
    <div className="ui four column grid">
      <h3 className="heading">Bots Collection List</h3>
      <div className="row">
        {displayBots}
      </div>
    </div>
  );
}

export default BotCollection;