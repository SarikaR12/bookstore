const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dnvnlyesu",
  api_key: "863446842354986",
  api_secret: "Lg87iLe7e2IikJaflyy97GvDylk",
});

let uploadImage = (path, originalname) => {
  return cloudinary.uploader.upload(
    path,
    { public_id: `${originalname}` },
    function (error, result) {
      return result;
    }
  );
};

module.exports = uploadImage;