
$("#submitButton").on("click", function(event){
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
        "txt": $("#text-input").val().trim(),
        "url": $("#url-input").val().trim(),
        "doc": "",
        "sentences": $("#sentences-input").val().trim(),
    }
}

// var sent = $("#sentences-input").va;().trim
// var url = $("#url-input").val().trim();


// console.log(txt)
// console.log(url)
$.ajax(settings).done(function (response) {
    console.log(response.summary);
    $("#text-output").html(response.summary)
    
    
});
})