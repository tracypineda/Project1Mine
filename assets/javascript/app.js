
$("#submitButton").on("click", function(event){
event.preventDefault();


    if ($("#search-input").val() === ""){
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
            "txt": $("#text-input").val().trim(),
            "url": $("#url-input").val().trim(),
            "doc": "",
            "sentences": $("#sentences-input").val().trim(),
        }
}
} else {
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
        "txt": $("#text-input").val().trim(),
        "url": "https://en.wikipedia.org/wiki/" + $("#search-input").val().trim(),
        "doc": "",
        "sentences": $("#sentences-input").val().trim(),
    }
}
}

$.ajax(settings).done(function (response) {
    $("#text-output").html(response.summary)
    
    
});
});

$("#random").on("click", function(event){
    event.preventDefault();
    
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
            "url": "https://en.wikipedia.org/wiki/Special:Random",
            "doc": "",
            "sentences": $("#sentences-input").val().trim(),
        }
    };
    $.ajax(settings).done(function (response) {        
        $("#text-output").html(response.summary)
        
        
    });
});

$("#speechButton").on("click", function(event) {
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

$("#stopButton").on("click", function(event) {
    event.preventDefault();
    $("audio").attr("src", "");
});