import React, { useState } from "react";

const Filter = ({ dataToEdit, handleDataView, originalSourceData }) => {
	const [textEmojifilterQuery, setTextEmojiFilterQuery] = useState("");
	const [mentionFilterQuery, setMentionFilterQuery] = useState("");
	const [hashtagFilterQuery, setHashtagFilterQuery] = useState("");
	const [blacklistFilterQuery, setBlacklistFilterQuery] = useState("");

	//filter Funktion
	const filterObject = () => {
		const filteredData = originalSourceData.filter(function (i) {
			const textEmojiInComment = i.Comment.toLowerCase();
			const mentionInComment = i.Comment.toLowerCase();
			const hashtagInComment = i.Comment.toLowerCase();
			const blacklistUser = i.User.toLowerCase();
			console.log(!blacklistUser.includes(blacklistFilterQuery));

			return (
				(textEmojiInComment.includes(textEmojifilterQuery) &&
					mentionInComment.includes(mentionFilterQuery) &&
					hashtagInComment.includes(hashtagFilterQuery)) ||
				!blacklistUser.includes(blacklistFilterQuery)
			);
		});
		if (
			textEmojifilterQuery ||
			mentionFilterQuery ||
			hashtagFilterQuery ||
			blacklistFilterQuery
		) {
			if (Object.keys(filteredData).length != 0) {
				handleDataView(filteredData);
			} else {
				handleDataView([{ "": "" }]);
			}
		} else {
			handleDataView(originalSourceData);
		}
	};

	//Text/ Emoji in Comment -> Filter comment by text/ emoji
	const handleTextEmojiFilter = (event) => {
		setTextEmojiFilterQuery(event.target.value);
	};

	//Must Mention -> Filter comment by mention
	const handleMentionFilter = (event) => {
		setMentionFilterQuery(event.target.value);
	};

	//Must Hashtag -> Filter comment by Hashtag
	const handleHashtagFilter = (event) => {
		setHashtagFilterQuery(event.target.value);
	};

	//multiplicator by Mentions -> add same user to array/ list

	//Blacklist -> delete by username
	const handleBlacklistFilter = (event) => {
		setBlacklistFilterQuery(event.target.value);
	};

	//allow Duplicate user -> check username by duplication
	return (
		<div className="px-4 py-5 sm:p-6 w-full bg-zinc-800 rounded-lg p-6 text-white drop-shadow-lg">
			<div className="grid grid-cols-6 gap-6">
				<div className="col-span-6">
					<label
						htmlFor="text-emoji-filter"
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
						htmlFor="mention-filter"
						className="block text-sm font-medium leading-6 "
					>
						Mention Filter
					</label>
					<input
						type="text"
						name="mention-filter"
						id="mention-filter"
						className="mt-2 bg-neutral-900 block w-full rounded-md border-0 p-1.5 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
						onChange={handleMentionFilter}
					/>
				</div>

				<div className="col-span-6 sm:col-span-3">
					<label
						htmlFor="hashtag-filter"
						className="block text-sm font-medium leading-6 "
					>
						Hashtag Filter
					</label>
					<input
						type="text"
						name="hashtag-filter"
						id="hashtag-filter"
						className="mt-2 bg-neutral-900 block w-full rounded-md border-0 p-1.5 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
						onChange={handleHashtagFilter}
					/>
				</div>

				<div className="col-span-6 sm:col-span-6 lg:col-span-2">
					<label
						htmlFor="multiplicator-by-mentions"
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
						htmlFor="blacklist"
						className="block text-sm font-medium leading-6 "
					>
						Blacklist User
					</label>
					<input
						type="text"
						name="blacklist"
						id="blacklist"
						className="mt-2 bg-neutral-900 block w-full rounded-md border-0 p-1.5 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
						onChange={handleBlacklistFilter}
					/>
				</div>

				<div className="col-span-6 sm:col-span-3 lg:col-span-2">
					<label
						htmlFor="duplicate-user"
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
			<button
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-6 py-2 px-4 rounded-full"
				onClick={() => filterObject()}
			>
				Save settings
			</button>
		</div>
	);
};

export default Filter;
