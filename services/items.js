module.exports = {
  /**
  * Pull a list of items from item database
  * @param options.list Number of items to be displayed 

  */
  getItems: async (options) => {

    // Implement your business logic here...
    //
    // Return all 2xx and 4xx as follows:
    //
    // return {
    //   status: 'statusCode',
    //   data: 'response'
    // }

    // If an error happens during your business logic implementation,
    // you can throw it as follows:
    //
    // throw new Error('<Error message>'); // this will result in a 500

    var data = [[{
        "description": "<string>",
        "itemId": "<integer>",
        "name": "<string>",
        "price": "<integer>",
      }]],
      status = '200';

    return {
      status: status,
      data: data
    };  
  },

  /**
  * Obtain item details from item database
  * @param options.itemId Id of the item to pull details of 

  */
  getItemsItemId: async (options) => {

    // Implement your business logic here...
    //
    // Return all 2xx and 4xx as follows:
    //
    // return {
    //   status: 'statusCode',
    //   data: 'response'
    // }

    // If an error happens during your business logic implementation,
    // you can throw it as follows:
    //
    // throw new Error('<Error message>'); // this will result in a 500

    var data = {
        "description": "<string>",
        "itemId": "<integer>",
        "name": "<string>",
        "price": "<integer>",
      },
      status = '200';

    return {
      status: status,
      data: data
    };  
  },
};
