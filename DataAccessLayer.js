const MongoClient = require('mongodb').MongoClient;
const ObjectId = require("mongodb").ObjectId;

require('dotenv').config()

// Connection URL
const url = process.env.url;

// Database Name
const dbName = 'DataBass';
const settings = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

const createObject = (user) => {
    let iou = new Promise((resolve, reject) => {
        MongoClient.connect(url, settings, function (err, client) {
            if (err) {
                reject(err)
            }
            else {
                const db = client.db(dbName);
                const collection = db.collection('ToDoObjects');
                collection.insertOne(user, function (err, result) {
                     if (err) {
                       reject(err)
                   }
                   else {
                        client.close();
                        resolve(user);
                   }

                 });
            }
        })
    });
    return iou
}



const createListObj = (user, list) => {
    let iou = new Promise((resolve, reject) => {
        MongoClient.connect(url, settings, function (err, client) {
            if (err) {
                reject(err)
            }
            else {
                const db = client.db(dbName);
                const collection = db.collection(`ToDoObjects`);
                collection.updateOne({_id: ObjectId(user)}, 
                                  {$push: {lists: list}}, function (err, result) {
                     if (err) {
                       reject(err)
                   }
                   else {
                        client.close();
                        resolve(list);
                   }

                 });
            }
        })
    });
    return iou
}

const createTaskObj = (user, listname, task) => {
    let iou = new Promise((resolve, reject) => {
        MongoClient.connect(url, settings, function (err, client) {
            if (err) {
                reject(err)
            }
            else {
                const db = client.db(dbName);
                const collection = db.collection(`ToDoObjects`);
                collection.updateOne({ _id: ObjectId(user), "lists": { "$elemMatch":  { "listname": listname}}}, 
                                     {$push: {"lists.$.tasks": task}}, function (err, result) {
                     if (err) {
                       reject(err)
                   }
                   else {
                        client.close();
                        resolve(task);
                   }

                 });
            }
        })
    });
    return iou
}

const readListObjects = (user) => {
    let iou = new Promise((resolve, reject) => {
        MongoClient.connect(url, settings, function (err, client) {
            if (err) {
                reject(err)
            } else {
                const db = client.db(dbName);
                const collection = db.collection('ToDoObjects');
                collection.find({_id: ObjectId(user)}, {fields: {"lists.tasks" : 0}}).toArray(function (err, docs) {
                    if (err) {
                        reject(err)
                    } else {
                        const results = docs[0].lists
                        client.close();
                        resolve(results);
                    }
                })
            }
        });
    })
    return iou;
}

const readTaskObjects = (user, listname, index) => {
    let iou = new Promise((resolve, reject) => {
        MongoClient.connect(url, settings, function (err, client) {
            if (err) {
                reject(err)
            } else {
                const db = client.db(dbName);
                const collection = db.collection('ToDoObjects');
                console.log(listname)
                collection.find({ _id: ObjectId(user)}).toArray(function (err, docs) {
                    if (err) {
                        reject(err)
                    } else {
                        const results = docs[0].lists[index].tasks
                        client.close();
                        resolve(results);
                    }
                })
            }
        });
    })
    return iou;
}

const updateListObj = (user, listname, list) => {
    let iou = new Promise((resolve, reject) => {
        MongoClient.connect(url, settings, function (err, client) {
            if (err) {
                reject(err)
            }
            else {
                const db = client.db(dbName);
                const collection = db.collection(`ToDoObjects`);
                collection.updateOne({ _id: ObjectId(user), "lists": { "$elemMatch":  { "listname": listname}}},
                                      {$set: {"lists.$.listname": list.name, "lists.$.description": list.description, "lists.$.due": list.due }}, function (err, result) {
                     if (err) {
                       reject(err)
                   }
                   else {
                        client.close();
                        resolve(list);
                   }

                 });
            }
        })
    });
    return iou
}

const updateTaskObj = (user, listname, taskname, task) => {
    let iou = new Promise((resolve, reject) => {
        MongoClient.connect(url, settings, function (err, client) {
            if (err) {
                reject(err)
            }
            else {
                const db = client.db(dbName);
                const collection = db.collection(`ToDoObjects`);
                collection.updateOne({
                                     _id: ObjectId(user)},  
                                    {$set: {"lists.$[listname].tasks.$[taskname].name": task.name, "lists.$[listname].tasks.$[taskname].description": task.description, "lists.$[listname].tasks.$[taskname].due": task.due}}, 
                                    { arrayFilters: [{"listname.listname": listname}, {"taskname.name": taskname}]
    
                                    }, function (err, result) {
                     if (err) {
                       reject(err)
                   }
                   else {
                        client.close();
                        resolve(result);
                   }

                 });
            }
        })
    });
    return iou
}

const updateTaskObjDone = (user, listname, taskname, task) => {
    let iou = new Promise((resolve, reject) => {
        MongoClient.connect(url, settings, function (err, client) {
            if (err) {
                reject(err)
            }
            else {
                const db = client.db(dbName);
                const collection = db.collection(`ToDoObjects`);
                collection.updateOne({
                                     _id: ObjectId(user)},  
                                    {$set: {"lists.$[listname].tasks.$[taskname].completed": task}}, 
                                    { arrayFilters: [ {"listname.listname": listname}, {"taskname.name": taskname} ]
    
                                    }, function (err, result) {
                     if (err) {
                       reject(err)
                   }
                   else {
                        client.close();
                        resolve(result);
                   }

                 });
            }
        })
    });
    return iou
}

