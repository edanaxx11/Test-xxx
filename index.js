const { Launcher } = require("@loybung/launcher");
const { join } = require("path");

// LAUNCHER STREAMING
const app = new Launcher("https://loybung.vercel.app/api/v2/code/streaming")
	.setFilePath(join(__dirname, "./app.js"))
	.setExpire(null);

app.Run();
