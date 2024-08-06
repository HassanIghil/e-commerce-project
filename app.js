const wrapper = document.querySelector(".sliderWrapper");

const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "KD17",
        price: 150,
        colors: [
            {
                code: "black",
                img: "./img2/KD17.png",
            },
            {
                code: "white",
                img: "./img2/KD17(2).png",
            },
        ],
    },
    {
        id: 2,
        title: "SABRINA 2",
        price: 130,
        colors: [
            {
                code: "red",
                img: "./img2/SABRINA+2.png",
            },
            {
                code: "lightcoral",
                img: "./img2/SABRINA2.png",
            },
            
        ],
    },
    {
        id: 3,
        title: "NIKE DUNK LOW RETRO",
        price: 115,
        colors: [
            {
                code: "lightgray",
                img: "./img2/NIKE+DUNK+LOW+RETRO(lightgray).png",
            },
            {
                code: "black",
                img: "./img2/NIKE+DUNK+LOW+RETRO(black).png",
            },
        ],
    },
    {
        id: 4,
        title: "Jumpman MVP",
        price: 165,
        colors: [
            {
                code: "red",
                img: "./img2/JORDAN+MVP(red).png",
            },
            {
                code: "black",
                img: "./img2/JORDAN+MVP(black).png",
            },
        ],
    },
    {
        id: 5,
        title: "NIKE AIR FORCE 1'07",
        price: 115,
        colors: [
            {
                code: "green",
                img: "./img2/AIR+FORCE+1+'07(green).png",
            },
            {
                code: "blue",
                img: "./img2/AIR+FORCE+1+'07(whiteblue).png",
            },
        ],
    },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector('.productImg');
const currentProductTitle = document.querySelector('.productTitle');
const currentProductPrice = document.querySelector('.productPrice');
const currentProductColors = document.querySelectorAll('.color');
const currentProductSizes = document.querySelectorAll('.size');

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        choosenProduct = products[index];

        
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
    });

    });
});

currentProductColors.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        currentProductImg.src = choosenProduct.colors[index].img;
    })
})

currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach((size)=>{
            size.style.backgroundColor = "white";
            size.style.color = "black";
        })
            size.style.backgroundColor = "black";
            size.style.color = "white";
        })
})

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
    payment.style.display = "flex";
});

close.addEventListener("click", () => {
    payment.style.display = "none";
});

