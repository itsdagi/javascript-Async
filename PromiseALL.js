console.log("start")
const twitterProfile= new Promise((resolve, reject)=>{
  setTimeout(()=>
    {
      userData = {userID: 553, name:"shabham"}
      console.log("inside twitter")
      resolve(userData)
    },3000)
})
const instagramProfile = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    userData ={userID:343, name:"shabam"}
    console.log("inside instagram");
    resolve(userData);
  },200)
})
Promise.all([twitterProfile, instagramProfile])
  .then(data => console.log(data))
console.log("finish")