var urlParse = function (url) {
    var reg = /^https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,}/;
    if (!reg.test(url)) {
        throw new Error('The param must be a correct url');
    }
    if (!(this instanceof urlParse)) {
        return new urlParse(url); 
    }
    this.url = url;
    this.init();
};

urlParse.prototype = {
    init: function () {
        var attrs = ['protocol', 'host', 'hostname', 'port', 'pathname', 'search', 'hash', 'href'],
            element = document.createElement('a'),
            attr = '';
        element.href = this.url;
        for (attr of attrs) {
            this[attr] = element[attr];
        }
    },
    getProtocol: function () {
        return this.protocol;
    },
    getHost: function () {
        return this.host;
    },
    getHostname: function () {
        return this.hostname;
    },
    getPort: function () {
        return this.port;
    },
    getPathname: function () {
        return this.pathname;
    },
    getSearch: function () {
        return this.search;
    },
    getHash: function () {
        return this.hash;
    },
    getParams: function () {
        if (this.search.length === 0) {
            return {};
        }
        var queries = this.search.substr(1).split('&'),
            split = '',
            result = {};
        for( i = 0; i < queries.length; i++ ) {
            split = queries[i].split('=');
            if (!split[0] || !split[1]) {
                continue;
            }
            result[split[0]] = split[1];
        }
        return result;
    },
    getParam: function (param) {
        var params = this.getParams()
        return params[param];
    }
};

export default urlParse;