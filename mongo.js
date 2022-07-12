import { MongoClient, ObjectId } from "mongodb";

const mongoUrl = "mongodb://localhost:27017";
const mongoDB = "CoffeeShop";

export default class mongo {
    
    static get = (collection, id) => new Promise( (resolve, reject) => {
        let query = id ? { _id: new ObjectId(id) }: {}

        MongoClient.connect(mongoUrl, (err, client) => {
            if(err) {
                reject({ error: err, message: err.message });
            }
            let db = client.db(mongoDB);

            db.collection(collection).find(query).toArray((err, result) => {
                client.close();
                if(err) {
                    reject({ error: err, message: err.message });
                }
                resolve(result);
            })
        })
    })

    static getAll = (collection) => new Promise( (resolve, reject) => {

    })

}