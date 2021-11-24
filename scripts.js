const menuItems = document.querySelector(".menu-items");

window.addEventListener("DOMContentLoaded", function () {
  let DisplayMenuItems = menu.map(function (item) {
    // console.log(item);

    return `<div class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.description}
            </p>
          </div>
        </div>`;
  });
  DisplayMenuItems = DisplayMenuItems.join("");
  console.log(DisplayMenuItems);

  menuItems.innerHTML = DisplayMenuItems;
});