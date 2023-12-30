import { v2 as cloudinary } from "cloudinary";

export default new (class uploadToCloudinary {
	upload() {
		cloudinary.config({
			cloud_name: 'dy61gkdwc',
			api_key: '911478842633956',
			api_secret: 'gBAWD2G6I5i6MEOHl2OEJYzdQew',
		});
	}

	async destination(image: any) {
		try {
			const cloudinaryResponse = await cloudinary.uploader.upload(
				"src/uploads/" + image,
				{
					folder: "circle-app",
				}
			);
			return cloudinaryResponse.secure_url;
		} catch (err) {
			throw err;
		}
	}
})();

