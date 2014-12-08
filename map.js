var mapJSON = {
    "map": {
        "numRows": 16,
        "numCols" : 16,
        "numLocks": 3,
    },
    "cats": [
        {
            "name": "fluffy",
            "color": {r: 128, g: 255, b: 64},
            "path": [{"x":0, "y":0},{"x":1,"y":0},{"x":1,"y":1},{"x":1,"y":2}]
        },
        {
            "name": "kitcat",
            "color":{r: 255, g: 255, b: 40},
            "path": [{"x":2, "y":2},{"x":2,"y":3},{"x":3,"y":3},{"x":3,"y":2}]
        }
    ],
    "pens": [
        {
            "color":{r: 230, g: 240, b: 17},
            "rects":[
                {
                    "rs": 2,
                    "re": 4,
                    "cs": 3,
                    "ce": 6
                }
            ]
        },
        {
            "color":{r: 200, g: 50, b: 50},
            "rects":[
                {
                    "rs": 0,
                    "re": 2,
                    "cs": 1,
                    "ce": 1
                }
            ]
        }
    ]
};
