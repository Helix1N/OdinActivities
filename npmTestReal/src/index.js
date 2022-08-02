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

const firstsBanner = document.getElementById("body2Content0");
const secondBanner = document.getElementById("body2Content2");
const thirdBanner = document.getElementById("body2Content1");
const fourthBanner = document.getElementById("body2Content3");

let img = document.createElement("img");
img.src = "hamburguer.png";
img.style.width = "100%";
img.style.height = "100%";
img.style.borderRadius = "10px";
firstsBanner.appendChild(img);

/*let img1 = document.createElement("img");
img1.src = "veggie.png";
img1.style.width = "100%";
img1.style.height = "100%";
secondBanner.appendChild(img1);*/

let img2 = document.createElement("img");
img2.src = "burger.jpeg";
img2.style.width = "100%";
img2.style.height = "100%";
img2.style.borderRadius = "10px";
thirdBanner.appendChild(img2);

let img3 = document.createElement("img");
img3.src = "burger2.jpg";
img3.style.width = "100%";
img3.style.height = "100%";
img3.style.borderRadius = "10px";
fourthBanner.appendChild(img3);

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

    for(let i = 0; i < 3; i++) {
        let div = document.createElement("div");
        div.className = "footerContent";
        div.id = "footerContent" + i;
        footerBody.appendChild(div);
    }

    const firstFooterContent = document.getElementById("footerContent0");
    const secondFooterContent = document.getElementById("footerContent1");
    const thirdFooterContent = document.getElementById("footerContent2");
    for(let i = 0; i < 6; i++) {
        let div = document.createElement("div");
        div.className = "footerContentLinks";
        div.id = "footerContentLinks" + i;
        firstFooterContent.appendChild(div);
    }
    const firstFooterLink = document.getElementById("footerContentLinks0");
    firstFooterLink.textContent = "Internacional";
    const secondFooterLink = document.getElementById("footerContentLinks1");
    secondFooterLink.textContent = "Sobre o Hambúrguer";
    const thirdFooterLink = document.getElementById("footerContentLinks2");
    thirdFooterLink.textContent = "Políticas de Privacidade";
    const fourthFooterLink = document.getElementById("footerContentLinks3");
    fourthFooterLink.textContent = "Seja um Franqueado";
    const fifthFooterLink = document.getElementById("footerContentLinks4");
    fifthFooterLink.textContent = "Fale Conosco";
    const sixthFooterLink = document.getElementById("footerContentLinks5");
    sixthFooterLink.textContent = "Termos de Uso";

    for(let i = 0; i < 4; i++) {
        let div = document.createElement("div");
        div.className = "footerContentSocials";
        div.id = "footerContentSocials" + i;
        secondFooterContent.appendChild(div);
    }

    const firstFooterSocial = document.getElementById("footerContentSocials0");
    firstFooterSocial.textContent = "FACEBOOK";
    const secondFooterSocial = document.getElementById("footerContentSocials1");
    secondFooterSocial.textContent = "TWITTER";
    const thirdFooterSocial = document.getElementById("footerContentSocials2");
    thirdFooterSocial.textContent = "INSTAGRAM";
    const fourthFooterSocial = document.getElementById("footerContentSocials3");
    fourthFooterSocial.textContent = "LOGO";

    for(let i = 0; i < 5; i++) {
        let p = document.createElement("p");
        p.className = "footerContentPhrases";
        p.id = "footerContentPhrases" + i;
        thirdFooterContent.appendChild(p);
    }
    const firstFooterP = document.getElementById("footerContentPhrases0");
    firstFooterP.textContent = "Serviço disponível nas áreas de entrega Domino´s Pizza, todos os dias, de acordo com o horário de funcionamento de cada loja. A Domino´s Pizza Brasil se reserva o direito de alterar ou encerrar as ofertas sem aviso prévio. Todas as promoções expostas não são cumulativas entre si ou com outras promoções e descontos. Cobramos taxa de entrega. Todos os nossos produtos CONTÉM GLÚTEN. Alérgicos: todos os nossos produtos contém ou podem conter traços de Trigo, Ovos, Leite e Soja. As formas de pagamento variam de acordo com cada loja. Imagens meramente ilustrativas. Consulte se sua loja de preferência pratica a promoção escolhida Em caso de dúvidas, consulte nosso SAC:sac@dominos.com.br.";
    const secondFooterP = document.getElementById("footerContentPhrases1");
    secondFooterP.textContent = "*Preços a partir de podem sofrer pequenas variações de acordo com a região da loja. Confirme o preço no carrinho de compras antes de confirmar seu pedido.";
    const thirdFooterP = document.getElementById("footerContentPhrases2");
    thirdFooterP.textContent = "DOMINOS PIZZA BRASIL, Av. das Américas, 500 - Bloco 7 – 3º andar – Barra da Tijuca, Rio de Janeiro/RJ - 22640-100";
    const fourthFooterP = document.getElementById("footerContentPhrases3");
    fourthFooterP.textContent = "S.A.C: Dúvidas, reclamações, sugestões e / ou elogios envie um e-mail para: sac@dominos.com.br";
    const fifthFooterP = document.getElementById("footerContentPhrases4");
    fifthFooterP.textContent = "Informações sobre o uso de dados pessoais e pedidos de descadastro do banco de dados, envie um e-mail para: encarregadodados@dominos.com.br – Encarregado de Dados - Michel Nascimento";





})();