window.onload = () => {
    // banner text ease-in animate
    let bannerText = document.getElementById("banner_text_animate");
    bannerText.style.marginLeft = "0px";
    bannerText.style.color = "rgba(255, 255, 255, 1)";

    let ele = document.querySelectorAll(".item");
    for (let i = 0; i < ele.length; i++) {
        let hoverText = "暂无内容";
        ele[i].addEventListener("mouseenter", () => {
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
                    document.getElementById("web").innerText = "Website";
                    break;
                case "app":
                    document.getElementById("app").innerText = "Application";
                    break;
                case "smart":
                    document.getElementById("smart").innerText = "Smart home";
                    break;
                case "chat":
                    document.getElementById("chat").innerText = "Chat";
                    break;
                case "ai":
                    document.getElementById("ai").innerText = "AI";
                    break;
                case "iot":
                    document.getElementById("iot").innerText = "IoT";
                    break;
                case "games":
                    document.getElementById("games").innerText = "Games";
                    break;

                default:
                    break;
            }
        })
    }
}