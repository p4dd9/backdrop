const fs = require("fs");
const path = require("path");
const archiver = require("archiver");
const glob = require("glob");

// the source directory to be archived
const srcDir = "./src";

// create a new output stream for the zip file
const output = fs.createWriteStream("bundle.zip");

// create a new archive object
const archive = archiver("zip", { zlib: { level: 9 } });

// pipe the archive data to the output stream
archive.pipe(output);

// add all files in the source directory and its subdirectories to the archive
glob("**/*", { cwd: srcDir, nodir: true }, (err, files) => {
  if (err) throw err;
  files.forEach((file) => {
    const filePath = path.join(srcDir, file);
    archive.file(filePath, { name: file });
  });

  // finalize the archive and close the output stream
  output.on("close", () => {
    console.log(
      `Successfully created archive: ${archive.pointer()} total bytes`
    );
  });
  archive.finalize();
});
