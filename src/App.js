import React, { useState } from "react";
import CsvImportButton from "./components/csvImportButton";
import Filter from "./components/filter";

const App = () => {
	const [dataView, setDataView] = useState(null);
	const [originalData, setOriginalData] = useState(null);

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
