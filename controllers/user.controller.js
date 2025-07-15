import { User } from "../models/user.modals.js";


async function handlegetallusers(req,res) {

  const alldbusers = await User.find({});
  return res.json(alldbusers);
}

async function getUserById(req,res) {

  const user = await User.findById(req.params.id);

  return res.json(user);
}

async function changeUserById(req,res) {

  await User.findByIdAndUpdate(req.params.id,{last_name: 'hecker'});

    return res.json({status : 'successfully changed'});
}

async function deleteUserById(req,res) {

   await User.findByIdAndDelete(req.params.id);
    
    return res.json({status : 'successfully deleted'});

  
}

async function handlecreatenewuser(req,res) {

  const body = req.body;

  if(!body || !body.email || !body.first_name || !body.last_name){
    return res.status(400).send('all fields are req');
  }

  const result = await User.create({

    first_name:body.first_name,
    last_name : body.last_name,
    email : body.email,
    gender : body.gender,
    job_title : body.job_title,
  })

  console.log(result);
  

  return res.status(201).json({msg : "success"})

}



export  {
  handlegetallusers,
  getUserById,
  changeUserById,
  deleteUserById,
  handlecreatenewuser,
}


