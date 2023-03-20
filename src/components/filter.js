import React, { useState } from "react";

const Filter = ({ dataToEdit, handleDataView, originalSourceData }) => {
	//Text/ Emoji in Comment -> Filter comment by text/ emoji
	const handleTextEmojiFilter = (event) => {
		let filterQuery = event.target.value;
		const commentData = originalSourceData.filter(function (i) {
			return i.Comment.toLowerCase().includes(filterQuery.toLowerCase());
		});

		filterQuery
			? handleDataView(commentData)
			: handleDataView(originalSourceData);
	};

	//Must Mention -> Filter comment by mention

	//Must Hashtag -> Filter comment by Hashtag

	//multiplicator by Mentions -> add same user to array/ list

	//Blacklist -> delete by username

	//allow Duplicate user -> check username by duplication
	return (
		<div className="px-4 py-5 sm:p-6 w-full bg-zinc-800 rounded-lg p-6 text-white drop-shadow-lg">
			<div className="grid grid-cols-6 gap-6">
				<div className="col-span-6">
					<label
						for="text-emoji-filter"
						className="block text-sm font-medium leading-6 "
					>
						Text/ Emoji Filter
					</label>
					<input
						type="text"
						name="text-emoji-filter"
						id="text-emoji-filter"
						className="mt-2 bg-neutral-900 block w-full rounded-md border-0 p-1.5 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
						onChange={handleTextEmojiFilter}
					/>
				</div>
				<div className="col-span-6 sm:col-span-3">
					<label
						for="mention-filter"
						className="block text-sm font-medium leading-6 "
					>
						Mention Filter
					</label>
					<input
						type="text"
						name="mention-filter"
						id="mention-filter"
						className="mt-2 bg-neutral-900 block w-full rounded-md border-0 p-1.5 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
					/>
				</div>

				<div className="col-span-6 sm:col-span-3">
					<label
						for="hashtag-filter"
						className="block text-sm font-medium leading-6 "
					>
						Hashtag Filter
					</label>
					<input
						type="text"
						name="hashtag-filter"
						id="hashtag-filter"
						className="mt-2 bg-neutral-900 block w-full rounded-md border-0 p-1.5 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
					/>
				</div>

				<div className="col-span-6 sm:col-span-6 lg:col-span-2">
					<label
						for="multiplicator-by-mentions"
						className="block text-sm font-medium leading-6 "
					>
						Mention Multiplicator
					</label>
					<input
						type="text"
						name="multiplicator-by-mentions"
						id="multiplicator-by-mentions"
						className="mt-2 bg-neutral-900 block w-full rounded-md border-0 p-1.5 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
					/>
				</div>

				<div className="col-span-6 sm:col-span-3 lg:col-span-2">
					<label
						for="blacklist"
						className="block text-sm font-medium leading-6 "
					>
						Blacklist User
					</label>
					<input
						type="text"
						name="blacklist"
						id="blacklist"
						className="mt-2 bg-neutral-900 block w-full rounded-md border-0 p-1.5 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
					/>
				</div>

				<div className="col-span-6 sm:col-span-3 lg:col-span-2">
					<label
						for="duplicate-user"
						className="block text-sm font-medium leading-6 "
					>
						Allow Duplicate user
					</label>
					<input
						type="text"
						name="duplicate-user"
						id="duplicate-user"
						className="mt-2 bg-neutral-900 block w-full rounded-md border-0 p-1.5 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
					/>
				</div>
			</div>
		</div>
	);
};

export default Filter;
