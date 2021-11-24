

export function loadStar (name, bool, scene) {

var bot = "../particles";
BABYLON.ParticleHelper.BaseAssetsUrl = bot;

var myParticleSet = BABYLON.Tools.LoadFile(`${bot}/systems/${name}.json`, (data) => {});


 if (bool == true) {

 myParticleSet = new BABYLON.ParticleHelper.CreateAsync(name, scene).then(function(set) {
 set.start();
   });

 }else if(bool == false) {

 myParticleSet = new BABYLON.ParticleHelper.CreateAsync(name, scene).then(function(set) {
 set.stop();
 
});
 }else {

 }
    


}


//** UI Modules **//

//Button section

var hostDiv = document.createElement("div"); 
hostDiv.setAttribute('id',   'LeftDiv');
hostDiv.style.flexDirection= 'column';
hostDiv.style.display = 'flex';
hostDiv.style.alignItems = "center";
hostDiv.style.position= "absolute";
hostDiv.style.height= '100%'
document.body.appendChild(hostDiv);


var hostDiv2 = document.createElement("div"); 
hostDiv2.setAttribute('id',   'LeftDiv2');
hostDiv2.style.flexDirection= 'column';
hostDiv2.style.display = 'flex';
hostDiv2.style.alignItems = "center";
hostDiv2.style.height= "100%"
hostDiv2.style.position= "absolute";
document.body.appendChild(hostDiv2);



