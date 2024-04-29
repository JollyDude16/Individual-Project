const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlM2ZjNjIwNzNlOTA5MDAxNDJjY2YzZDg2MjEyZTk5YiIsInN1YiI6IjY2MmExYjZjZDRkNTA5MDBiYmUxYzlkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DCxqJ9YeW9s5m00Jrs42bnyGNYq0yY1DwVAbG-LyLik'
  }
};

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options) 
  .then(response => response.json())
  .then(data => {
    const mainBox = document.querySelector('.card_body');

    data.results.forEach(result =>{
      let title = result.original_title;
      let overview = result.overview;
      let poster_path = result.poster_path;
      let vote_average = result.vote_average;
      let id = result.vote_id;
//정보를가져와서
//변수 안에 넣고
      let temp_html =  
      `
      <div class='card_body' data-id="${id}">
        <div class="row row-cols-1 row-cols-md-3 g-3">
          <div class="col">
            <div class="card">
              <img src="https://image.tmdb.org/t/p/w500/${poster_path}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${overview}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      `;
      
      mainBox.insertAdjacentHTML('beforeend', temp_html); //함수로가져가서 생성하게 만듬
      
    });
  })

