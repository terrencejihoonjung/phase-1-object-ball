function gameObject() {
    let gameObject = {
        home: {
            teamName:'Brooklyn Nets',
            colors:['black', 'white'],
            player: {
                'Alan Anderson': {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                'Reggie Evans': {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                'Brook Lopez': {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                'Mason Plumlee': {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                'Jason Terry': {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['turquoise', 'purple'],
            player: {
                'Jeff Adrien': {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                'Bismak Biyombo': {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                'DeSagna Diop': {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                'Ben Gordon': {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                'Brendan Haywood': {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    }
    return gameObject;
}

function listAllPlayers(game) {
    return Object.entries(Object.assign({}, game.home.player, game.away.player));
}

function numPointsScored(name) {
    const game = gameObject();
    const entries = listAllPlayers(game);
    const person = entries.find(player => player[0] === name); 
    return person[1].points;
}

function shoeSize(name) {
    const game = gameObject();
    const entries = listAllPlayers(game);
    const person = entries.find(player => player[0] === name); 
    return person[1].shoe;
}

function teamColors(team) {
    const teamEntries = Object.entries(gameObject());
    let colors;
    teamEntries.forEach(gameType => {
        if (gameType[1].teamName === team) {
            colors = gameType[1].colors;
        }
    });
    return colors;
}

function teamNames() {
    const game = Object.entries(gameObject());
    return game.map(gameType => gameType[1].teamName);
}

function playerNumbers(team) {
    const gameType = Object.entries(gameObject()).find(gameType => gameType[1].teamName === team);
    const players = Object.entries(gameType[1].player);
    return players.map(player => player[1].number);
}

function playerStats(name) {
    const allPlayers = listAllPlayers(gameObject());
    const player = allPlayers.find(player => player[0] === name);
    return player[1];
}

// find, map, forEach, filter
function bigShoeRebounds() {
    let playerShoe;
    let bigShoe = 0;
    const allPlayers = listAllPlayers(gameObject());
    const player = allPlayers.forEach(player => {
        if (player[1].shoe > bigShoe) {
            playerShoe = player[1];
        }
    });
    return playerShoe.rebounds;
}

function mostPointsScored() {
    const allPlayers = listAllPlayers(gameObject());
    let maxPoints = 0;
    allPlayers.forEach(player => {
        if (player[1].points > maxPoints) {
            maxPoints = player[1].points;
        }
    });
    return maxPoints;
}

function winningTeam() {
    let nets = 0;
    let hornets = 0;
    const game = gameObject();
    const netsPlayers = game.home.player;
    const hornetsPlayers = game.away.player;
    nets = addPoints(netsPlayers, nets);
    hornets = addPoints(hornetsPlayers, hornets);
    return (nets > hornets) ? (game.home.teamName) : (game.away.teamName);
}

function addPoints(players, total) {
    for (let person in players) {
        total += players[person].points;
    }
    return total;
}

function playerWithLongestName() {
    const allPlayers = listAllPlayers(gameObject());
    return allPlayers.reduce(findLongestName, '');
}

function findLongestName(name, player) {
    if (player[0].length > name.length) {
        name = player[0];
    }
    return name;
}

function doesLongNameStealATon() {
    const allPlayers = Object.assign({}, gameObject().home.player, gameObject().away.player)
    const playerLongestName = playerWithLongestName();
    const steals = mostSteals();
    if (allPlayers[playerLongestName].steals === steals) {
        return true;
    }
    return false;

}

function mostSteals() {
    const allPlayers = listAllPlayers(gameObject());
    return allPlayers.reduce((count, player) => {
        if (player[1].steals > count) {
            count = player[1].steals;
        }
        return count;
    }, 0);
}