export function searchBox () {
//Search box
//searchbox on form
  var searchbox = document.createElement("INPUT"); 
//searchbox HTML DOM
  searchbox.setAttribute('type', 'search');
  searchbox.setAttribute('id',   'search');
  // searchbox = document.styleSheets[0].cssRules; //Css rules?
  let keyframes = searchbox[0];
  searchbox.style.position= 'relative';
  searchbox.style.display= 'inline-block';
  searchbox.style.color= "black";
  searchbox.placeholder = "";
  searchbox.style.top= '5%'
  searchbox.style.borderRadius = "25px";
  searchbox.autocomplete = "off"; // no suggestion box from previous input
  searchbox.style.height = "30px"; 
  searchbox.style.border = "30px";
  // searchbox.style.paddingLeft = "30px"
  // searchbox.style.paddingRight = "35px"
  searchbox.style.marginLeft = 'auto'
  searchbox.style.marginRight = 'auto'
  searchbox.style.fontSize= "20px";
  searchbox.style.outlineWidth = "5px";
  searchbox.style.outlineColor = "grey";
  searchbox.style.background = "black";
  searchbox.style.width = "3%";
  searchbox.style.left= "2%";
  searchbox.style.outlineStyle = "double";
  searchbox.onmouseover = function(){

    //searchbox effect
  searchbox.style.background = 'black';
  searchbox.style.color = 'white';
  searchbox.style.height = "7%"; 
  // searchbox.style.width = "20%";
  searchbox.style.left= "45%";
  searchbox.style.outlineStyle = "double";
  searchbox.placeholder = "Search the Web..."; //Css atributes in Css script

  
  //button effect
  searchbutton.style.width = "35px";
  searchbutton.style.height = "35px";
  searchbutton.style.top= '11%';
  searchbutton.style.left= "18%";
  searchbutton.src= "../textures/search-icon-s.png";


    };
    searchbox.onmouseleave = function(){
      
  
    //searchbox effect
    searchbox.style.background = 'black';
    searchbox.style.color = 'white';
    searchbox.style.height = "7%"; 
    searchbox.style.width = "20%";
    searchbox.style.left= "45%";
    searchbox.style.outlineStyle = "double";
    searchbox.placeholder = "Search the Web..."; //Css atributes in Css script

  
  //button effect
  searchbutton.style.width = "35px";
  searchbutton.style.height = "35px";
  searchbutton.style.top= '11%';
  searchbutton.style.left= "18%";
  searchbutton.src= "../textures/search-icon-s.png";

    // if searchbox is idle after a while fold back, being empty or not affects duration for fold
    setTimeout(function () {

    if (searchbox.value.length == 0)
    { 

    searchbox.style.background = "black";
    searchbox.style.width = "0%";
    searchbox.style.left= "2%";
    searchbox.style.outlineStyle = "double";
    searchbox.placeholder = "";


    searchbutton.style.left= "3%";
    searchbutton.style.top= '11.5%';
    searchbutton.src= "../textures/search-icon-s.png";





    }else if (searchbox.value.length > 0) {
      setTimeout(function () {

    searchbox.style.background = "black";
    searchbox.style.width = "0%";
    searchbox.style.left= "2%";
    searchbox.style.outlineStyle = "double";
    searchbox.placeholder = "";


    searchbutton.style.left= "3%";
    searchbutton.style.top= '11.5%';
    searchbutton.src= "../textures/search-icon-s.png";
    


      } , 10000)

    }

    // } return console.error();
  } , 10000);

  
    };
  //document.body.appendChild(searchbox)
  document.body.appendChild(searchbox);
  

  //Image button
  var searchbutton = document.createElement("INPUT"); 
  searchbutton.setAttribute('type', 'image');
  searchbutton.setAttribute('id',   'myBtn');
  searchbutton.style.position= 'relative';
  // searchbutton.style.background = "darkslategrey";
  searchbutton.style.left= "-45%";
  // searchbutton.style.float= "right";
  // searchbutton.style.justifyContent= "right";
  searchbutton.style.top= '-5%'
  searchbutton.style.width = "30px";
  searchbutton.style.height = "30px"; 
  searchbutton.style.justifyContent = "center";
  //searchbutton.style.borderRadius = "10px";
  searchbutton.src= "../textures/search-icon-s.png";
    //use real height instead
  searchbutton.onmouseover = function(){
    //searchbox effect
  //searchbox effect
  searchbox.style.background = 'black';
  searchbox.style.color = 'white';
  searchbox.style.width = "20%";
  searchbox.style.left= "1%";
  searchbox.style.outlineStyle = "double";
  searchbox.placeholder = "Search the Web..."; //Css atributes in Css script

  
  //button effect
  searchbutton.style.width = "35px";
  searchbutton.style.height = "35px";
  searchbutton.style.top= '11%';
  searchbutton.style.left= "18%";
  searchbutton.src= "../textures/search-icon-s.png";

    };
    searchbutton.onmouseleave = function(){
    
    //searchbox effect
  searchbox.style.background = 'black';
  searchbox.style.color = 'white';
  searchbox.style.width = "20%";
  searchbox.style.left= "3%";
  searchbox.style.outlineStyle = "double";
  searchbox.placeholder = "Search the Web..."; //Css atributes in Css script

  
  //button effect
  searchbutton.style.width = "35px";
  searchbutton.style.height = "35px";
  searchbutton.style.top= '11%';
  searchbutton.style.left= "18%";
  searchbutton.src= "../textures/search-icon-s.png";

    // if searchbox is idle after a while fold back, being empty or not affects duration for fold
     setTimeout(function () {

    if (searchbox.value.length == 0)
    { 

    searchbox.style.background = "black";
    searchbox.style.width = "0%";
    searchbox.style.left= "2%";
    searchbox.style.outlineStyle = "double";
    searchbox.placeholder = "";


    searchbutton.style.left= "3%";
    searchbutton.style.top= '11.5%';
    searchbutton.src= "../textures/search-icon-s.png";





    }else if (searchbox.value.length > 0) {
      setTimeout(function () {

    searchbox.style.background = "black";
    searchbox.style.width = "0%";
    searchbox.style.left= "2%";
    searchbox.style.outlineStyle = "double";
    searchbox.placeholder = "";


    searchbutton.style.left= "3%";
    searchbutton.style.top= '11.5%';
    searchbutton.src= "../textures/search-icon-s.png";
    


      } , 10000)

    }

    // } return console.error();
  } , 10000);


    };
    searchbutton.onclick = function(){ 
    
  }

  hostDiv.appendChild(searchbutton);     


  //Search engine to use
  const google = 'https://www.google.com/search?q=';

  function submitted(event) { //function for submission
    event.preventDefault();
    const url = google + '+' + searchbox.value;
    const win = window.open(url, '_self'); //_blank
    win.focus();
  }
  document.body.addEventListener('submit', submitted);

    
    
  

    
     ///////////////////////////////////////////////////
    //** Activate babyulonjs GUI Searchbox and icon **//
    ///////////////////////////////////////////////////

      //  var  = new BABYLON.GUI.InputText();

      //   input.width = 0.2;
      //   //input.list = "text-editors";
      //   input.onFocusSelectAll = true; //complete selection of text on focus
      //   input.focusedBackground = "black"; //background color when focused on
      //   input.textHighlightColor  = "#D5E0FF"; //text color when focused on
      //   input.maxWidth = "300px";
      //   input.height = "40px";
      //   //input.paddingRight = "100px";
      //   input.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
      //   input.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
      //   input.top = "60px";
      //   input.left = "-50px";
      //   input.text = "Search the Web...";
      //   input.color = "white";
      //   input.textWrapping = true;
      //   var displayMessage = new BABYLON.GUI.TextBlock();
      //   displayMessage.top = -100;
      //   displayMessage.fontSize = 24;
      //   displayMessage.color = "white";
      //   input.onTextCopyObservable.add(function(){
      //       displayMessage.text = "copied..";
      //       setTimeout(() => { displayMessage.text = ""}, 1500);
      //   });

      //   input.onTextCutObservable.add(function(){
      //       displayMessage.text = "cut..";
      //       setTimeout(() => { displayMessage.text = ""}, 1500);
      //   });

      //   input.onTextPasteObservable.add(function(){
      //       displayMessage.text = "pasted..";
      //       setTimeout(() => { displayMessage.text = ""}, 1500);
      //   });
        
        
      //    //check if to activate or deactivate
      //   if(condition == true) {

      //   advancedTexture.addControl(displayMessage);
      //   advancedTexture.addControl(input); 

      //   } else if(condition == false) {

      //   advancedTexture.removeControl(displayMessage);
      //   advancedTexture.removeControl(input);  
          
      //   } else {

      //   }

    
      ///////search icon/////

    // var searchIcon = BABYLON.GUI.Button.CreateImageOnlyButton("right", "../textures/search-icon-s.png");
    // searchIcon.width = "35px";
    // searchIcon.height = "35px";
    // searchIcon.thickness = 0;
    // searchIcon.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
    // searchIcon.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
    // searchIcon.top = "62px";
    // searchIcon.left = "-52px";
    // searchIcon.onPointerClickObservable.add(() => { 
    //     if (acceptInput) {
    //         //Button event - what you want to happen

    //     }
    // });

    // //check if to activate or deactivate
    // if(condition == true) {

    //   advancedTexture.addControl(searchIcon); 

    // } else if(condition == false) {

    //   advancedTexture.removeControl(searchIcon); 
      
    // } else {

    // }


    }

