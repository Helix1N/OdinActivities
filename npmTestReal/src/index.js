console.log("Hello World");

const container = document.querySelector("#content");


const siteHeader = (() => {
    const headerC = document.createElement("div");
    headerC.className = "headerContainer";
    container.appendChild(headerC);
    for(let i = 0; i < 9; i++) {
        let div = document.createElement("div");
        div.className = "headerBox";
        div.id = "header" + i;
        headerC.appendChild(div);
    }
})();

const header1 = document.querySelector("#header1");
header1.textContent = "PEÇA ONLINE";
const header2 = document.querySelector("#header2");
header2.textContent = "CARDÁPIO";
const header3 = document.querySelector("#header3");
header3.textContent = "PROMOÇÕES";
const header4 = document.querySelector("#header4");
header4.textContent = "LOJAS";
const header5 = document.querySelector("#header5");
header5.textContent = "ACOMPANHE SEU PEDIDO";
const header6 = document.querySelector("#header6");
header6.style.width = "7%";
const header7 = document.querySelector("#header7");
header7.textContent = "FAZER LOGIN";
const header8 = document.querySelector("#header8");
header8.textContent = "CARRINHO";
const header0 = document.querySelector("#header0");
header0.textContent = "LOGO";

const restaurantBody = (() => {
    
    function first () {
        const bodyRestaurant = document.createElement("div");
        bodyRestaurant.id = "bodyRestaurant";
        container.appendChild(bodyRestaurant);
        for(let i = 0; i < 2; i++) {
            let div = document.createElement("div");
            div.className = "bodyContainer";
            div.id = "bodyContainer" + i;
            bodyRestaurant.appendChild(div);
        }
    }
    first();

    function second() {
        const firstPart = document.querySelector("#bodyContainer0");
        
        const line0 = document.createElement("div");
        line0.className = "line";
        line0.textContent = "------------";
        firstPart.appendChild(line0);
        for(let i = 0; i < 2; i++) {
            let div = document.createElement("div");
            let btn = document.createElement("button");
            div.className = "bodyContent";
            div.id = "bodyContent" + i;
            btn.id = "buttonid" + i;
            firstPart.appendChild(div);
            firstPart.appendChild(btn);
        }
        const line1 = document.createElement("div");
        line1.className = "line";
        line1.textContent = "------------";
        firstPart.appendChild(line1);
    }
    second();

    function third() {
        const secondPart = document.querySelector("#bodyContainer1");
        
        for(let i = 0; i < 4; i++) {
            let div = document.createElement("div");
            div.className = "body2Content";
            div.id = "body2Content" + i;
            secondPart.appendChild(div);
        }
    }
    third();
})();

const callToAction = document.querySelector("#bodyContent0");
callToAction.textContent = "COMEÇAR O PEDIDO";
const entregaBtn = document.getElementById("buttonid0");
entregaBtn.textContent = "ENTREGA";
const conective = document.querySelector("#bodyContent1");
conective.textContent = "ou";
const naLojaBtn = document.querySelector("#buttonid1");
naLojaBtn.textContent = "RETIRAR NA LOJA";

const siteFooter = (() => {
    const footerContainer = document.createElement("div");
    footerContainer.id = "footerContainer";
    container.appendChild(footerContainer);
    const footerBody = document.createElement("div");
    footerBody.id = "footerBody";
    footerContainer.appendChild(footerBody);
})();