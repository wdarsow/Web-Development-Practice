let movieArray = [
    {
        title: "The Terminator",
        rating: "4.5 stars",
        hasWatched: true
    },
    {
        title: "Speed",
        rating: "4 stars",
        hasWatched: true
    },
    {
        title: "Barney",
        rating: "3 stars",
        hasWatched: false
    }
]

//console.log(movieArray);

movieArray.forEach(function(movie) {
    let seen = "";
    if(!movie.hasWatched) {
        seen = "not "
    }
    console.log("You have " + seen + "seen " + movie.title + " - " + movie.rating);
})