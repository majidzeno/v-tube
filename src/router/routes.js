/** @format */

import Search from "@views/search";
import Channel from "@views/channel";
import Video from "@views/video";
import NotFound from "@views/_404";
// /search?query={txt}
export default [
	{
		path: "/search",
		name: "search",
		component: Search,
	},
	{
		path: "/channel/:channelId",
		name: "channel",
		component: Channel,
	},
	{
		path: "/video/:videoId",
		name: "video",
		component: Video,
	},
	{
		path: "/404",
		name: "404",
		component: NotFound,
		props: true,
	},
	{
		path: "*",
		redirect: { name: "search" },
	},
];
