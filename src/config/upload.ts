import multer from 'multer'
import path from 'path'

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export default {
  storage: multer.diskStorage({
    destination: path.join(__dirname, '..', '..', 'uploads'),
    filename: (request, file, cb) => {
      const fileName = `${Date.now()}-${(file.originalname).substring(0,9)}-${getRandomInt(1,99999999)}`

      cb(null, fileName)
    }
  })
}