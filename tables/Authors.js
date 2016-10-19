/**
 * Created by alberto on 19/10/16.
 */

var azureMobileApps = require('azure-mobile-apps');

var table = azureMobileApps.table();

table.columns = {
    "name": "string",
    "surname": "string"
};

module.exports = table;
