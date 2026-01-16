
setInterval(() => {
            const canv = document.getElementById("table-canvas");
            const ctx = canv.getContext("2d");
            ctx.fillStyle = "darkgreen";
            ctx.fillRect(0, 0, canv.width, canv.height);
}, 1000 / 30);
