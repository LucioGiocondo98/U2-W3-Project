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
    fetch(eventsUrl + sneakersId, {
      headers: {
        Authorization: `Bearer ${myAPI}`,
      },
    })
    .then((reponse)=>{
        if(reponse.ok){
            console.log('response',reponse)
            return reponse.json()
        }else{
            throw new Error('errore')
        }
    })
    .then((data)=>{
        console.log('data' ,data)
       
        const newBrand = document.getElementById('brand')
        const newName = document.getElementById('name')
        const newPrice = document.getElementById('price')
        const newDescription = document.getElementById('description')
        const newImg = document.getElementById('img')

        newBrand.innerText = data.brand
        newName.innerText = data.name
        newPrice.innerText = data.price
        newDescription.innerText = data.description
        newImg.src = data.imageUrl
    
})
    .catch((err) => {
      console.log('Error:', err);
    });
  };
  
  getSneakersDetails();

  