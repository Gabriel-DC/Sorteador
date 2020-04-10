const secao = document.querySelector(".secao");
const container = document.querySelector(".container");
const input = document.getElementById("campo");

const resultado_itens = document.getElementsByClassName("resultado-itens")[0];
const elementos = resultado_itens.childNodes;

const obj = [];
const obj_sorteado = [];

console.log(elementos);

function Delete(element) {
    const del_item = element.childNodes[0].innerText;

    obj.forEach((value, index) => {
        if (value === del_item) {
            obj.splice(index, 1);
            console.log(obj)
        }
    })
    element.remove();
}

function Adicionar() {
    if (obj.some(value => value == input.value.trim())) {
        alert('JÁ EXISTE');
    } else if (input.value.trim() != '') {
        obj.push(input.value.trim());
        MakeNewItem();
        console.log(obj);
    } else {
        alert('O CAMPO NÃO PODE FICAR VAZIO');
    }
}

function MakeNewItem() {
    const new_div = document.createElement("div");
    new_div.innerHTML =
        `<li class="item">${obj[obj.length-1]}</li>
        <button class="btnDel" onclick="Delete(this.parentNode)">X</button>`;
    new_div.classList.add("item-container");
    resultado_itens.appendChild(new_div);
    input.value = '';
    input.focus();
}

function Sortear() {
    const item_sorteado_container = document.querySelector("div.item-sorteado-container");
    item_sorteado_container.childNodes[0].remove();
    const obj_not_sorteado = obj.filter(value => obj_sorteado.indexOf(value) === -1);

    const randomic = (tam) => Math.floor(Math.random() * tam);

    const rdn_obj = obj_not_sorteado[randomic(obj_not_sorteado.length)] != undefined ? obj_not_sorteado[randomic(obj_not_sorteado.length)] : "NENHUM ELEMENTO RESTANTE";
    obj_sorteado.push(rdn_obj);

    const new_sort = document.createElement("h2");
    new_sort.classList.add("item-sorteado");
    new_sort.innerHTML = `${rdn_obj}`;
    console.log(rdn_obj)
    item_sorteado_container.appendChild(new_sort);


    item_sorteado_container.style.height = "45px";
}