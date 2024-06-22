const express=require('express')

const app=express()



const questions=[
    {
        question:"how to solve python",
        slug:"how-to-install-python",
        votes:5,
        views:200,
        tags:"python"
    }, 
     {
        question:"how to solve javascript",
        slug:"how-to-install-javascript",
        votes:10,
        views:480,
        tags:"javascript"
    },

      {
        question:"how to solve c++",
        slug:"how-to-install-c++",
        votes:23,
        views:456,
        tags:"c++"
    }
]

const users=[
    {
        name:"michale",
        area:"UK",
        followers:56
    },
     {
        name:"neeraj",
        area:"US",
        followers:34
    },
     {
        name:"rohith",
        area:"IN",
        followers:89
    }
]

const tags=[
    {
        name:"javascript",
        des:"how to store data in varaiables",
        noOfQues:56
    },
     {
        name:"python",
        des:"how to store data in varaiables",
        noOfQues:34
    },
     {
        name:"c++",
        des:"hoe to store data in variables",
        noOfQues:89
    }
]

const jobs=[
    {
        name:"java developer",
        des:" proficient in java",
        location:"hyderabad",
        company:"amazon",
        tags:45
    },
     {
        name:"react developer",
        des:" proficient in react",
        location:"mumbai",
         company:"google",
        tags:78
    },
     {
        name:"javaScript developer",
        des:" proficient in javaScript",
        location:"bangalore",
         company:"netflix",
        tags:56
    }
]






app.get('/',(req,res)=>{
    res.send("home")
})

app.get('/questions',(req,res)=>{
    
    res.send(questions)
})

app.get('/questions/:slug',(req,res)=>{
    const slug=req.params.slug
    console.log(req.params.slug)

  questions.map((obj)=>{
        if(obj.slug==slug){
            res.send(obj)
            
        }
   })
   
  
   res.send("question not found")
  
})

app.get('/users',(req,res)=>{

    res.send(users)
})

app.get('/tags',(req,res)=>{

    res.send(tags)
})

app.get('/jobs',(req,res)=>{

    res.send(jobs)
})

app.get('/jobs/:company',(req,res)=>{
    const company=req.params.company
    console.log(req.params.company)

    res.send(jobs.filter((job)=>{
        if(job.company==company){
            return job
        }
    }))

   
})






app.listen(3005,()=>{
    console.log("server is running on port 3005")
})