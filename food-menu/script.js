const food_data = {
  pancake: {
    imgSrc: "./img/pancake.png",
    foodName: "honey pancakes",
    price: "2700원",
    explanation: `Amazingly Delicious Honey Pancakes! It is responsible for your breakfast.`,
  },
  porrige: {
    imgSrc: "./img/porrige.png",
    foodName: "banana porrige",
    price: "2100원",
    explanation: `Enjoy soft bananas to soothe your stomach.`,
  },
  sandwitch: {
    imgSrc: "./img/sandwitch.png",
    foodName: "sandwitch",
    price: "4500원",
    explanation: `The chewy meat and crunchy vegetables will fascinate you. Go ahead and have a strong breakfast!`,
  },
  hamburger: {
    imgSrc: "./img/hamburger.png",
    foodName: "super mega fire titan hamburger",
    price: "4900원",
    explanation: `No one can beat the burning passion of this hamburger. As soon as you eat it, you will burn with it.`,
  },
  simple_lunch_set: {
    imgSrc: "./img/simple_lunch_set.png",
    foodName: "simple lunch set",
    price: "8000원",
    explanation: `Want to Have a Fast and Well-Fooded Meal Alone? A lunch box is waiting for you to take care of your busy lunch.`,
  },
  pizza: {
    imgSrc: "./img/pizza.png",
    foodName: "leaf pizza",
    price: "13900원",
    explanation: `It's a charming pizza with lots of cheese. I prepared it with leaves so you don't have an acute stomach. (Just kidding. It's edible leaves.)`,
  },
  healthyJuice: {
    imgSrc: "./img/healthyJuice.png",
    foodName: "healthy green juice",
    price: "5000원",
    explanation: `It's a green juice with healthy ingredients. The taste is not guaranteed.`,
  },
  chocoShake: {
    imgSrc: "./img/chocoShake.png",
    foodName: "super sweet chocolate shake",
    price: "5800원",
    explanation: `It's a chocolate bump shake with all kinds of sweet flavors. Don't forget to brush your teeth after eating.`,
  },
  sweetberryjuice: {
    imgSrc: "./img/sweetberryjuice.png",
    foodName: "sweetberry juice",
    price: "5000원",
    explanation: `It's a refreshing shake with sweet berries. Compete with this shake to see who's fresher.`,
  },
  handshake: {
    imgSrc: "./img/handshake.png",
    foodName: "handshake",
    price: "Free",
    explanation: `We are all colleagues. Let's remember that we are all Homo sapiens sapiens. Don't forget to wash your hands before and after shaking hands.`,
  },
  barbecue: {
    imgSrc: "./img/barbeque.png",
    foodName: "fancy barbecue",
    price: "30000원",
    explanation: `Barbecue is a must for dinner. If you pay extra, we'll also arrange a barbecue party on the terrace.`,
  },
  salmon: {
    imgSrc: "./img/salmon.png",
    foodName: "grilled salmon",
    price: "15000원",
    explanation: `If pork is too much, how about grilled fragrant salmon? This salmon swims in your mind.`,
  },
  pasta: {
    imgSrc: "./img/pasta.png",
    foodName: "meatball spaghetti",
    price: "12000원",
    explanation: `A fantastic blend of rich Italian tomatoes and mouth-to-mouth meatballs`,
  },
};
const categories = {
  // images from pixabay, resized: 250 x 177
  all: [
    food_data.pancake,
    food_data.porrige,
    food_data.sandwitch,
    food_data.hamburger,
    food_data.simple_lunch_set,
    food_data.pizza,
    food_data.healthyJuice,
    food_data.chocoShake,
    food_data.sweetberryjuice,
    food_data.handshake,
    food_data.barbecue,
    food_data.salmon,
    food_data.pasta,
  ],
  breakfast: [food_data.pancake, food_data.porrige, food_data.sandwitch],
  lunch: [food_data.hamburger, food_data.simple_lunch_set, food_data.pizza],
  shakes: [
    food_data.healthyJuice,
    food_data.chocoShake,
    food_data.sweetberryjuice,
    food_data.handshake,
  ],
  dinner: [food_data.barbecue, food_data.salmon, food_data.pasta],
};

/* 페이지를 열면 먼저 all이 보임 */
document.addEventListener("DOMContentLoaded", () => {
  showCategory("all");
});

const showCategory = (category) => {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = ""; // 갤러리 비우기

  categories[category].forEach((food) => {
    // 갤러리에 div 생성
    const food_div = document.createElement("div");
    food_div.classList.add("food-item");

    // 이미지 생성
    const img = document.createElement("img");
    img.src = food.imgSrc;
    food_div.appendChild(img);

    // 정보를 담는 div 생성
    const info_div = document.createElement("div");
    info_div.classList.add("food-info");

    // 이름과 가격을 정렬하기 위한 부모 요소 생성
    const name_price = document.createElement("div");
    name_price.classList.add("food-name-price");

    // 음식 이름 생성
    const foodname = document.createElement("div");
    foodname.classList.add("food-name");
    foodname.textContent = food.foodName;
    name_price.appendChild(foodname);

    // 음식 가격 생성
    const price = document.createElement("div");
    price.classList.add("food-price");
    price.textContent = food.price;
    name_price.appendChild(price);

    // 음식 + 가격
    info_div.appendChild(name_price);

    // 수평선 생성
    const hr = document.createElement("hr");
    info_div.appendChild(hr);

    // 음식 설명 생성
    const explanation = document.createElement("p");
    explanation.textContent = food.explanation;
    info_div.appendChild(explanation);

    // 정보 div를 food_div에 추가
    food_div.appendChild(info_div);

    // food_div를 갤러리에 추가
    gallery.appendChild(food_div);
  });
};
