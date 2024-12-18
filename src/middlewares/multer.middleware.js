import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
      
      cb(null, file.originalname)
    }
  })
  
export const upload = multer({ 
    storage, 
})

// import multer from "multer";

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     console.log("multer destination");
//     cb(null, "./public/temp");
//   },
//   filename: function (req, file, cb) {
//     // const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9); // for adding unique name in the end of filename
//     // cb(null, file.fieldname + "-" + uniqueSuffix);
//     console.log("multer filename");
//     cb(null, file.originalname);
//   },
// });

// export const upload = multer({ storage });
