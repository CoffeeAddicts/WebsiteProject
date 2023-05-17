const menu = document.getElementById("menu");



Array.from(document.getElementsByClassName("menu-item"))
  .forEach((item, index) => {
    item.onmouseover = () => {
      menu.dataset.activeIndex = index;
    }
  });


// function myFunction(){
//   const test1 = document.getElementById("test1");
//   test1.remove();
// }