// var bottomDiv = document.createElement("span"); 
// bottomDiv.style.position= "relative";
// bottomDiv.style.width= `${window.innerWidth}px`
// bottomDiv.style.height= `${window.innerHeight}px`
// document.body.appendChild(bottomDiv);



export function buttons(iframe) {
      
     //embed - iframe
      var embedButton;
      var top= 25;
      var left= 95;
      var size = 35;
      var topVE = `${top}%` //button top
      var topTextV = `${top}%` //button text top
      var sizeV = `${size}px` //button text top
      var leftV = `${left}%` //left
      var swEmbed = '../textures/embed_white.png'
      var sbEmbed = '../textures/embed_black.png'
      var sgEmbed = '../textures/embed_g.png'
      var titleEmbed = 'embed to your website'
      embedButton = new Button(embedButton, leftV, topVE, titleEmbed, swEmbed, sizeV, hostDiv, true)
      embedButton.create(sbEmbed)
      embedButton.action(swEmbed, sbEmbed);
      embedButton.click("embedButton", "iframe link copied", iframe, sgEmbed, topTextV);

       //Fun button
       var funButton;
       var topVF = `${top - 12}%` //top
       var topTextV = `${top + 7 - 6}%` //button text top
       var swFun = '../textures/fun-white.png'
       var sbFun = '../textures/fun-black.png'
       var sgShare = '../textures/fun-g.png'
       var titleFun = 'Fun and Games'
       funButton = new Button(funButton, leftV, topVF, titleFun, swFun, sizeV, hostDiv, true)
       funButton.create(sbFun)
       funButton.action(swFun, sbFun);
       funButton.click("funButton", "Funlinked", iframe, sgShare, topTextV);

      //Credits button
      var creditButton;
      var topVC = `${top - 18}%` //top
      var topTextV = `${top + 7 - 6}%` //button text top
      var swcredit = '../textures/credit-white.png'
      var sbcredit = '../textures/credit-black.png'
      // var sgShare = '../textures/share-g.png'
      var titlecredit = 'Credits'
      creditButton = new Button(creditButton, leftV, topVC, titlecredit, swcredit, sizeV, hostDiv, true)
      creditButton.create(sbcredit)
      creditButton.action(swcredit, sbcredit);
      
      

      //Share on social media
      var shareButton;
      var topVS = `${top - 6}%` //top
      var topTextV = `${top + 7 - 6}%` //button text top
      var swShare = '../textures/share-white.png'
      var sbShare = '../textures/share-black.png'
      // var sgShare = '../textures/share-g.png'
      var titleShare = 'Share on social media'
      shareButton = new Button(shareButton, leftV, topVS, titleShare, swShare, sizeV, hostDiv, true)
      shareButton.create(sbShare)
      shareButton.action(swShare, sbShare);
      



      var shareFace;
      var topV2 = "80vh" //top 
      var leftVS = `${left + 120}%` //left
      var topTextV = `${top + 7 - 6}%` //button text top
      var leftV = `${left + 5}%` //left
      var sizeV = `${size - 5}px` //button text top
      var swface = '../textures/facebook-white.png'
      var sbface = '../textures/facebook-black.png'
      var sgface = '../textures/facebook-g.png'
      var titleface = 'Share on Facebook'
      var shareFace = new Button(shareFace, leftVS, topV2, titleface, swface, sizeV, hostDiv, true)
      shareFace.create(sbface)
      shareFace.action(swface, sbface);
   

      var shareTwit;
      var leftVS = `${left + 140}%` //left
      var swTwit = '../textures/facebook-white.png'
      var sbTwit = '../textures/facebook-black.png'
      var sgTwit = '../textures/facebook-g.png'
      var titleTwit = 'Share on Twitter'
      var shareTwit = new Button(shareTwit, leftVS, topV2, titleTwit, swTwit, sizeV, hostDiv, true)
      shareTwit.create(sbTwit)
      shareTwit.action(swTwit, sbTwit);

     
        //Reload Image
    var refreshButton = document.createElement("img"); 
    refreshButton.setAttribute('type', 'image');
    refreshButton.setAttribute('id',   'myBtn');
    // searchbutton.style.position= 'absolute';
    refreshButton.style.position= 'absolute';
   // searchbutton.style.background = "darkslategrey";
    refreshButton.style.left= "50%";
    refreshButton.style.top= '90%'
    //searchbutton.style.scale = "1px";
    refreshButton.style.width = "45px";
    refreshButton.style.height = "45px"; 
    refreshButton.src= "../textures/refresh.png";
    refreshButton.title = "Refresh scene"; //Tooltip

    refreshButton.onmouseover = function (){
    refreshButton.src= "../textures/refresh02.png";
    refreshButton.style.width = "50px";
    refreshButton.style.height = "50px"; 
    }
    refreshButton.onmouseleave = function (){
      refreshButton.src= "../textures/refresh.png";
      refreshButton.style.width = "45px";
      refreshButton.style.height = "45px"; 
    }
    refreshButton.onclick = function (){
      refreshButton.src= "../textures/refresh.png";
      reload();
    }
  function reload() {
      reload = location.reload();
  }

  document.body.appendChild(refreshButton);  
    
//getting screen/mouse idle

  let inactivityTime = function () {
  let time;
  window.onload = resetTimer;
  document.onmousemove = resetTimer;
  // bottomDiv.onmouseover = resetTimer;
  document.onkeydown = resetTimer;

  function logout() {
    //what to do when idel
    console.log("You are now inactive")

    // form.style.display = 'none';
    // hostDiv.style.display = 'none';
    // hostDiv2.style.display = 'none';
    
  }
  function resetTimer() {
    clearTimeout(time);
    time = setTimeout(logout, 10000)

     //Do this when active again
    //  form.style.display = 'flex';
    //  hostDiv.style.display = 'flex';
    //  hostDiv2.style.display = 'flex';
  }

  
};
inactivityTime();



      

}



