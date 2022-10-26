const {cloudinary} = require("./cloudinary");

const uploadImage = async (image) => {
    const uploadedImage = await cloudinary.uploader.upload(image, {upload_preset: 'ideaUsherPreset'});
    return [uploadedImage.secure_url, uploadedImage.public_id];
}

const deleteImage = async (image_id) => {
    await cloudinary.uploader.destroy(image_id);
}

module.exports = {uploadImage, deleteImage};
