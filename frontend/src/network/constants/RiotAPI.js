export default {
    //Base API constants
    protocol: "https://",
    apiURL: ".api.riotgames.com/tft/",
    key: "?api_key=",
    keyValue: "RGAPI-f5d352e9-a4fc-41e5-8abc-0bcb38a9fe6c",

    //API server region constant
    europe: "europe",

    //GET for each API endpoint
    nameByName: "summoner/v1/summoners/by-name/",
    statsBySummonerId: "league/v1/entries/by-summoner/",
    matchesByPuuid: "match/v1/matches/by-puuid/",
    matchByMatchId: "match/v1/matches/",

    //Extra params needed for matches API
    matchesParams: "/ids?count=10&api_key=",

}