export function createDate (text) {

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
var text;
text.innerHTML = today;
console.log(dateTime)

}



// //getting idle

// let inactivityTime = function () {
//   let time;
//   window.onload = resetTimer;
//   document.onmousemove = resetTimer;
//   hostDiv.onmouseover = resetTimer;
//   document.onkeydown = resetTimer;

//   function logout() {
//     //what to do when idel
//     console.log("You are now inactive")

//     form.style.display = 'none';
//     hostDiv.style.display = 'none';
//     hostDiv2.style.display = 'none';
    
//   }
//   function resetTimer() {
//     clearTimeout(time);
//     time = setTimeout(logout, 10000)

//      //Do this when active again
//      form.style.display = 'flex';
//      hostDiv.style.display = 'flex';
//      hostDiv2.style.display = 'flex';
//   }

//   $(document).ready(function(){
//     $(document).mousemove(function(event){
//       //Do this when active again
//       if(form){

//     form.style.display = 'flex';
//      hostDiv.style.display = 'flex';
//      hostDiv2.style.display = 'flex';

//      console.log("Strange")

//       }
     
      
//     });
//   });
// };
// inactivityTime();





export function pinScene() {

    //To check if user already saved a favourite page, so as to retain pin icon
    var fave = localStorage.getItem('pinScene'); //favourite/pinned scene

    var pinScene;
    var left2= 95;
    var top2 = 25;
    var size = 35;
    var iframe;
    var topV = `${top2}%` //button top
    var topTextV = `${top2 - 6}%` //button text top
    var sizeV = `${size}px` //button text top
    var left2V = `${left2 - 92}%` //left
    var swEmbed = '../textures/pin-white.png'
    var swEmbed2 = '../textures/pin-white2.png'
    var sbEmbed = '../textures/pin-black.png'
    var sgEmbed = '../textures/pin-black.png'
    var titleEmbed = `Pin Current Scene 😻 `
    pinScene = new Button(pinScene, left2V, topV, titleEmbed, swEmbed, sizeV, hostDiv2, true)
    pinScene.create(swEmbed)
    pinScene.action(swEmbed2, swEmbed);
    pinScene.PinClick("pinScene", sbEmbed, fave);
    pinScene.onclick = function (){

      selectScene();

      //pic change
   
        
       
        // embedText.style.display= 'flex';
       
        // window.alert(alert)
       
        
      
            // if tab has been open for a while
        setTimeout(function () {
        // embedText.style.display= 'none';
          
          } , 1500);
      
         

    }

    //Hide UI
    var hideUI;
    var topVH = `${top2 - 6}%` //top
    var topTextV = `${top - 6}%` //button text top
    var sizeV = `${size}px` //button text top
    var left2V = `${left2 - 92}%` //left
    var swEmbed = '../textures/hideUI-g.png'
    var sbEmbed = '../textures/hideUI-black.png'
    var sgEmbed = '../textures/hideUI-g.png'
    var titleEmbed = 'Hide all Screen UI'
    hideUI = new Button(hideUI, left2V, topVH, titleEmbed, swEmbed, sizeV, hostDiv2, true)
    hideUI.create(sbEmbed)
    hideUI.action(swEmbed, sbEmbed);
    hideUI.click("hideUI", "iframe link copied", iframe, sgEmbed, topTextV);

    
    //Logo

        //Reload Image
        var maxaLogo = document.createElement("img"); 
        maxaLogo.setAttribute('type', 'image');
        maxaLogo.setAttribute('id',   'maxaLogo');
        // searchbutton.style.position= 'absolute';
        maxaLogo.style.position= 'absolute';
       // searchbutton.style.background = "darkslategrey";
        maxaLogo.style.left= "2%";
        maxaLogo.style.top= '5%'
        //searchbutton.style.scale = "1px";
        maxaLogo.style.width = "190px";
        maxaLogo.style.height = "80.8px"; 
        maxaLogo.src= "../textures/Maxa-logo-white.png";
      document.body.appendChild(maxaLogo);  

  //function for pin/unpinning scenes
  // function selectScene() {

  //   //Condition to switch icons
  // if (fave == null){
    
  //   var currentScene = localStorage.getItem('newScene'); //get current scene
  //   var fav = localStorage.setItem('pinScene', currentScene) //save it to storage
  //  // var farev = localStorage.removeItem('newScene') //remove saved scene
  //   console.log("Saved Scene: " + currentScene)
  //   reload();


  // }else {

  //   var fav = localStorage.removeItem('pinScene') //remove saved scene
  //   console.log("Unpinned from scene")

  // }

 

  // }

  // //reload function
  // function reload() {
  //   reload = location.reload();
  //   }

    // var label = document.createElement('LABEL')
    // label.style.position= 'absolute';
    // label.style.left= '95%';
    // label.style.top= '0%';
    // document.body.appendChild(label);

      // //dealing with Pin icon
      // var pinIcon = document.createElement("img");
      // pinIcon.setAttribute('type', 'image');
      // pinIcon.setAttribute('id',   'myPin');
      // pinIcon.style.left= "100%";
      // pinIcon.style.top= '10.5%'
      // pinIcon.style.position= 'absolute';
      // if(fave == null){ //checking if already saved
      
      // //unpin icon
      // pinIcon.style.width = "30px";
      // pinIcon.style.height = "30px";
      // pinIcon.src= "../textures/tack.png";
      // pinIcon.title = "Pin this Scene"; //Tooltip
      // var pin = true;
      
  
      // }else {
  
      //   //pinned icon
      // pinIcon.src= "../textures/pin.png";
      // pinIcon.style.width = "30px";
      // pinIcon.style.height = "30px";
      // pinIcon.title = "Unpin this Scene"; //Tooltip
  
      // var pin = false;
  
  
  
      // }
      // pinIcon.onclick = function (){
  
      //   selectScene();
  
  
      // }
      // pinIcon.onmouseover = function () {
  
      // if(fave == null){
  
      // pinIcon.style.width = "35px";
      // pinIcon.style.height = "35px";
  
  
  
      // }
  
      // }
      // pinIcon.onmouseleave = function (){
      
      // if(fave == null){
  
      // pinIcon.style.width = "30px";
      // pinIcon.style.height = "30px";
  
  
  
      // }
  
      // }
      // label.appendChild(pinIcon); 


}


