const getYearNow = function() {
    const year = document.getElementById('year');
    year.innerText = new Date().getFullYear();
  };
  getYearNow();
  
  const urlParam = new URLSearchParams(location.search);
  const sneakersId = urlParam.get('id');
  
  const eventsUrl = "https://striveschool-api.herokuapp.com/api/product/";
  const myAPI = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkNDBjYjM4MzRiZjAwMTUwMDA3NzEiLCJpYXQiOjE3NDI1NTMyOTEsImV4cCI6MTc0Mzc2Mjg5MX0.m6ysHX2FBHgvVCPxLpoEmOff8YcfGjEIprLN_ChrF_A';
  
  const getSneakersDetails = function() {
    fetch(eventsUrl + '/' + sneakersId, {
      headers: {
        Authorization: `Bearer ${myAPI}`,
      },
    })
    .then((reponse)=>{
       console.log('?',reponse)
    })
    .catch((err) => {
      console.log('Error:', err);
    });
  };
  
  getSneakersDetails();
  