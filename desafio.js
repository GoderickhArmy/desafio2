

class Product{

    static id=0;

    constructor(titulo, descripcion,precio,imagen,codigo,stock){
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.precio = precio;
        this.imagen = imagen;
        this.codigo = codigo;
        this.stock = stock;
        this.id = Product.id++;

}

};


    class ProductManager{

        constructor(){

        this.products = new Array()

        
}

    addProduct = (titulo,descripcion,precio,imagen,codigo,stock)=>{
        

        if(this.products.some(p => p.codigo === p.codigo)) 
            return "Error: Código de producto repetido"
            this.products.push(titulo,descripcion,precio,imagen,codigo,stock);


}

    getProducts = () => {

        return this.products

}


    getProductById(id) {

    if(this.products.some(p => p.id===id)){
        return Product;
    }else{
        console.error('Producto inexistente');
    }

}

};



const gestor = new ProductManager()

console.log(gestor.getProducts()); //Me devuelve un array vacio.

gestor.addProduct("producto prueba", "Este es un producto prueba", 200,"Sin imagen", "abc123", 25);// agrego un producto

console.log(gestor.getProducts()); // Muestra el producto

gestor.addProduct("producto prueba", "Este es un producto prueba", 200,"Sin imagen", "abc123", 25); //clono el producto

console.log(gestor.addProduct("producto prueba", "Este es un producto prueba", 200,"Sin imagen", "abc123", 25)); // Devuelve error de codigo de producto repetido

console.log(gestor.getProductById(3));//Genera error o entrega el producto


