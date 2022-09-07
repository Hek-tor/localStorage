var listaProductos = [];

function addProductToSystem(pId, pName, pContry, pDate) {
    let newProduct = {
        id: pId,
        nameProduct: pName,
        contry: pContry,
        expiration: pDate
    };
    listaProductos.push(newProduct);
    saveStorageList(listaProductos);
};

function getProductList() {
    let saveList = localStorage.getItem('tablaProductos');
    if (saveList == null) {
        listaProductos = [];
    } else {
        listaProductos = JSON.parse(saveList);
    }
    return listaProductos;
};

function saveStorageList(listaGeneral) {
    localStorage.setItem('tablaProductos', JSON.stringify(listaGeneral));
}