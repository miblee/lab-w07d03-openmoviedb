const omdb = {
  search,
  find
}


function search(query, cb){
  const url = `http://www.omdbapi.com/?s=${query}&r=json`;
  $.get(url, function(res){
    cb(res.Search);
  })
}


function find(id, cb){
  const url = `http://www.omdbapi.com/?i=${id}&r=json`;
  $.get(url, function(res){
    cb(res);
    console.log(res);
  })
}
