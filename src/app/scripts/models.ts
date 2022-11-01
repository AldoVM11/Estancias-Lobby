/**
 * Models generated from "Model and Storage" and models extracted from services.
 * To generate entity use syntax:
 * Apperyio.EntityAPI("<model_name>[.<model_field>]");
 */
export var models = {
    "UserModel": {
        "type": "object",
        "properties": {
            "address": {
                "type": "string"
            },
            "dateOfBirth": {
                "type": "string"
            },
            "lastName": {
                "type": "string"
            },
            "phone": {
                "type": "string"
            },
            "firstName": {
                "type": "string"
            },
            "gender": {
                "type": "string"
            },
            "email": {
                "type": "string"
            },
            "photo": {
                "type": "string"
            },
            "job": {
                "type": "string"
            }
        }
    },
    "String": {
        "type": "string"
    },
    "MessagesModel_0": {
        "type": "array",
        "items": [{
            "type": "MessageModel_0"
        }]
    },
    "Boolean": {
        "type": "boolean"
    },
    "MessageModel": {
        "type": "object",
        "properties": {
            "message": {
                "type": "string"
            },
            "name": {
                "type": "string"
            },
            "time": {
                "type": "string"
            },
            "avatar": {
                "type": "string"
            },
            "title": {
                "type": "string"
            }
        }
    },
    "MessagesModel": {
        "type": "array",
        "items": [{
            "type": "MessageModel"
        }]
    },
    "Number": {
        "type": "number"
    },
    "Any": {
        "type": "any"
    },
    "Function": {
        "type": "Function"
    },
    "Promise": {
        "type": "Promise"
    },
    "Observable": {
        "type": "Observable"
    },
    "MessageModel_0": {
        "type": "object",
        "properties": {
            "me": {
                "type": "boolean"
            },
            "message": {
                "type": "string"
            },
            "time": {
                "type": "string"
            }
        }
    },
    "FileReadService": {
        "type": "object",
        "properties": {
            "request": {
                "type": "object",
                "properties": {
                    "data": {
                        "type": "object",
                        "properties": {
                            "blobType": {
                                "type": "string"
                            },
                            "filePath": {
                                "type": "string"
                            },
                            "fileInput": {
                                "type": "any"
                            },
                            "resultFormat": {
                                "type": "string",
                                "default": "FORM_DATA"
                            },
                            "formDataFileName": {
                                "type": "string"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "data": {
                        "type": "object",
                        "properties": {
                            "data": {
                                "type": "any"
                            }
                        }
                    }
                }
            }
        }
    },
    "GetCities": {
        "type": "object",
        "properties": {
            "request": {
                "type": "object",
                "properties": {
                    "data": {
                        "type": "object",
                        "properties": {
                            "query": {
                                "type": "string"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "data": {
                        "type": "array",
                        "items": [{
                            "type": "object",
                            "properties": {
                                "name": {
                                    "type": "string"
                                }
                            }
                        }]
                    }
                }
            }
        }
    }
};
/**
 * Data storage
 */
export const _aioDefStorageValues = {
    variables: {
    },
    storages: {
    }
}