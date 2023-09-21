function displaySeason() {
    var selectedMonth = document.getElementById("monthSelect").value;
    var season;

    switch (selectedMonth) {
        case 'December':
        case 'January':
        case 'February':
            season = 'Winter';
            break;
        case 'March':
        case 'April':
        case 'May':
            season = 'Spring';
            break;
        case 'June':
        case 'July':
        case 'August':
            season = 'Summer';
            break;
        case 'September':
        case 'October':
        case 'November':
            season = 'Fall';
            break;
        default:
            season = 'Invalid month';
            break;
    }

    document.getElementById("seasonDisplay").innerHTML = "Season: " + season;
}