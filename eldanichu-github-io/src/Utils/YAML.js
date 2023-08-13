import YAML from 'yaml'

export class YML {
    static parse(ymlStr, options = {}) {
        YAML.parse(ymlStr, options);
    }

    static stringify(obj, replacer = null) {
        YAML.stringify(obj, replacer)
    }
}