/**
 * Created by alberto on 19/10/16.
 */

var azureMobileApps = require('azure-mobile-apps');


var table = azureMobileApps.table();
table.columns = {
    "name": "string",
    "surname": "string"
};

table.read.access = 'anonymous';
table.update.access = 'authenticated';
table.delete.access = 'authenticated';
table.insert.access = 'authenticated';
//table.update.access = 'disabled';

module.exports = table;
