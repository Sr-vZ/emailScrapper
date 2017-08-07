var crawler = require('crawler');
 
var c = new Crawler({
    rateLimit: 2000,
    maxConnections: 1,
    callback: function(error, res, done) {
        if(error) {
            console.log(error)
        } else {
            var $ = res.$;
            console.log($('title').text())
        }
        done();
    }
})
 
// if you want to crawl some website with 2000ms gap between requests 
c.queue('http://www.somewebsite.com/page/1')
// c.queue('http://www.somewebsite.com/page/2')
// c.queue('http://www.somewebsite.com/page/3')
 
// if you want to crawl some website using proxy with 2000ms gap between requests for each proxy 
/* c.queue({
    uri:'http://www.somewebsite.com/page/1',
    limiter:'proxy_1',
    proxy:'proxy_1'
})
c.queue({
    uri:'http://www.somewebsite.com/page/2',
    limiter:'proxy_2',
    proxy:'proxy_2'
})
c.queue({
    uri:'http://www.somewebsite.com/page/3',
    limiter:'proxy_3',
    proxy:'proxy_3'
})
c.queue({
    uri:'http://www.somewebsite.com/page/4',
    limiter:'proxy_1',
    proxy:'proxy_1'
}) */
