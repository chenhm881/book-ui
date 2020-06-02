import client from "../ajax/client";

export function getEnv() {
    let env = {
        TEST: 'test',
        INT: 'int',
        PROD: 'prod',
        LBTEST: '',
        LBINT: '-int',
        LBPROD: '-prod'
    };
    let url = window.location.href;

    if (url.indexOf('.test.') > 0) {
        return env.TEST;
    } else if (url.indexOf('.prod.') > 0) {
        return env.INT;
    } else {
        return env.TEST;
    }
}

export function deepCloneData(obj) {

    function deepClone(obj) {
        let objClone = Array.isArray(obj) ? [] : {};
        if (obj && typeof obj === 'object') {
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    if (obj[key] && typeof obj[key] === 'object') {
                        objClone[key] = deepClone(obj[key]);
                    } else {
                        objClone[key] = obj[key];
                    }
                }
            }
        }
        return objClone;
    }

    return deepClone(obj);
}

