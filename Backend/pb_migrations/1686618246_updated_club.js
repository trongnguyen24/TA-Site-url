migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ewavcj7r2hjzbfb")

  collection.createRule = "@request.auth.id != \"\""
  collection.updateRule = "@request.auth.id != \"\""
  collection.deleteRule = "@request.auth.id != \"\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ewavcj7r2hjzbfb")

  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
