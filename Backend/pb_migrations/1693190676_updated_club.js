migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ewavcj7r2hjzbfb")

  // remove
  collection.schema.removeField("qb9pjuvp")

  // remove
  collection.schema.removeField("tqhfqfqf")

  // remove
  collection.schema.removeField("ihozfflc")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ewavcj7r2hjzbfb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qb9pjuvp",
    "name": "test",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tqhfqfqf",
    "name": "uat",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ihozfflc",
    "name": "sandbox",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
