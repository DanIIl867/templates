const gallery = document.querySelector('js-gallery');
console.log(countries)
function makeGalleryItems(countries){
    return countries.map((country)=>{
    return `<li class="gallery__item">
            <div class="gallery__thumb">
            <img src="" alt="Прапор " width="320">
            </div>
            <h2></h2>
            <p><b>Столиця: </b></p>
            <p><b>Валюта: </b></p>
            <p><b>Офиційна мова: </b> </p>
            <p><b>Населення:</b> людей</p> 
        </li>`
    })
}