// //for two stones
// export function sceneEffect(scene){
  
// switch (scene) {
//     case 12:
    
//      // HTMl Div Execution - more efficient for now than babylonjs GUI - check below for code for BjsGUI
//     var label = document.createElement('LABEL')
//     label.style.position= 'absolute';
//     label.style.left= '1%';
//     label.style.top= '94%';
//     label.style.width = "100%";
//     //label.style.height = "100px";
//     document.body.appendChild(label);

//    //checkbox // to reverse material animation
//     var checkbox2 = document.createElement("input"); 
//     checkbox2.setAttribute('type', 'checkbox');
//     checkbox2.setAttribute('id',   'reverseStone');
//     checkbox2.style.position= 'absolute';
//     checkbox2.style.left= '0%';
//     checkbox2.style.top= '95%';
//     checkbox2.style.scale = "13px";
//     checkbox2.style.width = "15px";
//     checkbox2.style.height = "15px"; 
//     checkbox2.style.fontSize= '150px';
//     checkbox2.style.color= "white";
//     checkbox2.onclick = function(){ //checkbox events

//       if(checkbox2.checked == true) {
        
//         var reverse = localStorage.setItem('reverser', JSON.stringify(checkbox2.style.top));

//         //reverse == true;

//       }else {
//         var reverse = localStorage.removeItem('reverser');

