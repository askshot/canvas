function loadContent() {
    var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var json = JSON.parse(this.responseText);
            console.log(json.feed.entry.content);
            document.getElementById("signupcount").innerHTML = "Join 143 others who have signed up!"
        }
    };
    xhttp.open("GET", "https://spreadsheets.google.com/feeds/cells/1pgAm_2PU4P97m1bpHqWDMex-4e-TLBhndFKG1iUGpRg/1/public/full?alt=json", true);
    console.log("https://spreadsheets.google.com/feeds/cells/1pgAm_2PU4P97m1bpHqWDMex-4e-TLBhndFKG1iUGpRg/1/public/full?alt=json");
    xhttp.send();
};