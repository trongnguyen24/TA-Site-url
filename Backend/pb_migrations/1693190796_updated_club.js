migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ewavcj7r2hjzbfb")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ixccxksm",
    "name": "thumbnail",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [
        "image/jpeg",
        "image/png",
        "image/svg+xml",
        "image/gif",
        "image/webp"
      ],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ewavcj7r2hjzbfb")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ixccxksm",
    "name": "thumbnail",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [
        "image/jpeg",
        "image/png",
        "image/svg+xml",
        "image/gif",
        "image/webp"
      ],
      "thumbs": [
        "64x64f",
        "128x128f"
      ],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
})
