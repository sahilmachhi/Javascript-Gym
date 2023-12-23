const boxes = document.querySelectorAll(".box");
const body = document.querySelector("body");


boxes.forEach((box) => {
  box.addEventListener("click", function () {
    // const colorId = box.getAttribute("id");
    switch (box) {
      case color1:
        body.style.backgroundColor = "red";
        console.log(color1);
        console.log(box);
        break;
      case color2:
        body.style.backgroundColor = "green";
        console.log(color2);
        console.log(box);
        break;
      case color3:
        body.style.backgroundColor = "blue";
        break;
      case color4:
        body.style.backgroundColor = "yellow";
        break;
      case color5:
        body.style.backgroundColor = "pink";
        break;
      case color6:
        body.style.backgroundColor = "orange";
        break;
      default:
        console.log("none clicked");
    }
  });
});

