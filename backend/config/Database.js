import { Sequelize } from "sequelize";
 
const db = new Sequelize('simplemarketplace', 'root', 'Kit@Bis@', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;