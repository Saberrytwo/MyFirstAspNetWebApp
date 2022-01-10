$("#btnSend").click( function () {
    alert("From: " + $('#txtFrom').val() +
        ", Subject:  " + $('#txtSubject').val() +
        ", Message: " + $('#txtMsg').val());
    $("#olive").fadeToggle('slow');
})

