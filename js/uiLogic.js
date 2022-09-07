const btn = document.querySelector('#btnSubmit');
printTableProduct();

btn.addEventListener('click', function () {
    let sId = document.querySelector('#numId').value;
    let sName = document.querySelector('#Nombre').value;
    let contry = document.querySelector('#Pais').value;
    let expiration = document.querySelector('#caducidad').value;

    addProductToSystem(sId, sName, contry, expiration);
    printTableProduct();
})

function printTableProduct() {
    let list = getProductList();
    let tbody = document.querySelector('#table tbody');

    tbody.innerHTML = '';

    for (i = 0; i < list.length; i++) {

        let row = tbody.insertRow(i),
            idCell = row.insertCell(0),
            nameCell = row.insertCell(1),
            contryCell = row.insertCell(2),
            expirationCell = row.insertCell(3),
            selectCell = row.insertCell(4);

        idCell.innerHTML = `<b>${list[i].id}</b>`;
        contryCell.innerHTML = list[i].contry;
        nameCell.innerHTML = list[i].nameProduct;
        expirationCell.innerHTML = list[i].expiration;

        let inputSelect = document.createElement('input');
        inputSelect.type = 'radio';
        inputSelect.value = list[i].id;

        selectCell.appendChild(inputSelect);
        tbody.appendChild(row);
    }
}
