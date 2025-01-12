function login() {
    let username = document.getElementById("username");
    let passwd = document.getElementById("passwd");

    if (username.value == "" || passwd.value == "") {
        alert("empty information, pleases input again");
    }else {
        if (confirm("Login succesfully")) {
            window.open("index.html", "_self");
        }
    }
}