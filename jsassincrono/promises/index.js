function promise(){
  const loginUser = (email, password) =>{
    return new Promise((resolve, reject) =>{
      const error = false;
      if(error){
        reject(new Error("error in login"));
      }
      console.log("user logged!");
      resolve({email});
    });
  }
  const userGetVideo = (email) =>{
    return new Promise((resolve, reject) =>{
      setTimeout(() =>{
        console.log("userGetVideo");
        resolve(["v1", "v2", "v3"]);
      }, 2000)
    });
  }
  const getVideoDetails = (video) =>{
    return new Promise((resolve, reject) =>{
      setTimeout(() =>{
        console.log("getVideoDetails");
        resolve({title: "Reagindo comidas"});
      }, 2500);
    })}

  loginUser("livia@gmail.com", "94823")
  .then((user) => userGetVideo(user.email))
  .then((videos) => getVideoDetails(videos[0]))
  .then((videosDetails) => console.log({ videosDetails}))
  .catch((error) => console.log({error}));
}

function promiseAll(){ //mais de uma promise ao mesmo tempo
  const youtube = new Promise((resolve) =>{
    setTimeout(() =>{
      resolve("videos from youtube");
    }, 1000);
  });
  const facebook = new Promise((resolve) =>{
    setTimeout(() =>{
      resolve("posts from facebook");
    }, 2000);
  });
  const twitter = new Promise((resolve) =>{
    setTimeout(() =>{
      resolve("militancia");
    }, 3000);
  });

  Promise.all([youtube, facebook, twitter]).then((result) =>{ //espera até o tempo da ultima promise
    console.log({result});
  });
}
//main
{
  //promise();
  promiseAll();
}