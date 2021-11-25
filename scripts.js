//array of objects data
const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    price: 15.99,
    img: "./images/item-1.jpeg",
    description: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    price: 13.99,
    img: "./images/item-2.jpeg",
    description: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    price: 6.99,
    img: "./images/item-3.jpeg",
    description: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    price: 20.99,
    img: "./images/item-4.jpeg",
    description: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    price: 22.99,
    img: "./images/item-5.jpeg",
    description: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    price: 18.99,
    img: "./images/item-6.jpeg",
    description: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },

];

// setting and getting data to/from local storage
let menu_serialized = JSON.stringify(menu);

localStorage.setItem('menu', menu_serialized);

let menu_deserialized = JSON.parse(localStorage.getItem('menu'));


//functions
const menuItems = document.querySelector(".menu-items");

window.addEventListener("load", function () {
  let DisplayMenuItems = menu_deserialized.map(function (item) {
    
    return `<div class="menu-item">
          <img src=${item.img} alt=${item.title} class="image" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.description}
            </p>
          </div>
          <div>
          <button onchange='deleteItem' style="font-size:15px;color:red">Del</button>
          <button style="font-size:13px;color:green">Edit</button>
          </div>
        </div>`;
  });
  DisplayMenuItems = DisplayMenuItems.join("");
  // console.log(DisplayMenuItems);

  menuItems.innerHTML = DisplayMenuItems;
});

//CRUD
//add new item
const createNewItem = (value) => {
 
  let menu_serialized = JSON.stringify([...menu_deserialized, value]);
  localStorage.setItem('menu', menu_serialized);
  let menu_deserialized = JSON.parse(localStorage.getItem('menu'));
  return menu_deserialized;
}

createNewItem(
  {
    id: 7,
    title: "oreo test",
    price: 18.99,
    img: "./images/item-6.jpeg",
    description: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  }
)

//delete item
deleteItem = (id) =>{
    let newMenu = menu_deserialized.map((value) => {
         value.id !== id ? {...value, name:'Yangi Ism'} : value;
         return newMenu;
    });
        
    }


