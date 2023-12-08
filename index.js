console.log("Start")
function loginUser(email, password){
  setTimeout(()=>{
    userData = {userID:564, status: "success"}
    return userData;
  },2000);  
}

function getUserTweets(){}
function getTweetComments(){}

const data = loginUser("dagimalemux@gmail.com", "random");
console.log(data)
console.log("Finish")