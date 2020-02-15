const MongoClient = require('mongodb').MongoClient;
const ObjectId = require("mongodb").ObjectId;
const jwt = require('jsonwebtoken');

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
                collection.findOne({ $and: [ {_id: ObjectId(user)}, {"lists.listname": list.listname }] },
                function (err, docs) {
                    if (err) {
                        reject(err)
                    } else {
                        console.log(docs)
                        if(docs === null){
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
                        }else{
                            client.close();
                            resolve('No Duplicate List Names');
                        }
                        
                        
                    }
                })          
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
            } else {
                const db = client.db(dbName);
                const collection = db.collection(`ToDoObjects`); 
                collection.findOne({$and: [ {_id: ObjectId(user)}, {"lists.listname": listname }, {"lists.tasks.name": task.name} ]},
                function (err, docs) {
                    if (err) {
                        reject(err)
                } else {
                    if(docs === null){
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
                    }else{
                        client.close();
                        resolve('No Duplicate Task Names');
                    }
                }
                })
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

const updateListObj = (user, name, list) => {
    let iou = new Promise((resolve, reject) => {
        MongoClient.connect(url, settings, function (err, client) {
            if (err) {
                reject(err)
            } else {
                const db = client.db(dbName);
                const collection = db.collection(`ToDoObjects`);
                if(name != list.listname){
                    collection.findOne({ $and: [ {_id: ObjectId(user)}, {"lists.listname": list.listname }] },
                    function (err, docs) {
                    if (err) {
                        reject(err)
                    } else {
                            console.log(docs)
                            if(docs === null){
                                collection.updateOne({ _id: ObjectId(user), "lists": { "$elemMatch":  { "listname": name}}},
                                    {$set: {"lists.$.listname": list.listname, "lists.$.description": list.description, "lists.$.due": list.due }}, function (err, result) {
                                    if (err) {
                                    reject(err)
                                }
                                else {
                                        client.close();
                                        resolve(list);
                                }

                                });
                            }else{
                                client.close();
                                resolve('No Duplicate List Names');
                            }
                        }
                    })
                }else{
                    collection.updateOne({ _id: ObjectId(user), "lists": { "$elemMatch":  { "listname": name}}},
                                    {$set: {"lists.$.listname": list.listname, "lists.$.description": list.description, "lists.$.due": list.due }}, function (err, result) {
                                    if (err) {
                                    reject(err)
                                }
                                else {
                                        client.close();
                                        resolve(list);
                                }

                                });
                }
            }
        });
    })
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
                if(taskname != task.name){
                    collection.findOne({$and: [ {_id: ObjectId(user)}, {"lists.listname": listname }, {"lists.tasks.name": task.name} ]},
                    function (err, docs) {
                        if (err) {
                            reject(err)
                        } else {
                            if(docs === null || taskname === task.name){
                                    collection.updateOne({ _id: ObjectId(user)},  
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
                            }else{
                                client.close();
                                resolve('No Duplicate Task Names');
                            }
                        }
                    })
                } else {
                    collection.updateOne({ _id: ObjectId(user)},  
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
                collection.updateOne({ _id: ObjectId(user)},  
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
                collection.updateOne({ _id: ObjectId(user)},  
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
                collection.updateOne({ _id: ObjectId(user)},  
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
                        const results =  docs[0]

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

const getSalt = (username) => {
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
                        resolve(false);
                    } else if(docs.length > 0){
                        client.close();
                        resolve(jwt.sign({
                            data: docs[0].salt
                          }, process.env.outSaltKey, { expiresIn: '1m' }))
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
                console.log('Connected to check for existing email');
                const db = client.db(dbName)
                const collection = db.collection('ToDoObjects')
                collection.find({ email: email }).toArray(function (err, docs) {
                    if (err) {
                        reject(err)
                    } else if(docs.length === 0){
                        client.close();
                        resolve(err);
                    } else if(docs.length > 0){
                        client.close();
                        resolve(docs[0])
                    }
                });
            }
        });
    })
    return iou;
}

const checkUser = (profileID) => {
    let iou = new Promise((resolve, reject) => {
        MongoClient.connect(url, settings, function (err, client) {
            if (err) {
                reject(err)
            } else {
                console.log('Connected to server to check for google ID');
                const db = client.db(dbName)
                const collection = db.collection('ToDoObjects')
                collection.find({ providerId: profileID }).toArray(function (err, docs) {
                    if (err) {
                        reject(err)
                    } else if(docs.length === 0){
                        client.close();
                        resolve(err);
                    } else if(docs.length > 0){
                        client.close();
                        resolve(docs[0])
                    }
                });
            }
        });
    })
    return iou;
}

const logGoogle = (user, email) => {
    let iou = new Promise((resolve, reject) => {
        MongoClient.connect(url, settings, function (err, client) {
            if (err) {
                reject(err)
            } else {
                console.log('Connected to server to Check for Google accounts');
                console.log(email)
                const db = client.db(dbName)
                const collection = db.collection('ToDoObjects')
                collection.find({ email: email }).toArray(function (err, docs) {
                    if (err) {
                        reject(err)
                    } else if(docs.length === 0){
                        collection.insertOne(user, function (err, result) {
                            if (err) {
                              reject(err)
                          }
                          else {
                              collection.find({ email: email }).toArray(function (err, docs) {
                                  if(err){
                                      reject(err)
                                  }
                                  else{
                                    client.close();
                                    resolve(docs[0]);
                                  }
                              })    
                          }
                        })
                    } else if(docs.length > 0){
                        client.close();
                        resolve(docs[0])
                    }
                });
            }
        });
    })
    return iou;
}


module.exports = { testConnection, checkUser, logGoogle, getSalt, deleteListObj, deleteTaskObjSelected, deleteTaskObjDone, deleteTaskObj, updateTaskObjDone, updateTaskObj, updateListObj, readTaskObjects, readListObjects, createObject, createListObj, createTaskObj, checkPass, checkUse, checkEmail };
