import React, { Component } from "react";

class App extends Component {
  async writeFile() {
    // Create new DatArchive Site
    var archive = await global.DatArchive.create({
      // add desired metadata
      title: "My Site",
      description: "Where I put my files"
    });
    console.log(archive.url);

    // copy all files to DatArchive
    // from /template_build folder + template for content.json, etc
    // (this example only write one file)
    await archive.writeFile(
      "/dumblr-test.json",
      `{
      "posts": [
        {
          "id": 1,
          "content": "this is a post"
        }
      ]
    }
    `
    );
  }

  // testing ability to read file
  // async updateData() {
  //   const archive = new global.DatArchive(
  //     "5f105947fe3ea2840a9f1416285606ec708fc75b56a232c7d74e5df629b9abe3"
  //   );
  //   const buf = JSON.parse(
  //     await archive.readFile("./dumblr-test.json", "utf8")
  //   );
  //   console.log(buf);
  // }
  render() {
    return (
      <div>
        <div>
          <h1>Create your own Dumblr</h1>
          <button onClick={() => this.writeFile()}>
            Plz write to filesystem
          </button>
        </div>

        <div>
          <h2>
            This should probably be an area that explains dumblr, or shows users
            dumblr content
          </h2>
        </div>
      </div>
    );
  }
}

export default App;
