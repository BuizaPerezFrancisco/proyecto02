
db.col01.find( { item: "postcard" } )

//misma consulta usando el operador $eq

db.col01.find( { item: { $eq: "postcard" } } )

db.col01.find( {qty: { $eq: 25} } )

//los que tienen el valor "canvas" en el campo item

db.col01.find( { item: "canvas" } )

//hacer la misma consulta usando el operador $eq

db.col01.find( { item: { $eq: "canvas" } } )

 //los que en el campo qty tienen un valor igual a 20
db.col01.find( {qty: { $eq: 20} } )
/*
{ "_id" : 2, "item" : { "name" : "cd", "code" : "123" }, "qty" : 20, "tags" : [ "B" ] }
{ "_id" : 5, "item" : { "name" : "mn", "code" : "000" }, "qty" : 20, "tags" : [ [ "A", "B" ], "C" ] }
*/

//Donde el campo code sea 123
db.col01.find( { "item.code": "123" })

//Mongo interpreta una busqueda dentro de un array al darse cuenta que se trata de un array

db.col01.find({ tags: "B" })

db.col01.find( { tags: { $eq: [ "A", "B" ] } } )
