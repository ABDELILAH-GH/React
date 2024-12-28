import React from "react";

export default function Controle1() {
  const Butteurs = [
    {
      id: 1,
      player: {
        player_id: 19779,
        player_name: "Karim Benzema",
      },
      team: "Real Madrid",
      goals: {
        home: 7,
        away: 5,
      },
    },
    {
      id: 2,
      player: {
        player_id: 4934,
        player_name: "Robert Lewandowski",
      },
      team: "FC Bayern Munich",
      goals: {
        home: 9,
        away: 2,
      },
    },
  ];
  //q1
//   const getButsOfPalyer = (name) => {
//     const player = Butteurs.find(
//       (buteur) => buteur.player.player_name === name
//     );
//     if (player) {
//       return Butteurs.player.goals.home + player.goals.away;
//     }
//   };
//    console.log(getButsOfPalyer('Robert Lewandowski'))


//Q2
//   const getPlayerPlusTreeAway = () => {
//     return Butteurs.filter((b) => b.goals.away > 3).map(
//       (b) => b.player.player_name
//     );
//   };
//   console.log(getPlayerPlusTreeAway());

//Q3
// const getMaxNbGoalsHome = () => {
//   return Math.max(...Butteurs.map(b=>b.goals.home))
// }
// console.log(getMaxNbGoalsHome())


//Q4
// const AddGoalsAway = () => {
//    return Butteurs.reduce((total,b) => total + b.goals.away,0)
// }
// console.log(AddGoalsAway())


//Q5 
// const TeamName = () => {
//    const butsAway = Butteurs.map(b=> b.goals.away)
//    const maxAwayGoals = (Math.max(...butsAway))
//    const team= Butteurs.find(b=>b.goals.away === maxAwayGoals)
//    return team.team
// }
// console.log(TeamName())

//Q6
// const newElement = {
//    id: 21,
//    player: {
//      player_id: 4908,
//      player_name: "Halland",
//    },
//    team: "M.city",
//    goals: {
//      home: 9,
//      away: 9,
//    },
//  };
//  const Buteures2 = [...Butteurs,newElement]
//  console.log(Buteures2)

 


  return <div></div>;
}
