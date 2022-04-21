const newsPapers = document.querySelectorAll(".newspaper-item");
const subNewsPapers = document.querySelectorAll(".list-sub-newspaper");
const iconShow = document.querySelector(".view");
const iconHidden = document.querySelector(".hidden");

for (const newsPaper of newsPapers) {
    for (const subNewsPaper of subNewsPapers) {
        if (newsPaper.clientHeight < 55) {
            subNewsPaper.style.display = "none";
            iconShow.style.display = "none";
            iconHidden.style.display = "initial"
        }
        newsPaper.addEventListener("click", showSubNewsPaper);

        function showSubNewsPaper() {
            const isHidden = newsPaper.clientHeight < 55
            if (isHidden) {
                // ?An Hien Sub Newspaper
                subNewsPaper.style.display = "block"
                iconShow.style.display = "inline-block"
                iconHidden.style.display = "none"
                // ?Doi mau boder va font
                newsPaper.classList.add('change-color')
                // ?Xem chieu cao
                // console.log(newsPaper.clientHeight);
            } else {
                subNewsPaper.style.display = "none";
                iconShow.style.display = "none";
                iconHidden.style.display = "initial"
                newsPaper.classList.remove('change-color')
            }

        }
    }
}