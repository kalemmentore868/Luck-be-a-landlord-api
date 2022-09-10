# Luck-be-a-landlord-api
An api based off of the Luck be a Landlord game where users could submit requests to either:
 Get /api/items - information on all cards currently in the database
 Get  /api/items/:itemName - information about one specific card
 Post /api/items -  add some card data to the database
 Post /api/items/:itemName - edit a card in the database 
 Delete /api/items/:itemName - delete a card from the database. 
It was built using the express framework and the data is being pulled from a custom designed MongoDb Atlas store.
