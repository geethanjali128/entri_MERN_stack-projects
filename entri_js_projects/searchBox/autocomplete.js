
let availableKeyWords=[
    "kurtas","pants","tea-shirts",
    "TV","AC","cooler","washing machine",
    "facewash","moisturizer","sunscreen",
    "kids-toys","frocks","jumpsuits","deodrant",
    "how to cook biryani","who is the prime minister of the india",
    "news","songs","movies","how to cook pasta",
    "who is the director of salar"
]

let resultBox=document.getElementById("result-box")
let inputBox=document.getElementById("input-box")

inputBox.addEventListener('keyup',function (){
    let result=[]
    let input=inputBox.value
    if(input.length){
        result=availableKeyWords.filter((keyword)=>{
           return  keyword.toLowerCase().includes(input.toLowerCase())
        })
         console.log(result)
    }
    displayResult(result)

    if(!result.length){
        resultBox.innerHTML=" "
    }
   
})

function displayResult(result){
    const content=result.map((list)=>{
        return "<li onClick=selectInput(this)>"+ list +"</li>"
    })
   
     return resultBox.innerHTML="<ul>"+ content.join(" ")  +"</ul>"
   
}

function selectInput(list){
    inputBox.value=list.innerHTML
    resultBox.innerHTML=" "
}