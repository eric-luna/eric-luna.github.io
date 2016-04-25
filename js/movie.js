$(document).ready(function() {

  var count = 0;
  var check = "";

  $('.search').keypress(function(e) {
    if (e.keyCode == 13)
      $('.button').click();
    count = 0;
  });

  $('.button').on('click', function() {
    $('.title, .poster, .overview,.release_date,.navigation,.trailer').empty();
    var search = $('.search').val();
    check = $('.search').val();
    if (check !== search) {
      count = 0;
    }
    var url = "http://api.themoviedb.org/3/search/movie?api_key=39124889ea92aada0703109651a543ab&query=" + search;

    $.ajax({
      url: url,
      type: 'GET',
      jsonpCallback: 'testing',
      contentType: 'application/json',
      dataType: 'jsonp',
      success: function(result) {
        var id = result.results[count]["id"];
        var url2 = "http://api.themoviedb.org/3/movie/" + id + "/videos?api_key=39124889ea92aada0703109651a543ab";

        $.ajax({
          url: url2,
          type: 'GET',
          jsonpCallback: 'testing',
          contentType: 'application/json',
          dataType: 'jsonp',
          success: function(result) {
            var key = result.results[0]["key"];
            var trailer = "https://www.youtube.com/watch?v=" + key;
            $(".trailer").append("<a href='" + trailer + "' target='_blank'><p>Click For Trailer</p></a>");
            console.log(key);
          }
        })

        var title = result.results[count]['title'];
        var release_date = result.results[count]["release_date"];
        var poster = result.results[count]['poster_path'];
        var overview = result.results[count]['overview'];

        $('.title').append("<h1>" + title + "</h1>");
        if (release_date === "") {
          $('.release_date').append("<p>Release Date: N/A</p>");
        } else {
          $('.release_date').append("<p>Release Date: " + release_date + "</p>");
        }

        if (poster === null) {
          $('.poster').append("<img src='img/noPoster.jpg'>");
        }
        if (poster !== null) {
          $('.poster').append("<img src='http://image.tmdb.org/t/p/w500/" + poster + "'>");
        }
        if (overview === "") {
          $('.overview').append("<p>No Description Available</p>");
        } else if (overview.length > 500) {
          $('.overview').append("<p>" + overview.slice(0, 500) + "...</p>");
        } else {
          $('.overview').append("<p>" + overview + "</p>");
        }

        if (count > 0) {
          $('.navigation').append("<button class='left action-button animate blue'>Prev</button>");
          $('.navigation').append("<button class='right action-button animate blue'>Next</button>");
        }
        if (count === 0) {
          $('.navigation').append("<button class='right action-button animate blue'>Next</button>");
        }
        $('.right').on('click', function() {
          if (count < result.results.length) {
            count = count + 1;
            $('button').click();
          }
          if (!(count < result.results.length)) {
            count = 0;
            $('button').click();
          }
        });
        $('.left').on('click', function() {
          if (count > 0) {
            count = count - 1;
            $('button').click();
          }
        });
        $(document).keydown(function(e) {
          if (e.keyCode == 37)
            $('.left').click();
        });
        $(document).keydown(function(e) {
          if (e.keyCode == 39)
            $('.right').click();
        });

      }
    })
  })
});