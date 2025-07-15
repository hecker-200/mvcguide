import express from "express"
import {handlegetallusers,getUserById, changeUserById, deleteUserById, handlecreatenewuser,} from "../controllers/user.controller.js";

const router = express.Router();

router.route('/')
.get(handlegetallusers)
.post(handlecreatenewuser)

router
.route('/:id')
.get(getUserById)
.patch(changeUserById)
.delete (deleteUserById)








export default router