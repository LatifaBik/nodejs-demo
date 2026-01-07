import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from Azure!");

/*const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, "message.txt");*/

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Error reading file");
    } else {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(data);
    }
  });
});
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);

/*app.listen(port, () => {
  console.log("Server running on port", port);*/
});


/*server.listen(3000, () => {
  console.log("Server is running on port 3000");
});*/

