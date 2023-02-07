import express from "express";
import ProductManager from "./components/ProductManager.js";

const app = express();
app.use(express.urlencoded({extended: true}));

const productos = new ProductManager()
const reader = productos.readProducts()

app.get("/products",  async(req, res)=>{

    let limit = parseInt(req.query.limit);
        if(!limit) return res.send(await reader)
        let allProducts= await reader;
        let productLimit = allProducts.slice(0, limit)
        res.send(productLimit)
});

app.get("/products/:id",  async(req, res)=>{

    let id = parseInt(req.params.id)
    let allProducts= await reader;
    let productById= allProducts.find(product=> product.id===id);
    res.send(productById);
    
})


const PORT = 8080;
const serverPort= app.listen(PORT, () =>{
    console.log(`Express Local Host ${serverPort.address().port}`)
})

serverPort.on("error", (error)=> console.log(`Server Error ${error}`)); 