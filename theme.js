var icon = document.getElementById("icon");
      icon.onclick = function () {
        document.body.classList.toggle("dark-theme");
        if (document.body.classList.contains("dark-theme")) {
          icon.src = "images/sun.png";
        } else {
          icon.src = "images/moon.png";
        }
      };
        const downloadButton = document.getElementById("downloadButton");
        downloadButton.addEventListener("click", function () {
          const a = document.createElement("a");
          a.href = "images/tengen-uzui-inosuke-3840x2160-18508 (1).jpg";
          a.download = "TengenUzui.png";
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        });

      const imgBox = document.querySelector('.img-box');
const img = document.querySelector('.main-img');

imgBox.addEventListener('mousemove', (e) => {
    let boxWidth = imgBox.offsetWidth;
    let boxHeight = imgBox.offsetHeight;
    let xAxis = ((e.offsetX - boxWidth / 2) / boxWidth) * 30; // tilt range
    let yAxis = ((e.offsetY - boxHeight / 2) / boxHeight) * -30;
    img.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

imgBox.addEventListener('mouseleave', () => {
    img.style.transform = `rotateY(0) rotateX(0)`;
});