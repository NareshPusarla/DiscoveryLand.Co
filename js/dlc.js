window.addEventListener('DOMContentLoaded', function(){
    console.log("hello js");

    let detailsArray = [{imgName:"ZAPOTAL",imgDesc:"Guanacaste, Costa Rica"},{imgName:"NORTH SHORE PRESERVE",imgDesc:"Kaua'i, Hawaii"},{imgName:"JAMES ISLAND",imgDesc:"Southern Gulf islands, British Columbia Canada"},{imgName:"COSTATERRA",imgDesc:"Comporta, Portugal"},{imgName:"BARBUDA OCEAN CLUB",imgDesc:"Barbuda, West Indies"},
    {imgName:"DRIFTWOOD",imgDesc:"Austin, Texas"},{imgName:"TROUBADOUR",imgDesc:"Nashville, Tennessee"},{imgName:"PLAYA GRANDE",imgDesc:"Rio San Juan, Dominican Republic"},{imgName:"CHILENO BAY",imgDesc:"Cabo San Lucas, Mexico"},{imgName:"THE SUMMIT",imgDesc:"Las Vegas, Nevada"},
    {imgName:"DUNE DECK",imgDesc:"Westhampton Beach, NY"},{imgName:"SILO RIDGE",imgDesc:"Amenia, New York"},{imgName:"MA`KENA",imgDesc:"Maui, Hawaii"},{imgName:"YELLOWSTONE CLUB",imgDesc:"Big Sky, Montana"},{imgName:"GOZZER RANCH",imgDesc:"Coeur d'Alene, Idaho"},
    {imgName:"EL DORADO",imgDesc:"Los Cabos, Mexico"},{imgName:"MADISON",imgDesc:"La Quinta, California"},{imgName:"BAKER'S BAY",imgDesc:"Great Guana Cay, Bahamas"},{imgName:"HIDEAWAY",imgDesc:"La Quinta, California"},{imgName:"MOUNTAINTOP",imgDesc:"Cashiers, North Carolina"},
    {imgName:"MIRABEL",imgDesc:"Scottsdale, Arizona"},{imgName:"KUKI'O",imgDesc:"Kohala, Hawaii"},{imgName:"VAQUERO",imgDesc:"Westlake, Texas"},{imgName:"IRON HORSE",imgDesc:"Whitefish, Montana"},{imgName:"CORDEVALLE",imgDesc:"Silicon Valley, California"},
    {imgName:"ESTANCIA",imgDesc:"Scottsdale, Arizona"}
    ]

    let count=0;
    let prev=document.getElementById('prev');
    let next = document.getElementById('next');

    let _title=document.querySelector('.imgName');
    let _desc=document.querySelector('.imgDesc');

    _title.innerHTML=detailsArray[count].imgName;
    _desc.innerHTML=detailsArray[count].imgDesc;


    prev.addEventListener('click', function(){
        
        if(count>0){
            count--;
        }else{
            count=26;
        }
        console.log('count', count, detailsArray[count].imgName, detailsArray[count].imgDesc);
        _title.innerHTML=detailsArray[count].imgName;
        _desc.innerHTML=detailsArray[count].imgDesc;

    })

    next.addEventListener('click', function(){
        if(count<25){
            count++;
        }else{
            count=0;
        }
        console.log('count', count, detailsArray[count].imgName, detailsArray[count].imgDesc);
        _title.innerHTML=detailsArray[count].imgName;
        _desc.innerHTML=detailsArray[count].imgDesc;
       })
})