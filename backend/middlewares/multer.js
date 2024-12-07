import multer from  "multer";

const storage=multer.memoryStorage();

const signalUpload=multer({storage}).single("file")

export default signalUpload;
