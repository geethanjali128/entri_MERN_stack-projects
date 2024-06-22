import mysql2 from 'mysql2';


const connection=mysql2.createPool({
    host:'127.0.0.1',
    user:'root',
    password:"database@123#",
    database:'social_media'
}).promise()

// sql operations
export async function readPosts(){
    let output= await connection.query("select * from posts")
   return output[0]
}

export async function readUser(profile){
    let output= await connection.query("select * from users where profile='"+profile+"'")
   return   output[0]
}

export async function insertUser(name,profile,password,headline){
   const output=await connection.query("insert into users(name,profile,password,headline) values('"+name+"','"+profile+"','"+password+"','"+headline+"')")
    return output[0]
}

export async function insertPost(profile,content){
    const output=await connection.query("insert into posts(profile,content,likes,shares) values('"+profile+"','"+content+"',0,0)")
     return output[0]
}


export async function likeFun(content){
   
    const output= await connection.query("select likes from posts where content='"+content+"'")
    //  console.log(output[0][0])
     const likes=output[0][0].likes
  //  console.log(likes)
    const incLikes=likes+1
    const result=await connection.query("update posts set likes="+incLikes+" where content='"+content+"'")
    return result 
  
}

export async function shareFun(content){
  const output= await connection.query("select shares from posts where content='"+content+"'")
 console.log(output)
    const shares= output[0][0].shares
    console.log(shares)
  const incShares=shares+1
  const result= await connection.query("update posts set shares="+incShares+" where content='"+content+"'")
  console.log(result)
  return result
}

export async function deleteFun(content){
  return  await connection.query("delete from posts where content='"+content+"'")
  
}

// console.log( await readPosts())
// console.log(await readUser())
// console.log( await insertUser())
// console.log( await likeFun("hello everyoone ,this is meghana and i am astudent from entri FSD course, i am eagerly waiting to learn this course"))
// console.log( await shareFun("Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."))

// console.log(await deleteFun("It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."))