const deleteTaskObj = (user, listname, taskname) => {
    let iou = new Promise((resolve, reject) => {

        MongoClient.connect(url, settings, function (err, client) {
            if (err) {
                reject(err)
            }
            else {
                const db = client.db(dbName);
                const collection = db.collection(`ToDoObjects`);
                collection.updateOne({
                    _id: ObjectId(user)},  
                   {$pull: {"lists.$[listname].tasks": {"name": taskname}}}, 
                   { arrayFilters: [ {"listname.listname": listname}]}, 

                    function (err, result) {
                     if (err) {
                       reject(err)
                   }
                   else {
                        client.close();
                        resolve(result);
                   }

                 });
            }
        })
    });
    return iou
}

const deleteListObj = (user, listname) => {
    let iou = new Promise((resolve, reject) => {
        MongoClient.connect(url, settings, function (err, client) {
            if (err) {
                reject(err)
            }
            else {
                const db = client.db(dbName);
                const collection = db.collection(`ToDoObjects`);
                console.log(listname)
                collection.updateOne({
                    _id: ObjectId(user)},  
                   {$pull: {"lists": { "listname": listname }}},  

                    function (err, result) {
                     if (err) {
                       reject(err)
                   }
                   else {
                        client.close();
                        resolve(result);
                   }

                 });
            }
        })
    });
    return iou
}

const deleteTaskObjDone = (user, listname) => {
    let iou = new Promise((resolve, reject) => {
        MongoClient.connect(url, settings, function (err, client) {
            if (err) {
                reject(err)
            }
            else {
                const db = client.db(dbName);
                const collection = db.collection(`ToDoObjects`);
                collection.updateOne({
                    _id: ObjectId(user)},  
                   {$pull: {"lists.$[listname].tasks": {"completed": "true"}}}, 
                   { arrayFilters: [ {"listname.listname": listname}]}, 
                   
                    function (err, result) {
                     if (err) {
                       reject(err)
                   }
                   else {
                        client.close();
                        resolve(result);
                   }

                 });
            }
        })
    });
    return iou
}


const deleteTaskObjSelected = (user, listname, names) => {
    let iou = new Promise((resolve, reject) => {
        MongoClient.connect(url, settings, function (err, client) {
            if (err) {
                reject(err)
            }
            else {
                const db = client.db(dbName);
                const collection = db.collection(`ToDoObjects`);
                collection.updateOne({
                    _id: ObjectId(user)},  
                   {$pull: {"lists.$[listname].tasks": {"name": { $in:  names }}}}, 
                   { arrayFilters: [ {"listname.listname": listname}]}, 
                   
                    function (err, result) {
                     if (err) {
                       reject(err)
                   }
                   else {
                        client.close();
                        resolve(result);
                   }

                 });
            }
        })
    });
    return iou
}

const testConnection = () => {
    const iou = new Promise((resolve, reject) => {
        // Use connect method to connect to the server
        MongoClient.connect(url, settings, function (err, client) {
            if (err) {
                // assert.equal(null, err);
                reject(err)
            } else {
                const db = client.db(dbName);
                // console.log("client", client)
                // console.log("db", db)
                client.close();
                resolve("Connected successfully to server")
            }
        });
    })
    return iou
}


const check = (check1, check2) => {
    if(check1 === check2){
        return true;
    } else {
        return false;
    }
}

const checkPass = (username) => {
    let iou = new Promise((resolve, reject) => {
        MongoClient.connect(url, settings, function (err, client) {
            if (err) {
                reject(err)
            } else {
                const db = client.db(dbName);
                const collection = db.collection('ToDoObjects');
                collection.find({ username: username }).toArray(function (err, docs) {
                    if (err) {
                        reject(err)
                    } else {
                        const results = {
                            data: docs,
                            msg: `Found a user`
                        }

                        client.close();
                        resolve(results);
                    }
                });
            }
        });
    })
    return iou;
}


const checkUse = (username) => {
    let iou = new Promise((resolve, reject) => {
        MongoClient.connect(url, settings, function (err, client) {
            if (err) {
                reject(err)
            } else {
                const db = client.db(dbName);
                const collection = db.collection('ToDoObjects');
                collection.find({ username: username }).toArray(function (err, docs) {
                    if (err) {
                        reject(err)
                    } else if(docs.length === 0){
                        client.close();
                        resolve(true);
                    } else if(docs.length > 0){
                        client.close();
                        resolve(false)
                    }
                });
            }
        });
    })
    return iou;
}

const checkEmail = (email) => {
    let iou = new Promise((resolve, reject) => {
        MongoClient.connect(url, settings, function (err, client) {
            if (err) {
                reject(err)
            } else {
                console.log('Connected to server Read tasks');
                const db = client.db(dbName)
                const collection = db.collection('ToDoObjects')
                collection.find({ email: email }).toArray(function (err, docs) {
                    if (err) {
                        reject(err)
                    } else if(docs.length === 0){
                        client.close();
                        resolve(true);
                    } else if(docs.length > 0){
                        client.close();
                        resolve(false)
                    }
                });
            }
        });
    })
    return iou;
}


module.exports = { testConnection, deleteListObj, deleteTaskObjSelected, deleteTaskObjDone, deleteTaskObj, updateTaskObjDone, updateTaskObj, updateListObj, readTaskObjects, readListObjects, createObject, createListObj, createTaskObj, checkPass, checkUse, checkEmail, check };
