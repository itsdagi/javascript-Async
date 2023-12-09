console.log("Start")

 function loginUser(email, password){
   return new Promise((resolve, reject)=>{
     
   
  setTimeout(()=>{
    const userData = {userID:564, status: "success"}
    console.log("User logged in" + email)
    resolve(userData);
  },2000);  
  })
 }

function getUserTweets(userID){
  return new Promise((resolve, reject)=>{
  setTimeout(()=>{
    tweetData = [{tweetID:1, content:"ABC"}, {tweetID:2, content:"XYZ"}]
    resolve(tweetData);
    console.log("tweet data")
    },1000)
  })
}
function getTweetComments(tweetID){
  return new Promise((resolve, reject)=>{
  setTimeout(()=>{
    commentData=[{commentID:1, content:"COOL!"}]
   resolve(commentData);
    console.log("inside comments")
  },1000)
})
}
loginUser("dagim@gmail.com","123456")
  .then(userData => getUserTweets(userData.userID))
  .then(tweetData => getTweetComments(tweetData.tweetID))  
  .then(commentData => console.log(commentData))
  .catch(error=>console.log(error)) //called when using reject

console.log("Finish");