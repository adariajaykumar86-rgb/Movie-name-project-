function showDetails(movie) {
    let details = "";

    if (movie === "Saaho") {
        details = "Hero: Prabhas<br>Heroine: Shraddha Kapoor";
    } 
    else if (movie === "Leo") {
        details = "Hero: Vijay<br>Heroine: Trisha";
    } 
    else if (movie === "Master") {
        details = "Hero: Vijay<br>Heroine: Malavika Mohanan";
    }

    document.getElementById("result").innerHTML = details;
}
