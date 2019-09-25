// Settings for summarization api
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.meaningcloud.com/summarization-1.0",
    "method": "POST",
    "headers": {
        "content-type": "application/x-www-form-urlencoded"
    },
    "data": {
        "key": "d786ff4b264451fd2de354055e04f66a",
        "txt": "",
        "url": "",
        "doc": "",
        "sentences": "",
    }
}

// Submit button on click event
$("#submitButton").on("click", function (event) {
    event.preventDefault();

    if ($("#search-input").val() === "") {
        settings.data.txt = $("#text-input").val().trim();
        settings.data.url = $("#url-input").val().trim();
        settings.data.sentences = $("#sentences-input").val().trim();
    } else {
        settings.data.txt = $("#text-input").val().trim();
        settings.data.url = "https://en.wikipedia.org/wiki/" + $("#search-input").val().trim();
        settings.data.sentences = $("#sentences-input").val().trim();
    }

    $.ajax(settings).done(function (response) {
        $("#text-output").html(response.summary);
    });
});

// Random button on click event
$("#random").on("click", function (event) {
    event.preventDefault();

    settings.data.txt = "";
    settings.data.url = "https://en.wikipedia.org/wiki/Special:Random";
    settings.data.sentences = $("#sentences-input").val().trim();
    
    $.ajax(settings).done(function (response) {
        $("#text-output").html(response.summary);
    });
});

// Speech button on click event
$("#speechButton").on("click", function (event) {
    event.preventDefault();

    var params = $.param({
        key: 'a64321115a4341239e25f9def1867dac',
        src: $("#text-output").text(),
        // hl: 'en-us',
        hl: $("#language").val(),
        r: 0,
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });

    var url = "http://api.voicerss.org/?" + params;

    $("#audioPlayer").attr("src", url);
});

// Stop button on click event
$("#stopButton").on("click", function (event) {
    event.preventDefault();
    $("audio").attr("src", "");
});