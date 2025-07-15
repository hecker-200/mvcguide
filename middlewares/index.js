import fs from "fs"


function logreqres(filename){

  return (req,res,next) => {

    fs.appendFile(filename,

    `\n${Date.now()} : ${req.method} : ${req.path}`,
    (err) => {
      
      if(err) {
        return res.status(500).send('internal server issue');
      }
      
      next();
    }
    
  )
  }
}

export default logreqres;