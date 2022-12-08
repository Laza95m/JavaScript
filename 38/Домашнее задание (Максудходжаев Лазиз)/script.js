async function getUsersName() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  users = await response.json();

  let res = [];
  await users.forEach((user) => {
    res.push(user.name);
    return res;
  });

  return res;
}

console.log(getUsersName());
