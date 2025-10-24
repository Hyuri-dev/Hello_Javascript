class Producto {
  constructor(nombre, cantidad, valor) {
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.valor = valor;
  }
}

console.log(typeof Producto);

let laptopHp = new Producto("Hp Smart Victus Pro", 2, 698);
let mouseRedDragon = new Producto("Mouse Red Dragon", 4, 60);
let minStock = 3;
let totalStock = laptopHp.cantidad + mouseRedDragon.cantidad;
let totalValor =
  laptopHp.valor * laptopHp.cantidad +
  mouseRedDragon.valor * mouseRedDragon.cantidad;

totalStock = laptopHp.cantidad + mouseRedDragon.cantidad;

console.log(
  `Total stock: ${totalStock} \nTotal Valor en inventario: ${totalValor}`
);

if (laptopHp && mouseRedDragon > minStock) {
  console.log("Todos los productos cuentan con suficiente stock");
} else if (laptopHp && mouseRedDragon < minStock) {
  console.log("Atencion, Chequear el inventario por bajo stock");
}
