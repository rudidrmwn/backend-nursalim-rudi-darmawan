import { Sequelize } from "sequelize";
import db from "../config/Database.js";
 
const { DataTypes } = Sequelize;
 
const Products = db.define('products',{
    product_name:{
        type: DataTypes.STRING
    },
    product_price:{
        type: DataTypes.INTEGER
    },
},{
    freezeTableName:true
});
 
(async () => {
    await db.sync();
})();
 
export default Products;