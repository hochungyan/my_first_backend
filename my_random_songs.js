function getRandomValueWithinRange(min,max)
{
    return Math.floor(Math.random()*(max -min+1)+min);
}

function getRandomSongs(){
sinatra_songs = 
[    "My Way",
    "Strangers in the Night",
    "Fly Me to the Moon",
    "I've Got You Under My Skin",
    "Come Fly with Me",
    "The Way You Look Tonight",
    "New York, New York",
    "I Get a Kick Out of You",
    "It Was a Very Good Year",
    "Young at Heart",
    "The Lady is a Tramp",
    "That's Life",
    "You Make Me Feel So Young",
    "The Summer Wind",
    "Night and Day",
    "The Best is Yet to Come",
    "All the Way",
    "Witchcraft",
    "Love and Marriage",
    "I've Got the World on a String"];


    random_index = getRandomValueWithinRange(0,sinatra_songs.length);
    return(sinatra_songs[random_index])
}
console.log(getRandomSongs());
module.exports = {
    getRandomSongs: getRandomSongs
};