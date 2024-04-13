var objectAreas = {
    junior: document.getElementById("map_junior_park"),
    senior: Array.from(document.getElementsByClassName("map_senior_blocks")),
    senior_startArea: Array.from(document.getElementsByClassName("map_senior_startareas")),
    elementary1: Array.from(document.getElementsByClassName("map_elementary_vegetables")),
    elementary2: document.getElementById("map_elementary_green_and_dirts")
}

var maps = Array.from(document.getElementsByClassName("map"));

function random() {

    // junior
    Array.from(objectAreas.junior.children).forEach(obj => {
        obj.remove();
    })
    randomColorArray(["blue", "green", "red"], 2).forEach(color => {
        const img = document.createElement("img");
        img.src = `./media/${color}.jpg`;
        objectAreas.junior.append(img);
    })

    // senior
    objectAreas.senior_startArea.forEach(area => {
        area.children[0]?.remove();
    })
    objectAreas.senior.forEach(div => {
        div.children[0]?.remove();
    })

    const startArea = Math.floor(Math.random() * 2); // 0 or 1

    const check = document.createElement("img");
    check.src = "./media/check.png";
    objectAreas.senior_startArea[startArea].append(check);

    randomColorArray(["blue", "green"], 4).forEach((color, index) => {
        const img = document.createElement("img");
        img.src = `./media/${color}.jpg`;
        if (index <= 1 && startArea == 1) {
            objectAreas.senior[index].append(img);
        } else {
            objectAreas.senior[index + 2].append(img);
        }
    })

    // elementary1 紅色黃色蔬菜
    objectAreas.elementary1.forEach(div => {
        div.children[0]?.remove();
    })
    randomColorArray(["yellow", "red"], 2).forEach((color, index) => {
        const img = document.createElement("img");
        img.src = `./media/${color}.jpg`;
        objectAreas.elementary1[index].append(img);
    })
    // elementary2 綠色蔬菜土
    Array.from(objectAreas.elementary2.children).forEach(obj => {
        obj.remove();
    })
    randomColorArray(["green", "black"], 3).forEach((color, index) => {
        const img = document.createElement("img");
        img.src = `./media/${color}.jpg`;
        objectAreas.elementary2.append(img);
        if (index == 2) {
            const div = document.createElement("div");
            objectAreas.elementary2.append(div);
        }
    })

}

function screenshot() {
    htmlToImage.toJpeg(Array.from(document.getElementsByClassName("map")).find(ele => ele.classList.contains("select")), { quality: 0.95 })
        .then(function (dataUrl) {
            var link = document.createElement('a');
            link.download = 'Map.jpeg';
            link.href = dataUrl;
            link.click();
        });

}

function changeCategory(value) {
    maps.forEach((map, index) => {
        (index == parseInt(value)) ? map.classList.add("select") : map.classList.remove("select");
    })
}

function randomColorArray(colors, n) {
    return colors.flatMap(color => Array(n).fill(color)).sort(() => Math.random() - 0.5);
}


random()