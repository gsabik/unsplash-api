"use client";

const DownloadButton = ({ download }) => {
	const handleDownload = () => {
		// https://help.unsplash.com/es/articles/2511258-directrices-activacion-de-una-descarga
	}

	return (
		<button className="border px-4 round rounded-sm text-gray-500" onClick={handleDownload}>Download</button>
	);
}

export default DownloadButton;