import React from 'react';

const players = [
  { name: 'Rohit Sharma', score: 205 },
  { name: 'Virat Kohli', score: 102 },
  { name: 'Shubman Gill', score: 33 },
  { name: 'Jadeja', score: 88 },
  { name: 'Suryakumar Yadav', score: 54 },
  { name: 'Hardik Pandya', score: 56 },
  { name: 'Ravindra Jadeja', score: 45 },
  { name: 'MS Dhoni', score: 88 },
  { name: 'Jasprit Bumrah', score: 20 },
  { name: 'Mohammed Shami', score: 15 },
  { name: 'Kuldeep Yadav', score: 30 },
];

function ListofPlayers() {
  const belowSeventy = players.filter((player) => player.score < 70);

  return (
    <div>
      <h2>ListofPlayers</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>

      <h2>Players with Score Below 70</h2>
      <ul>
        {belowSeventy.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListofPlayers;