//         //reverse == false;
    

//       }
     

//     };
//     label.appendChild(checkbox2); 

//     var text = document.createElement("div"); 
//     var newContent = document.createTextNode("Reverse Animation")
//     text.appendChild(newContent);
//     text.style.position= 'absolute';
//     text.style.left= '2%';
//     text.style.top= '90%';
//    // newDiv.style.background= 'white';
//     text.style.fontSize= '12px';
//     text.style.color= "white";
//     label.appendChild(text);  
//     break;
//   case 10:

//     var checkbox2 = document.createElement("input"); 
//     checkbox2.setAttribute('type', 'checkbox');
//     checkbox2.setAttribute('id',   'reverseStone');
//     checkbox2.style.position= 'absolute';
//     checkbox2.style.left= '2%';
//     checkbox2.style.top= '90%';
//     checkbox2.style.scale = "13px";
//     checkbox2.style.width = "15px";
//     checkbox2.style.height = "15px"; 
//     checkbox2.style.fontSize= '150px';
//     checkbox2.style.color= "white";
//     checkbox2.onclick = function(){ //checkbox events

//       if(checkbox2.checked == true) {
        
//         //var reverse = localStorage.setItem('reverser', JSON.stringify(checkbox2.style.top));

//         //reverse == true;

//       }else {
//         //var reverse = localStorage.removeItem('reverser');

//         //reverse == false;
    

//       }
//     };
//     document.body.appendChild(checkbox2); 

//   break;
//   case 15:

//   //checkbox //to toggle shape
//     var checkbox2 = document.createElement("input"); 
//     checkbox2.setAttribute('type', 'checkbox');
//     checkbox2.setAttribute('id',   'changeShape');
//     checkbox2.style.position= 'absolute';
//     checkbox2.style.left= '2%';
//     checkbox2.style.top= '90%';
//     checkbox2.style.scale = "13px";
//     checkbox2.style.width = "15px";
//     checkbox2.style.height = "15px"; 
//     checkbox2.style.fontSize= '150px';
//     checkbox2.style.color= "white";
//     checkbox2.onclick = function(){ //checkbox events

