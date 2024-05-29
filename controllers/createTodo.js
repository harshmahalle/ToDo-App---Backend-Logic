//import model 
const Todo = require("../models/Todo");

//define route handler

exports.createTodo = async(req,res) => {
    try {
        //exctract title and description from request body
        const {title,description} = req.body;
        //create a new Todo obj and insert into db
        const response = await Todo.create({title,description});
        //send a json response with a success flag
        res.status(200).json (
            {
                success:true,
                data:response,
                message : 'Entry Created Successfully'
            }
        );
         }
    catch(err) {

            console.error(err);
            console.log(err);

            res.status(500).json({
                success:false,
                data:"internal server error",
                message:err.message,
                })
           
        }
    }
