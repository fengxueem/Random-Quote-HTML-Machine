$(document).ready(function() {
  $("#weiboShare").click(function() {
    $('#weiboShare').attr("href", 'http://service.weibo.com/share/share.php?title=' + encodeURIComponent($('#text').text() + " -" + $('#author').text()));
  });
});
