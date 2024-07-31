class CarritoCompra {
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto) {
        this.productos.push(producto);
    }

    calcularTotal() {
        return this.productos.reduce((total, producto) => total + producto.precio, 0);
    }

    aplicarDescuento(porcentaje) {
        const total = this.calcularTotal();
        const descuento = (porcentaje / 100) * total;
        return total - descuento;
    }
}



module.exports = CarritoCompra;