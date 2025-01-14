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

function reg() {
    let username = document.getElementById("username");
    let passwd = document.getElementById("passwd");
    let deter_passwd = document.getElementById("deter_passwd");

    if (username.value == "" || passwd.value == "" || deter_passwd == "") {
        alert("账号密码为空，重新输入");
    }else {
        if (passwd.value == deter_passwd.value) {
            if (confirm("注册成功")) {
                window.open("index.html", "_self");
            }
        }else {
            alert("密码不一致");
        }
    }
}