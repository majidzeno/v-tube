/** @format */
import axios from "axios";
import { API_KEYS } from "./_KEYS";

const baseUrl = "https://www.googleapis.com/youtube/v3";
// All types  Search
export const _searchAll = (keyword) => {
	return axios.get(
		`${baseUrl}/search?part=snippet&q=${keyword}&maxResults=12&key=${API_KEYS.youtube_key}`
	);
};
export const _loadMore = (keyword, nextPageToken, filter) => {
	if (filter.kind === "type") {
		return axios.get(
			`${baseUrl}/search?part=snippet&q=${keyword}&maxResults=12&key=${API_KEYS.youtube_key}&pageToken=${nextPageToken}&type=${filter.arg}`
		);
	} else if (filter.kind === "date") {
		return axios.get(
			`${baseUrl}/search?part=snippet&q=${keyword}&maxResults=12&key=${API_KEYS.youtube_key}&pageToken=${nextPageToken}&publishedAfter=${filter.arg}`
		);
	} else {
		return axios.get(
			`${baseUrl}/search?part=snippet&q=${keyword}&maxResults=12&key=${API_KEYS.youtube_key}&pageToken=${nextPageToken}`
		);
	}
};
export const _filterByType = (keyword, type) => {
	return axios.get(
		`${baseUrl}/search?part=snippet&q=${keyword}&maxResults=12&key=${API_KEYS.youtube_key}&type=${type}`
	);
};
export const _filterByDate = (keyword, date) => {
	return axios.get(
		`${baseUrl}/search?part=snippet&q=${keyword}&maxResults=12&key=${API_KEYS.youtube_key}&publishedAfter=${date}`
	);
};

// Channel
export const _getChannelById = (channelId) => {
	return axios.get(
		`${baseUrl}/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${API_KEYS.youtube_key}`
	);
};
export const _getChannelVideos = (playlistId) => {
	return axios.get(
		`${baseUrl}/playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=${playlistId}&key=${API_KEYS.youtube_key}`
	);
};
// Playlist

export const _getPlaylistById = (playlistId) => {
	return axios.get(
		`${baseUrl}/playlistItems?part=snippet&playlistId=${playlistId}&key=${API_KEYS.youtube_key}`
	);
};

// Single Video
export const _getVideoDetails = (videoId) => {
	return axios.get(
		`${baseUrl}/videos?part=snippet&id=${videoId}&key=${API_KEYS.youtube_key}`
	);
};
export const _getRelatedVideos = (videoId) => {
	return axios.get(
		`${baseUrl}/search?part=snippet&relatedToVideoId=${videoId}&type=video&key=${API_KEYS.youtube_key}`
	);
};
