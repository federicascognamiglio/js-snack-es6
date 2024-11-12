// DATI
const teams = [
    {nome: "Napoli", points: 0, fouls: 0},
    {nome: "Juventus", points: 0, fouls: 0},
    {nome: "Inter", points: 0, fouls: 0},
    {nome: "Milan", points: 0, fouls: 0},
];

const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// ESECUZIONE LOGICA 

const newTeams = [];
for (let i = 0; i < teams.length; i++) {
    const curTeam = teams[i];
    curTeam.points = getRandomNum (1, 50);
    curTeam.fouls = getRandomNum (1, 50);
    newTeams.push(curTeam.nome, curTeam.fouls);
}

console.log(newTeams);