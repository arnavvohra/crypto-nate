var MY_ADDRESS = document.getElementById('address').innerHTML
// alert(MY_ADDRESS) //update this to influencer's address
var tipButton = document.querySelector('.tip-button')
tipButton.addEventListener('click', function() {
  if (typeof web3 === 'undefined') {
    return renderMessage('<div>You need to install <a href=“https://metmask.io“>MetaMask </a> to use this feature.  <a href=“https://metmask.io“>https://metamask.io</a></div>')
  }

  var user_address = web3.eth.accounts[0];
  var amount = document.getElementById('amount').value;
  web3.eth.sendTransaction({
    to: MY_ADDRESS,
    from: user_address,
    value: web3.toWei(amount, 'ether'),
  }, function (err, transactionHash) {
    if (err) return renderMessage('There was a problem!: ' + err.message)
    // If you get a transactionHash, you can assume it was sent,
    // or if you want to guarantee it was received, you can poll
    // for that transaction to be mined first.
    renderMessage('Thanks for the generosity!! We will forward your message')
      let $loader = $('#loader');
      $loader.addClass('is-active');
    var msg = document.getElementById('comment').value;
    var from = document.getElementById('donor').value;
    
    // Creating Post Request for sending message
      $.post('/msg', {
          addr : MY_ADDRESS,
          fr : from,
          messa : msg
      }, function (response, status) {
          $loader.removeClass('is-active');
          if(status === 'success'){
            alert("Message Sent");
            window.location.href = '/';
          }else{
            alert("An Error Occured Could Not Send the Message");
          }
      });

    // url =('/msg?address='+MY_ADDRESS+'&from='+from+'&msg='+msg);
    // window.location.href = url;
  });
});
function renderMessage (message) {
  var messageEl = document.querySelector('.message')
  messageEl.innerHTML = message
}