import React from 'react';


function OnPressButton() {
  const [clicked, setClicked] = React.useState(false);

  const handlePress = (syntheticEvent) => {
    console.log('Event type:', syntheticEvent.type);
    setClicked(true);
  };

  return (
    <section className="panel">
      <h2>Synthetic Event</h2>
      <button onClick={handlePress}>OnPress</button>
      {clicked && <p className="greeting">I was clicked</p>}
    </section>
  );
}

export default OnPressButton;
