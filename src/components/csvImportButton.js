import React, { useRef } from "react";
import Papa from "papaparse";

const CsvImportButton = ({ handleDataView, handleOriginalData }) => {
	const fileInput = useRef(null);

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		const reader = new FileReader();
		reader.onload = (event) => {
			const text = event.target.result;
			const result = Papa.parse(text, { header: true });
			handleDataView(result.data);
			handleOriginalData(result.data);
		};
		reader.readAsText(file);
	};

	return (
		<div>
			<input
				ref={fileInput}
				type="file"
				accept=".csv"
				onChange={handleFileChange}
				style={{ display: "none" }}
			/>
			<button
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
				onClick={() => fileInput.current.click()}
			>
				Datei auswählen
			</button>
		</div>
	);
};

export default CsvImportButton;
