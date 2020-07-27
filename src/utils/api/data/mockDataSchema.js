module.exports = {
    "type": "object",
    "properties": {
        "user": {
            "type": "array",
            "minItems": 100,
            "maxItems": 200,
            "items": {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string",
                        "faker": "name.findName"
                    },
                    "email": {
                        "type": "string",
                        "faker": "internet.email"
                    }
                },
                "required": [
                    "name",
                    "email"
                ]
            }
        }
    }
}