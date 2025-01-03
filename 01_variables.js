const accountId = 12312
let accountEmail = "adityashekhar862@gmail.com"
var accountPassword = "aditya123#"
accountCity = "kerala"


// prefer not to use (var) because of issue in block and functional scope 

accountEmail = "ayushjhat@gmail.com"
accountPassword = "121212121"
accountCity = "patna"

console.log(accountId)
console.table([accountId,  accountEmail, accountPassword, accountCity ])