function getQuote() {
  // This CORS proxy add a 'Access-Control-Allow-Origin:*' in the server response header to handle
  // cross origin resource sharing.
  $.ajax('https://big-okra.glitch.me/https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=', 
  {
    headers: {
      "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8"
    },
    success: function(data) {
        var post = data.shift(); // The data is an array of posts. Grab the first one.
        $('#author').text(post.title);
        $('#text').text(post.content.substring(3, post.content.length - 5));
      },
    cache: false
  });

  // This works fine.
  // $.ajax('https://andruxnet-random-famous-quotes.p.mashape.com/cat=', 
  // {
  //   headers: {
  //     "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
  //     Accept: "application/json",
  //     "Content-Type": "application/x-www-form-urlencoded"
  //   },
  //   success: function(r) {
  //     if (typeof r === 'string') {
  //      r = JSON.parse(r); 
  //     }
  //     $('#text').text(r.quote);
  //     $('#author').text(r.author);
  //   },
  //   cache: false
  // });
}

$(document).ready(function() {
  getQuote();
  $("#weiboShare").click(function() {
    $('#weiboShare').attr("href", 'http://service.weibo.com/share/share.php?title=' + encodeURIComponent($('#text').text() + " -" + $('#author').text()));
  });
  $("#newQuote").click(function() {
  	getQuote();
  });
});
