router.get("/lastName/:lastName", (req, res) => {
  // Extract the lastName parameter from the request URL
  const lastName = req.params.lastName;
  // Filter the users array to find users whose lastName matches the extracted lastName parameter
  let filtered_lastname = users.filter((user) => user.lastName === lastName);
  // Send the filtered_lastname array as the response to the client
  res.send(filtered_lastname);
});
