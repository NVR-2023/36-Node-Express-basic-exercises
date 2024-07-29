/* # Define an array containing the names of the months
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
# Define a route to fetch the month name based on a given number
app.get("/fetchMonth/:num", (req, res) => {
    # Parse the number from the request parameters
    let num = parseInt(req.params.num);
    # Check if the number is a valid month number
    if(num < 1 || num > 12) {
        # Send an error message if the number is not valid
        res.send("Not a valid month number");
    } else {
        # Send the corresponding month name if the number is valid
        res.send(months[num - 1]);
    }
}); */
