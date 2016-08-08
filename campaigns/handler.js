'use strict';

var doc = new doc.DynamoDB();

module.exports.handler = function(event, context, cb) {
  console.log("Received" + JSON.stringify(event, null, 2));
  var operation = event.operation;
  if (event.tableName) {
    event.payload.TableName = event.tableName;
  }

  switch (operation) {
    case 'create':
      dynamo.putItem(event.payload.context.done)
      break;
  }
};
