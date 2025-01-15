window.onload = () => {
    // banner text ease-in animate
    let bannerText = document.getElementById("banner_text_animate");
    bannerText.style.marginLeft = "0px";
    bannerText.style.color = "rgba(255, 255, 255, 1)";
    let hoverText = "暂无内容"; 
    let ele = document.querySelectorAll(".item");
    for (let i = 0; i < ele.length; i++) {
        let original;
        ele[i].addEventListener("mouseenter", () => {
            original = ele[i].innerText;
            switch (ele[i].id) {
                case "web":
                    document.getElementById("web").innerText = hoverText;
                    break;
                case "app":
                    document.getElementById("app").innerText = hoverText;
                    break;
                case "smart":
                    document.getElementById("smart").innerText = hoverText;
                    break;
                case "chat":
                    document.getElementById("chat").innerText = hoverText;
                    break;
                case "ai":
                    document.getElementById("ai").innerText = hoverText;
                    break;
                case "iot":
                    document.getElementById("iot").innerText = hoverText;
                    break;
                case "games":
                    document.getElementById("games").innerText = hoverText;
                    break;

                default:
                    break;
            }
        })
        ele[i].addEventListener("mouseleave", () => {
            switch (ele[i].id) {
                case "web":
                    document.getElementById("web").innerText = original;
                    break;
                case "app":
                    document.getElementById("app").innerText = original;
                    break;
                case "smart":
                    document.getElementById("smart").innerText = original;
                    break;
                case "chat":
                    document.getElementById("chat").innerText = original;
                    break;
                case "ai":
                    document.getElementById("ai").innerText = original;
                    break;
                case "iot":
                    document.getElementById("iot").innerText = original;
                    break;
                case "games":
                    document.getElementById("games").innerText = original;
                    break;

                default:
                    break;
            }
        })
    }
}