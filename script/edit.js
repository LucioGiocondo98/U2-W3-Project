const getYearNow =function(){ 
    const year = document.getElementById('year')
    year.innerText = new Date().getFullYear();
}
getYearNow() 

class Sneakers{
constructor(_brand,_name,_price,_description,_imageUrl){
    this.brand = _brand
    this.name = _name
    this.price = _price
    this.description = _description
    this.imageUrl = _imageUrl
 }
}
const myAPI = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkNDBjYjM4MzRiZjAwMTUwMDA3NzEiLCJpYXQiOjE3NDI1NTMyOTEsImV4cCI6MTc0Mzc2Mjg5MX0.m6ysHX2FBHgvVCPxLpoEmOff8YcfGjEIprLN_ChrF_A'
//POST sull API
const form = document.getElementById('event-form')
form.addEventListener('submit',function(e){
    e.preventDefault()
    const brandInput = document.getElementById('brand')
    const nameInput = document.getElementById('name')
    const priceInput = document.getElementById('price')
    const descriptionInput = document.getElementById('description')
    const imgUrlInput = document.getElementById('imgUrl')
const sneakers = new Sneakers(brandInput.value,nameInput.value,priceInput.value,descriptionInput.value,imgUrlInput.value)
console.log('Sneakers?',sneakers)

const eventsUrl = "https://striveschool-api.herokuapp.com/api/product/"
fetch(eventsUrl,{
    method: 'POST',
    body: JSON.stringify(sneakers),
    headers: {
        "Authorization": `Bearer ${myAPI}`,
        'Content-Type': 'application/json',
    }
  })
  .then((response)=>{
    if(response.ok){
        alert('save complete')
        //return response.json(),
        form.reset()

    }else{
        throw new Error('errore')
    }
  })
  .catch((err)=>{
    console.log('errore', err)
  })
})