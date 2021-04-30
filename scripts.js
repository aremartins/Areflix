var listaFilmes = ["https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY268_CR1,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BOTgwMzFiMWYtZDhlNS00ODNkLWJiODAtZDVhNzgyNzJhYjQ4L2ltYWdlXkEyXkFqcGdeQXVyNzEzOTYxNTQ@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BYTdiZGY1MTctMjQzYy00ZTc0LThiM2EtY2U2OGIwYjBiNTM2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BODQ0NDhjYWItYTMxZi00NTk2LWIzNDEtOWZiYWYxZjc2MTgxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg"]


var nomeFilmes = ["Forrest Gump", "De Volta Para o Futuro", "O Jogo da Imitação", "Coringa", "Marley e Eu", "A Origem", "Jumanji"]

var trailers = ["https://www.imdb.com/video/vi3567517977?playlistId=tt0109830&ref_=tt_pr_ov_vi", "https://www.imdb.com/title/tt0816692/?ref_=fn_al_tt_1","https://www.imdb.com/video/vi252380953?playlistId=tt0088763&ref_=tt_ov_vi", "https://www.imdb.com/video/vi1723318041?playlistId=tt7286456&ref_=tt_pr_ov_vi", "https://www.imdb.com/video/vi2121072665?playlistId=tt0822832&ref_=tt_pr_ov_vi","https://www.imdb.com/video/vi2959588889?playlistId=tt1375666&ref_=tt_ov_vi","https://www.imdb.com/video/vi3413817625?playlistId=tt2283362&ref_=tt_ov_vi"]

for (var i = 0; i < listaFilmes.length; i++) {
  document.write('<div class="catalog">'  + '<a href="' + trailers[i] +  '"' + 'target="_blank">' + '<img src=' +  listaFilmes[i] + '>'  + '</a>' + '<span class="title">' + nomeFilmes[i] + '</span>' + '</div>')  
}

function Buscar() {
  var busca = document.getElementById("busca")
  var busca = busca.value
  for (var i = 0; i < nomeFilmes.length; i++) {
    var res = ''
    if (busca == nomeFilmes[i]){
        document.write('<div class="catalog">'  + '<a href="' + trailers[i] +  '"' + 'target="_blank">' + '<img src=' +  listaFilmes[i] + '>'  + '</a>' + '<span class="title">' + nomeFilmes[i] + '</span>' + '</div>')
        document.write('<a href= "https://codepen.io/aremartins/pen/gOgaZdy?editors=0010"> Voltar </a>' )
    }
  }
}

