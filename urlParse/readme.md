#目的#

识别url，获取url的相关信息。


#使用参考#
```
var url = 'http://www.a.com/b/c.html?d=1&e=2#f';

var urlObj = new urlParse(url);
urlObj.getProtocol();			// 'http:'
urlObj.getHost();				// 'www.a.com'
urlObj.getHostname();			// 'www.a.com'
urlObj.getPort();				// 80
urlObj.getPathname();			// '/b/c.html'
urlObj.getSearch();				// '?d=1&e=2'
urlObj.getHash();				// '#f'
urlObj.getParams();				// {d: '1', e: '2'}
urlObj.getParam('d');			// '1'
```
