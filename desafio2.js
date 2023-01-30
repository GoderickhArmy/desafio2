import {promises as fs} from "fs"

class ProductManager{
    constructor(){
        this.patch = "./productos.txt";
        this.products= [];
    }

    static id = 0;

    addProduct=async(titulo, descripcion, precio, imagen, codigo, stock)=>{

    ProductManager.id++;

    let newProduct = {

        titulo,
        descripcion,
        precio,
        imagen,
        codigo,
        stock,
        id: ProductManager.id,

    }

    this.products.push(newProduct);

        await fs.writeFile(this.patch, JSON.stringify(this.products));
    }

    readProducts = async()=>{
        let res = await fs.readFile(this.patch, "utf-8")
        return JSON.parse(res);
    }


        getProducts= async() =>{
            let res2 = await this.readProducts()
            return console.log(res2);
        }



        getProductById= async(id)=>{
            let res3 = await this.readProducts();

            if (!res3.find(product=>product.id===id)){
                console.log("Producto no encontrado")
            }else{

            console.log(res3.find(product=>product.id===id));


        }
    }


    deleteProductByID= async (id)=>{

        let res3 = await this.readProducts();
        let productFilter = res3.filter(products=> products.id !=id);
        await fs.writeFile(this.patch, JSON.stringify(productFilter));
        console.log("Producto eliminado");
    };


    updateProducts= async ({id, ...producto}) => {
        await this.deleteProductByID(id);
        let productOld = await this.readProducts()
        let productsModif = [{id, ...producto}, ...productOld];
        await fs.writeFile(this.patch, JSON.stringify(productsModif));

    }



}


const productos = new ProductManager

// productos.addProduct("titulo1","descripcion1", "1000", "imagen1","A234d", 4);
// productos.addProduct("titulo2","descripcion2", "2000", "imagen2","A224d", 3);
// productos.addProduct("titulo3","descripcion3", "3000", "imagen3","A225d", 5)


// productos.getProducts()

// productos.getProductById(1);

// productos.deleteProductByID(2);

productos.updateProducts({

    title:"titulo3",
    descripcion:"descripcion3",
    precio: 4000,
    imagen: "imagen3",
    codigo: "A225d",
    stock:5,
    id:3

})