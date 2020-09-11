/** @format */
import axios from "axios";

const api_key = process.env.VUE_APP_YOUTUBE_KEY;
const baseUrl = "https://www.googleapis.com/youtube/v3";

// All types  Search
export const _searchAll = (keyword) => {
	console.log("api_key", api_key);
	return axios.get(
		`${baseUrl}/search?part=snippet&q=${keyword}&maxResults=12&key=${api_key}`
	);
};
export const _loadMore = (keyword, nextPageToken, filter) => {
	if (filter.kind === "type") {
		return axios.get(
			`${baseUrl}/search?part=snippet&q=${keyword}&maxResults=12&key=${api_key}&pageToken=${nextPageToken}&type=${filter.arg}`
		);
	} else if (filter.kind === "date") {
		return axios.get(
			`${baseUrl}/search?part=snippet&q=${keyword}&maxResults=12&key=${api_key}&pageToken=${nextPageToken}&publishedAfter=${filter.arg}`
		);
	} else {
		return axios.get(
			`${baseUrl}/search?part=snippet&q=${keyword}&maxResults=12&key=${api_key}&pageToken=${nextPageToken}`
		);
	}
};
export const _filterByType = (keyword, type) => {
	return axios.get(
		`${baseUrl}/search?part=snippet&q=${keyword}&maxResults=12&key=${api_key}&type=${type}`
	);
};
export const _filterByDate = (keyword, date) => {
	return axios.get(
		`${baseUrl}/search?part=snippet&q=${keyword}&maxResults=12&key=${api_key}&publishedAfter=${date}`
	);
};

// Channel
export const _getChannelById = (channelId) => {
	return axios.get(
		`${baseUrl}/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${api_key}`
	);
};
export const _getChannelVideos = (playlistId) => {
	return axios.get(
		`${baseUrl}/playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=${playlistId}&key=${api_key}`
	);
};
// Playlist

export const _getPlaylistById = (playlistId) => {
	return axios.get(
		`${baseUrl}/playlistItems?part=snippet&playlistId=${playlistId}&key=${api_key}`
	);
};

// Single Video
export const _getVideoDetails = (videoId) => {
	return axios.get(
		`${baseUrl}/videos?part=snippet&id=${videoId}&key=${api_key}`
	);
};
export const _getRelatedVideos = (videoId) => {
	return axios.get(
		`${baseUrl}/search?part=snippet&relatedToVideoId=${videoId}&type=video&key=${api_key}`
	);
};
