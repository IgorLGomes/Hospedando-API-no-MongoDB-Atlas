import mongoose from "mongoose";
const dbUser = ""
const db_password = ""
const connect = () =>{
    mongoose.connect(
        `mongodb+srv://${dbUser}:${db_password}@cluster0.haxvyie.mongodb.net/api-the-game?retryWrites=true&w=majority&appName=Cluster0`
    );
    const connection = mongoose.connection;
    connection.on("error", () => {
        console.log("Erro ao conectar ao servidor");
    });
    connection.on("open", () => {
        console.log("Conectado ao servidor")
    });
};
connect();
export default mongoose;