//       if(checkbox2.checked == true) {
        
//         localStorage.removeItem('shaper');
//         var changeShape = localStorage.setItem('shaper', JSON.stringify(checkbox2.style.top)); 

//         //reverse == true;

//       }else {

//         var changeShape = localStorage.removeItem('shaper');

//         //reverse == false;
    

//       }
     

//     };
//     document.body.appendChild(checkbox2); 


//     break;
//   case 14:
    
    
//     break;
//   default:
//     break;
// }

// }


// button object

// Media Queries

// function myFunction(x) {
//   if (x.matches) { // If media query matches
//     document.body.style.backgroundColor = "yellow";
//   } else {
//     document.body.style.backgroundColor = "pink";
//   }
// }

// var x = window.matchMedia("(max-width: 700px)")
// myFunction(x) // Call listener function at run time
// x.addListener(myFunction) // Attach listener function on state changes




class Button {
  constructor(Name, Left, Top, Title, src, scale, div, active) {
  this.name = Name;
  this.x = Left;
  this.y = Top;
  this.src = src;
  this.tl = Title;
  this.div = div;
  this.scale = scale;
  this.active = active;
  }
  Deactivate(){   
      this.active = false;
     
   }
  create(srcDafault){

    //check if Button should be active
    if(this.active === true){

    //Embed button
    this.name = document.createElement("img"); 
    this.name.setAttribute('type', 'image');
    this.name.className = "rotate-center";
    this.name.setAttribute('id',   'myBtn');
    // searchbutton.style.position= 'absolute';
    this.name.style.position= 'fixed';
    this.name.style.display = 'inline-block'
    this.name.style.marginLeft = 'auto'
    this.name.style.marginRight = 'auto'
    this.name.style.marginTop = '5px'
    
   // searchbutton.style.background = "darkslategrey";
    this.name.style.right= this.x;
    this.name.style.bottom= this.y;
    //searchbutton.style.scale = "1px";
    this.name.style.width = this.scale;
    this.name.style.height = this.scale; 
    this.name.src= srcDafault;
    this.name.title = this.tl; //Tooltip
    this.div.appendChild(this.name); 
    // document.body.appendChild(this.name); 



    }else{
      

    }

  
  }
  action(srcOnOver, srcOnLeave){


    if(this.active === true){

      
     this.name.onmouseleave = function (){
      this.src = srcOnLeave;
      this.style.width = "35px";
      this.style.height = "35px"; 
    }
    this.name.onmouseover = function (){
      this.src = srcOnOver;
      this.style.width = "40px";
      this.style.height = "40px"; 
    } 

    }else{
      

    }

  }
  click(name, alert, Link, sg, textTop){
   
    // var embedButton;
    // var funButton;

    if(this.active === true){

      switch (name) {
      
        case "embedButton":
    
        
        this.name.onclick = function (){
        this.src= sg;
        embedText.style.display= 'flex';
        setClipboard(Link)
        window.alert(alert)
       
        
      
            // if tab has been open for a while
        setTimeout(function () {
        embedText.style.display= 'none';
          
          } , 1500);
      
           }
          
      
          //copy text to clipboard
          function setClipboard(text) {
            var type = "text/plain";
            var blob = new Blob([text], { type });
            var data = [new ClipboardItem({ [type]: blob })];
        
            navigator.clipboard.write(data).then(
                function () {
                /* success */
                console.log("copied to clip success");
                },
                function () {
                  console.log("copied to clip failed");
      
                }
            );
          }
      
          //display text
            var embedText = document.createElement("h6"); 
            var newContent = document.createTextNode("Link Copied"); 
            embedText.appendChild(newContent);
            embedText.style.position= 'absolute';
            // embedText.style.width = "100%"
            embedText.style.display= 'none';
            embedText.style.color = "white"
            embedText.style.left= "0%" ;
            embedText.style.top= textTop;  
            this.div.appendChild(embedText);
      
    
            break;
        case "shareButton":

          break;
          case "shareButton":


          break;
          default:
            break;
      }
  
  

    }else{
      

    }


  }
  PinClick(name, sg, fave){
   //click property for pin scene

    this.name.onclick = function (){
      selectScene();

      switch (name) {
      
        case "embedButton":
       break;
          default:
            break;
      }


     }
    
   //function that switches between select/unselect
   function selectScene() {

    //Condition to switch icons
  if (fave == null){
    
    
    var currentScene = localStorage.getItem('newScene'); //get current scene
    var fav = localStorage.setItem('pinScene', currentScene) //save it to storage
   // var farev = localStorage.removeItem('newScene') //remove saved scene
    console.log("Saved Scene: " + currentScene)
    reload();
    const alert = "Scene Pinned successfully😻"
    window.alert(alert)


  }else {

    var fav = localStorage.removeItem('pinScene') //remove saved scene
    console.log("Unpinned from scene")
    const alert = "Scene Unpinned successfully: ENJOY"
    window.alert(alert)

  }

 

    }

  //reload function
  function reload() {
    reload = location.reload();
    }
  
    

  }
 

  

 

}







