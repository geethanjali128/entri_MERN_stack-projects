// const container=document.querySelector(".container")
const movieSelect=document.getElementById("movies")
    console.log(movieSelect)
     console.log(movieSelect.value)
var ticketPrice=+movieSelect.value
    
// console.log(ticketPrice)

 function updateCost(){
    const selectedSeats=document.querySelectorAll('.row .seat.selected')
    // console.log(selectedSeats)

    var finalCost=document.getElementById('finalcost')
    // console.log(finalCost)
    finalCost.style.display='block'
    finalCost.style.visibility="visible"

    const selectedSeatsCount=selectedSeats.length
    // console.log(selectedSeatsCount)

    var cost=document.getElementById('cost')
    cost.innerHTML="The total cost is Rs."+selectedSeatsCount*ticketPrice
    // console.log(cost)
 }


movieSelect.addEventListener('change',(e)=>{
    var screenNo=e.target.selectedIndex+1       //The selectedIndex property sets or returns the index of the selected option in a drop-down list.
                //  alert(screenNo)                              // The index starts at 0.
   
    if(screenNo===1){
        var screen1=document.getElementById('screen1')
        var screen2=document.getElementById('screen2')
        var screen3=document.getElementById('screen3')

        screen1.style.display="flex"
        screen1.style.visibility="visible"

        screen2.style.display="none"
        screen2.style.visibility="hidden"

        screen3.style.display="none"
        screen3.style.visibility="hidden"
        

    }
    else if(screenNo===2){
        var screen1=document.getElementById('screen1')
        var screen2=document.getElementById('screen2')
        var screen3=document.getElementById('screen3')

        screen2.style.display="flex"
        screen2.style.visibility="visible"

         screen1.style.display="none"
        screen1.style.visibility="hidden"

        screen3.style.display="none"
        screen3.style.visibility="hidden"
    }
    else if(screenNo===3){
        var screen1=document.getElementById('screen1')
        var screen2=document.getElementById('screen2')
        var screen3=document.getElementById('screen3')

         screen3.style.display="flex"
        screen3.style.visibility="visible"

          screen1.style.display="none"
        screen1.style.visibility="hidden"

        screen2.style.display="none"
        screen2.style.visibility="hidden"

       
    }

    ticketPrice= +e.target.value
   updateCost()
})

const choosingSeats=document.getElementById("chooseSeat")
choosingSeats.addEventListener('click',(e)=>{
    //classList returns the class name of an elelment
     if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
      e.target.classList.toggle('selected')
     }                                              
   updateCost()
})
 updateCost()
//   console.log(ticketPrice)


