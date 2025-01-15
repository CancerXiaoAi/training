function login() {
    let username = document.getElementById("username");
    let passwd = document.getElementById("passwd");

    if (username.value == "" || passwd.value == "") {
        alert("账号密码为空，重新输入");
    } else {
        let localName = localStorage.getItem("name");
        let localPasswd = localStorage.getItem("passwd");

        if (localName == null || localPasswd == null) {
            alert("请注册用户");
            return;
        }
        if ((username.value != localName) || (passwd.value != localPasswd)) {
            alert("账号或密码错误");
            return;
        }
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
    } else {
        if (passwd.value == deter_passwd.value) {
            localStorage.setItem("name", username.value);
            localStorage.setItem("passwd", passwd.value);
            if (confirm("注册成功")) {
                window.open("index.html", "_self");
            }
        } else {
            alert("密码不一致");
        }
    }
}