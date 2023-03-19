const users = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
  ];

function findUserByUsername(usersArray, username) {
    return usersArray.find(function(user){
      return user.username === username;
    })
  }

  