var jsf = require('json-schema-faker');


var schema = {
    type: 'object',
    properties: {
        video: {
            name: MediaEncryptedEvent, 
        }
    }
}

var sample = jsf(schema);
