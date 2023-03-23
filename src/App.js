import React, { useState, useEffect } from "react";
import CsvImportButton from "./components/csvImportButton";
import Filter from "./components/filter";
import axios from "axios";

const App = () => {
	const [dataView, setDataView] = useState(null);
	const [originalData, setOriginalData] = useState(null);
	// const [postData, setPostData] = useState(null);
	// const [isLoading, setIsLoading] = useState(true);
	// const postId = "CqCkYT0tOJv";
	// const accessToken = process.env.META_ACCESS_TOKEN;
	// const postUrl = `https://graph.facebook.com/v16.0/${postId}?fields=id,caption,media_type,media_url,permalink,thumbnail_url,thumbnail_width,thumbnail_height,username,timestamp&access_token=${accessToken}`;

	// useEffect(() => {
	// 	axios
	// 		.get(postUrl)
	// 		.then((response) => {
	// 			setPostData(response.data);
	// 			setIsLoading(false);
	// 		})
	// 		.catch((error) => {
	// 			console.log(error);
	// 			setIsLoading(false);
	// 		});
	// }, []);

	// if (isLoading) {
	// 	return <div>Loading...</div>;
	// }

	return (
		<div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
			<div className="w-full max-w-4xl space-y-8 bg-slate-800 drop-shadow-lg rounded-lg p-6 text-white">
				<div className="flex justify-center">
					{dataView == null && (
						<CsvImportButton
							handleDataView={setDataView}
							handleOriginalData={setOriginalData}
						/>
					)}
				</div>
				<Filter
					dataToEdit={dataView}
					handleDataView={setDataView}
					originalSourceData={originalData}
				/>
				<div>
					{dataView && (
						<table className="">
							<thead>
								<tr>
									{Object.keys(dataView[0]).map((header) => (
										<th key={header} className="px-4 py-2">
											{header}
										</th>
									))}
								</tr>
							</thead>
							<tbody>
								{dataView.map((row, index) => (
									<tr key={index} className="bg-gray">
										{Object.values(row).map(
											(value, index) => (
												<td
													key={index}
													className="px-4 py-2 text-center"
												>
													{value}
												</td>
											)
										)}
									</tr>
								))}
							</tbody>
						</table>
					)}
				</div>
			</div>
		</div>
	);
};

export default App;
