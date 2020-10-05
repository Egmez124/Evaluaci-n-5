const cars = [
    {
        id: 1,
        marca: 'toyota',
        modelo: 'corola',
        color: 'rojo',
        año: 2001,
        precio: 150000
    },
    {
        id: 2,
        marca: 'chevrolet',
        modelo: 'cheyene',
        color: 'verde',
        año: 2009,
        precio: 100000
    },{
        id: 3,
        marca: 'nissan',
        modelo: 'tsuru',
        color: 'morado',
        año: 1990,
        precio: 40000
    },{
        id: 4,
        marca: 'chevrolet',
        modelo: 'aveo',
        color: 'azul',
        año: 2009,
        precio: 180000
    },
  ];

let idEditingCar = -1

function printAllCars() {
    tableBody = document.getElementById('table-cars-body')
    tableBody.innerHTML = '';
    cars.forEach((car) => tableBody.innerHTML += `<tr>
                                                    <td>${car.marca}</td>
                                                    <td>${car.modelo}</td>
                                                    <td>${car.color}</td>
                                                    <td>${car.año}</td>
                                                    <td>${car.precio}</td>
                                                    <td>
                                                    <button type="button" onclick="editCar(${car.id})" class="btn btn-success">Editar</button>
                                                    <button type="button" onclick="deleteCar(${car.id})" class="btn btn-success">Eliminar</button>
                                                    </td>
                                                    </tr>`);
}
printAllCars();
function editCar(id){
    const editingCar = cars.find((car) => car.id === id);
    const inputMarca = document.getElementById('marca');
    const inputModelo = document.getElementById('modelo');
    const inputColor = document.getElementById('color');
    const inputAño = document.getElementById('año');
    const inputPrecio = document.getElementById('precio');
    inputMarca.value = editingCar.marca;
    inputModelo.value = editingCar.modelo;
    inputColor.value = editingCar.color;
    inputAño.value = editingCar.año;
    inputPrecio.value = editingCar.precio;
    idEditingCar = editingCar.id;
}
function saveCar() {
    const newMarca = document.getElementById('marca').value;
    const newModelo = document.getElementById('modelo').value;
    const newColor = document.getElementById('color').value;
    const newAño = document.getElementById('año').value;
    const newPrecio = document.getElementById('precio').value;
    if(idEditingCar === -1) {
        alert('Tienes que seleccionar un carro');
        return;
    }
    const editingCar = cars.find((car) => car.id === idEditingCar);
    editingCar.marca = newMarca;
    editingCar.modelo = newModelo;
    editingCar.color = newColor;
    editingCar.año = newAño;
    editingCar.precio = newPrecio;
    document.getElementById("form-edit-car").reset();
    printAllCars();
}
function addCar() {
    tableBody = document.getElementById('table-cars-body')
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const color = document.getElementById('color').value;
    const año = document.getElementById('año').value;
    const precio = document.getElementById('precio').value;
    tableBody.innerHTML += `<tr>
                    <td>${marca}</td>
                    <td>${modelo}</td>
                    <td>${color}</td>
                    <td>${año}</td>
                    <td>${precio}</td>
                </tr>`
}
function deleteCar(idEditingCar) {
    const carEliminated = cars.find((car) => car.id === idEditingCar);
    cars.splice(carEliminated, 1);
    printAllCars();
    //console.log(carEliminated);
    //const removeCar = document.getElementById("deleteCar");
    //alert('eliminando');
}