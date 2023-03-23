import React, { useState, useRef } from "react";

const Filter = ({ dataToEdit, handleDataView, originalSourceData }) => {
	const [textEmojifilterQuery, setTextEmojiFilterQuery] = useState("");
	const [mentionFilterQuery, setMentionFilterQuery] = useState("");
	const [hashtagFilterQuery, setHashtagFilterQuery] = useState("");
	const [blacklistFilterQuery, setBlacklistFilterQuery] = useState("");
	const [mentionMultiplicator, setMentionMultiplicator] = useState(false);
	const mentionCheck = useRef(null);
	const [duplicateUser, setDuplicateUser] = useState(false);
	const duplicateUserCheck = useRef(null);

	const mentionMultiplicatorClass = mentionMultiplicator
		? "border rounded-full border-grey flex items-center cursor-pointer w-12 bg-green-500 justify-end"
		: "border rounded-full border-grey flex items-center cursor-pointer w-12 bg-gray-400 justify-start";

	const duplicateUserClass = duplicateUser
		? "border rounded-full border-grey flex items-center cursor-pointer w-12 bg-green-500 justify-end"
		: "border rounded-full border-grey flex items-center cursor-pointer w-12 bg-gray-400 justify-start";

	//filter Funktion
	const filterObject = () => {
		//check if duplicate user button is true
		if (duplicateUser) {
			const filteredData_noDuplicateUser = originalSourceData.filter(
				(obj, index, self) =>
					index === self.findIndex((t) => t.User === obj.User)
			);
		}

		//chef if mention multiplicator is true
		if (mentionMultiplicator) {
			const duplicatedObjs = [];
			for (const key in originalSourceData) {
				if (originalSourceData.hasOwnProperty(key)) {
					const entry = originalSourceData[key];
					if (entry.Comment.includes("@")) {
						const duplicatedEntry = Object.assign({}, entry);
						duplicatedObjs.push(duplicatedEntry);
					}
				}
			}

			const newObj = Object.assign({}, originalSourceData, {
				duplicatedObjs,
			});
			console.log(newObj);
		}
		// const filteredData = originalSourceData.filter(function (i) {
		// 	const textEmojiInComment = i.Comment.toLowerCase();
		// 	const mentionInComment = i.Comment.toLowerCase();
		// 	const hashtagInComment = i.Comment.toLowerCase();
		// 	const blacklistUser = i.User.toLowerCase();

		// 	return (
		// 		(textEmojiInComment.includes(textEmojifilterQuery) &&
		// 			mentionInComment.includes(mentionFilterQuery) &&
		// 			hashtagInComment.includes(hashtagFilterQuery)) ||
		// 		!blacklistUser.includes(blacklistFilterQuery)
		// 	);
		// });
		// if (
		// 	textEmojifilterQuery ||
		// 	mentionFilterQuery ||
		// 	hashtagFilterQuery ||
		// 	blacklistFilterQuery
		// ) {
		// 	if (Object.keys(filteredData).length !== 0) {
		// 		handleDataView(filteredData);
		// 	} else {
		// 		handleDataView([{ "": "" }]);
		// 	}
		// } else {
		// 	handleDataView(originalSourceData);
		// }
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
	//if mention in comment -> add user to list
	const handleMentionMultiplicator = () => {
		setMentionMultiplicator(!mentionMultiplicator);
	};

	//Blacklist -> delete by username
	const handleBlacklistFilter = (event) => {
		setBlacklistFilterQuery(event.target.value);
	};

	//allow Duplicate user -> check username by duplication
	const handleDuplicateUser = () => {
		setDuplicateUser(!duplicateUser);
	};

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
				<div className="col-span-6 sm:col-span-3 lg:col-span-2">
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

				<div className="col-span-6 sm:col-span-3 lg:col-span-2">
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
						htmlFor="multiplicator-by-mentions"
						className="block text-sm font-medium leading-6 "
					>
						Mention Multiplicator
					</label>
					<input
						ref={mentionCheck}
						type="checkbox"
						name="hashtag-filter"
						id="hashtag-filter"
						className="hidden"
						onChange={handleMentionMultiplicator}
					/>
					<button
						className={mentionMultiplicatorClass}
						onClick={() => mentionCheck.current.click()}
					>
						<span className="rounded-full border w-6 h-6 border-grey shadow-inner bg-white shadow"></span>
					</button>
				</div>

				<div className="col-span-6 sm:col-span-3 lg:col-span-2">
					<label
						htmlFor="duplicate-user"
						className="block text-sm font-medium leading-6 "
					>
						Allow Duplicate User
					</label>
					<input
						ref={duplicateUserCheck}
						type="checkbox"
						name="duplicate-user"
						id="duplicate-user"
						className="hidden"
						onChange={handleDuplicateUser}
					/>
					<button
						className={duplicateUserClass}
						onClick={() => duplicateUserCheck.current.click()}
					>
						<span className="rounded-full border w-6 h-6 border-grey shadow-inner bg-white shadow"></span>
					</button>
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