/////////////////UNUSED//////////////////////////


//HTML DOM //Also babylonjs GUI // checkbox and text//

// export function createCheckbox (text , checkbox) {

//   // HTMl Div Execution - more efficient for now than babylonjs GUI - check below for code for BjsGUI
//     var label = document.createElement('LABEL')
//     label.style.position= 'absolute';
//     label.style.left= '1%';
//     label.style.top= '90%';
//     label.style.width = "100px";
//     //label.style.height = "100px";
//     document.body.appendChild(label);



//     text = document.createElement("div"); 
//     var newContent = document.createTextNode("Hide Screen UI")
//     text.appendChild(newContent);
//     text.style.position= 'absolute';
//     text.style.left= '25%';
//     text.style.top= '95.5%';
//    // newDiv.style.background= 'white';
//     text.style.fontSize= '12px';
//     text.style.color= "white";
//     label.appendChild(text);  


//     //checkbox
//     checkbox = document.createElement("input"); 
//     checkbox.setAttribute('type', 'checkbox');
//     checkbox.setAttribute('id',   'hideUI');
//     //checkbox.style.position= 'absolute';
//     //checkbox.style.left= '2%';
//     //checkbox.style.top= '95.5%';
//     //checkbox.style.scale = "13px";
//     //checkbox.style.width = "15px";
//     //checkbox.style.height = "15px"; 
//     //checkbox.style.fontSize= '150px';
//     //checkbox.style.color= "black";
//     checkbox.onclick = function(){ //checkbox events
    
//       if(checkbox.checked == true) {

//       form.style.display = "none";
//       text.removeChild(newContent)
//       newContent = document.createTextNode("Dispay Screen UI"); 
//       text.appendChild(newContent);


    

//       }else {

//       form.style.display = "flex";
//       text.removeChild(newContent)
//       newContent = document.createTextNode("Hide Screen UI"); 
//       text.appendChild(newContent);

//       }
     

//     };
//     label.appendChild(checkbox);  





//      ///////////////////////////////////////////////////
//     //** Activate babyulonjs GUI Checkbox and text **//
//     ///////////////////////////////////////////////////

//     // //Create a panel to host the checkbox
//     // var checkPanel = new BABYLON.GUI.StackPanel();
//     // checkPanel.width = "200px";
//     // checkPanel.isVertical = false;
//     // checkPanel.left = "20px";
//     // checkPanel.top = "350px";
//     // checkPanel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
//     // checkPanel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
//     // advancedTexture.addControl(checkPanel);

//     // //create checkbox
//     // var checkbox = new BABYLON.GUI.Checkbox();
//     // checkbox.width = "20px";
//     // checkbox.height = "20px";
//     // checkbox.isChecked = true;
//     // checkbox.color = "white";
//     // checkbox.onIsCheckedChangedObservable.add(function(value) {
//     //     // if (skull) {
//     //     //     //skull.useVertexColors = value;
//     //     // }
//     // });
//     // checkPanel.addControl(checkbox);   

//     //Textblock
//     // var header = new BABYLON.GUI.TextBlock();
//     // header.text = "Show / Hide Screen UI";
//     // header.width = "180px";
//     // header.marginLeft = "10px";
//     // header.resizeToFit = true;
//     // header.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
//     // header.color = "white";
//     // checkPanel.addControl(header); 

// }

// //function to generate a random integer between 0 and 1 (both excluded ofcourse)
// //math.floor gets rid of decimals - approx.

// function randomInt(limit) {

//  return Math.floor(Math.random() * Math.floor(limit))
// }

// //Now item to select random items from the array

// export function randomScene (sceneArray) {

//  var index = randomInt(sceneArray.length)

//  //get the chosen scene
//  console.log("The Loaded Scene is: " + index)
// // return sceneArray[index];
//  return index;

// }



//load star by name


//////////////////////////////////////
