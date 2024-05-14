import { useState } from "react";

export default function Player({ name, symbol,isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setPlayerName] = useState(name);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
    {
      /* force a reload of the component */
    }
  }
  function handleChange(event) {
    setPlayerName(event.target.value);
    }

  let playername = <span className="player-name"> {newName}</span>;
  let btnText = "Edit";

  if (isEditing === true) {
    playername = <input type="text" required value={newName} onChange={handleChange}  />
    btnText = "Save";
    }
    //console.log({newName});
  return (
    <li className={isActive ? "active": undefined}>
      <span className="player">
      {playername}
        <span className="player-symbol"> {symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnText}</button>
    </li>
    
  );
}
