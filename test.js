var Crawler = require('crawler');
var fs =require('fs');

linkList = [];

var c = new Crawler({
    rateLimit: 2500,
    maxConnections: 2,
    callback: function(error, res, done) {
        if(error) {
            console.log(error)
        } else {
            var $ = res.$;
            console.log($('title').text())
            links = $('a');
            $(links).each(function(i, link){
                console.log($(link).text() + ':\n  ' + $(link).attr('href'))
                linkList.push($(link).attr('href'))
                fs.appendFile('links.txt',$(link).attr('href') +'\n',function(err){
                if(err){
                    console.log(err)
                }
                //console.log('link saved!')
            })
            });
            
        }
        done();
    }
})


proxy = 'http://proxy.intra.bt.com:8080';

linkList.push('http://www.medium.com/')
i=0;
// if you want to crawl some website with 2000ms gap between requests
 c.queue({
    uri:'http://www.medium.com/',
    proxy: proxy
} ,function(){
    c.queue({uri:linkList[i++],proxy:proxy})
} )



/* c.queue({
    uri:linkList[0],
    proxy: proxy
})
 */
