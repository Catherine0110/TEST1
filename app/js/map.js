ymaps.ready(init);
function init(){
    
    var myMap = new ymaps.Map("map", {
      
        center: [56.13884906858732,40.42537349999994],
       
        zoom: 17 ,
        controls: []
    });


myMap.geoObjects.add(new ymaps.Placemark([56.13884906858732,40.42537349999994],{},    
    {
   preset: 'islands#redDotIcon'
}));
}

