$(function(){ 

chrome.storage.sync.get("limit", function(budget){
   $('#limit').text(budget.limit);
})

 $('#saveLimit').click(function(){
  
  var limitValue = $('#limit').val();

 if(limitValue) {
  chrome.storage.sync.set({'limit': limitValue}, function() {
   console.log("Limit was saves as: " + limitValue);
     close();
  })
 }
 })

 $('#reset').click(function() {
 var clearTotal = 0;
 chrome.storage.sync.set({'total': clearTotal}, function() {
 
  chrome.notifications.create('clearNotif', {
    type: 'basic',
    iconUrl: './icons/icon128.png',
    title: 'Total has been cleared and Reset',
    message: 'You just reset your total to zero, be watchful my guy',
    //priority: 2
   })

 })
   $('#total').text(clearTotal);
})

})