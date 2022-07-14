console.log("Hello, world")

balance = 30000; 
withDraw = 25000; 
console.log('Your amount is: ', balance, 'Baht');
if (withDraw <= balance) {
  console.log('Withdraw amount: ', withDraw, 'Baht');
  balance -= withDraw
  console.log('Balance amount: ', balance, 'Baht');
} else if (withDraw >= balance) {
  console.log("You don't have money.");
}


