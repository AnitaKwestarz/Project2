let shop = document.getElementById("shop");

let shopItemsData = [
  {
    id: 0,
    name: "Ramen",
    manufacturer: "Akasaka",
    price: 29.99,
    description: "łagodna zupa z kurczakiem, pierożkami, warzywami i jajkiem",
    imgSrc: "food/ramen.jpg",
  },
  {
    id: 1,
    name: "Kurczak BBQ",
    manufacturer: "Starbucks",
    price: 24.99,
    description: "stripsy z kurczaka połączone z sosem BBQ",
    imgSrc: "food/sandwiches.jpg",
  },
  {
    id: 2,
    name: "Pierożki Gyoza",
    manufacturer: "Akasaka",
    price: 19.99,
    description: "gotowane na parze pierożki dim sum z tempeh i warzywami",
    imgSrc: "food/gyoza.jpg",
  },
  {
    id: 3,
    name: "Spaghetti bolognese",
    manufacturer: "Italiano",
    price: 25.99,
    description:
      "sos pomidorowo-warzywny z duszoną mieloną wołowiną z dodatkiem wieprzowiny",
    imgSrc: "food/spaghetti-bolognese.jpg",
  },
  {
    id: 4,
    name: "Sushi",
    manufacturer: "Akasaka",
    price: 29.99,
    description:
      "3 szt nigiri maślana, 3 szt nigiri tuńczyk, 3 szt nigiri łosoś, 6 szt maki, 5 szt california łosoś",
    imgSrc: "food/sushi.jpg",
  },
  {
    id: 5,
    name: "Gazpacho",
    manufacturer: "La Ibérica",
    price: 39.99,
    description:
      "pomidory, ogórek, cebula, papryka, oliwa, czosnek, ocet balsamiczny",
    imgSrc: "food/tomato-soup.jpg",
  },
  {
    id: 6,
    name: "Szarlotka",
    manufacturer: "Starbucks",
    price: 39.99,
    description: "szarlotka na ciepło z lodami waniliowymi",
    imgSrc: "food/apple-pie.jpg",
  },
  {
    id: 7,
    name: "Pizza Grecka",
    manufacturer: "Italiano",
    price: 39.99,
    description:
      "sos biały, ser mozzarella, oliwki czarne, ser śródziemnomorski",
    imgSrc: "food/pizza-grecka.jpg",
  },
  {
    id: 8,
    name: "Veggie burger",
    manufacturer: "Mc Donalds",
    price: 39.99,
    description:
      "150g wege kotleta na bazie kaszy jaglanej z warzywami i ziarnami sezamu oraz słonecznika, warzywa, sos do wyboru",
    imgSrc: "food/veggie-burger.jpg",
  },
  {
    id: 9,
    name: "Frytki",
    manufacturer: "Mc Donalds",
    price: 39.99,
    description: "porcja 170g frytek z ziemniaków",
    imgSrc: "food/potato-sticks.jpg",
  },
  {
    id: 10,
    name: "Burrito",
    manufacturer: "La Ibérica",
    price: 39.99,
    description:
      "z kurczakiem, pastą z fasoli, salsą z jalapeño i sałatą, zawinięte w pszenną tortillę",
    imgSrc: "food/burritos.jpg",
  },
  {
    id: 11,
    name: "Frappuccino",
    manufacturer: "Starbucks",
    price: 39.99,
    description:
      "syrop o smaku karmelowym, połączony z kawą i mlekiem, całość zblendowana z lodem",
    imgSrc: "food/frappuccino.jpg",
  },
];

let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, name, manufacturer, price, description, imgSrc } = x;
      return `
    <div class="product">
    <div class="foodphoto">
      <img
        src=${imgSrc}
        class="food-photo"
        alt="Japanese food - Ramen"
      />
      <div class="product-name-manufacturer">
        <h1>${name}</h1>
        <h2><i>Akasaka</i></h2>
      </div>
    </div>
    <span class="description"
      >${description}</span
    >
    <div class="products-all">
      <div class="product-amount">$${price}</div>
      <div class="buttons">
        <div class="plus-minus-number">12</div>
        <div class="plus-minus-buttons">
          <i class="bi bi-plus"></i>
          <i class="bi bi-dash"></i>
        </div>
      </div>
      <div class="the-cart-plus-icon">
        <i class="bi bi-cart-plus-fill"></i>
      </div>
    </div>
  </div>
  `;
    })
    .join(""));
};

generateShop();
