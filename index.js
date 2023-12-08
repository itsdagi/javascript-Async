console.log("Start")

 function loginUser(email, password, callBack){
  setTimeout(()=>{
    callBack({userID:564, status: "success"})
    console.log("User logged in" + email)
  },2000);  
}

function getUserTweets(userID, callBack){
  setTimeout(()=>{
    tweetData = [{tweetID:1, content:"ABC"}, {tweetID:2, content:"XYZ"}]
    callBack(tweetData);
    console.log("tweet data")
    },1000)
}
function getTweetComments(tweetID, callBack){
  setTimeout(()=>{
    commentData=[{commentID:1, content:"COOL!"}]
   callBack(commentData);
  },1000)
}
const data = loginUser("xcvkp@example.com","dagim",(userData) =>{
  getUserTweets(userData.userID, ()=>{
    getTweetComments(tweetData[0].tweetID,()=>{
      console.log("callback")
    })
  });
});


console.log("Finish");