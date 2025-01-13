function login() {
    let username = document.getElementById("username");
    let passwd = document.getElementById("passwd");

    if (username.value == "" || passwd.value == "") {
        alert("账号密码为空，重新输入");
    }else {
        if (confirm("登录成功")) {
            window.open("index.html", "_self");
        }
    }
}