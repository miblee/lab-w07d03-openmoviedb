console.log('hello from main.js');
// const url = `http://www.omdbapi.com/?t=&y=&plot=short&r=json`
function renderSearch(res){
  var list = '<ul>';
  res.forEach(function(movie){
    const title = movie.Title;
    const id = movie.imdbID;
    list += `
      <li data-id="${id}">${title}</li>
      `
    });
  list += '</ul>';
  $('#results').html(list);
}

function renderMovie(res){
  const details = `
    <h2>${res.Title}</h2>
    <p>${res.Plot}</p>
    <img src=${res.Poster}>`;
  $('#detail').html(details);
}



$("#search").on('click', function(evt){
  const $query = $('#query').val();
  omdb.search($query, renderSearch);
})

$('#results').on('click', function(evt){
  const $id = $(evt.target).data('id');
  omdb.find($id, renderMovie);
})

