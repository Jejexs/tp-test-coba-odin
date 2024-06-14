export function getTeamScore(teamDices: string[]): number {
    let score = 0;
    let blueDices = 0;
    let orangeDices = 0;
    let greenDices = 0;
    let grayDices = 0;
    let yellowDices = 0;
    let pinkDices = 0;
    let allDices = teamDices.length;

    for (let dice of teamDices) {
        switch (dice) {
            case 'green':
                greenDices++;
                break;
            case 'gray':
                grayDices++;
                break;
            case 'orange':
                orangeDices++;
                break;
            case 'yellow':
                yellowDices++;
                break;
            case 'blue':
                blueDices++;
                break;
            case 'pink':
                pinkDices++;
                break;
        }
    }

    score += greenDices * 1;
    score += grayDices * 2;
    score += yellowDices * -1;

    if (orangeDices > 0) {
        score += orangeDices * (allDices % 2 === 0 ? 2 : 1);
    }

    score += pinkDices * 3;

    return score;
}

export function getTeamScoreWithBlue(teamDices: string[], otherTeamDices: string[]): number {
    let score = getTeamScore(teamDices);
    let blueDices = teamDices.filter(dice => dice === 'blue').length;

    score += blueDices * otherTeamDices.length;
    
    return score;
}

export function isEqual(team1: string[], team2: string[]): boolean {
    return getTeamScoreWithBlue(team1, team2) === getTeamScoreWithBlue(team2, team1);
}