window.addEventListener('DOMContentLoaded', function(){
    console.log("hello js");

    let detailsArray = [{title:"Discovery's newest<br>property in Kaua`i North<br>Shore Preserve", desc:"Discovery Land Company is excited to announce our 25th residential club community on the majestic North Shore Preserve, a one-of-a-kind residential community, spans one thousand acres at the base of the mountains in the pastoral Hanalei valley. This newly re-imagined, low-density project is a secluded and peaceful island oasis with limited initial homesite and hale offerings."},
        {title:"James Island <br>Discovery's Newest Property", desc:"Discovery Land Company is excited to announce our 24th private luxury residential community. James Island Golf and Ocean Club, a 780-acre private island in British Columbia with only 76 lots, is Discovery Land Company’s most exclusive community to date and Discovery’s first project in Canada."},
        {title:"CostaTerra<br>Discovery's 23rd property", desc:"Discovery Land Company, the world’s leading developer of luxury private residential communities, clubs and resorts, has announced its 23rd property and first in Europe."},
        {title:"Troubadour To Open Golf Course Fall 2019", desc:"Troubadour Golf &amp; Field Club, a Discovery Land Company community, is pleased to announce the opening of its 18-hole Tom Fazio-designed golf course this fall."}
    ]

    let count=0;
    let prev=document.getElementById('prev');
    let next = document.getElementById('next');

    let _title=document.querySelector('.title');
    let _desc=document.querySelector('.desc');

    _title.innerHTML=detailsArray[count].title;
    _desc.innerHTML=detailsArray[count].desc;


    prev.addEventListener('click', function(){
        
        if(count>0){
            count--;
        }else{
            count=4;
        }
        console.log('count', count, detailsArray[count].title, detailsArray[count].desc);
        _title.innerHTML=detailsArray[count].title;
        _desc.innerHTML=detailsArray[count].desc;

    })

    next.addEventListener('click', function(){
        if(count<3){
            count++;
        }else{
            count=0;
        }
        console.log('count', count, detailsArray[count].title, detailsArray[count].desc);
        _title.innerHTML=detailsArray[count].title;
        _desc.innerHTML=detailsArray[count].desc;
       })
})