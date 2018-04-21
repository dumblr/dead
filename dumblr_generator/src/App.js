import React, { Component } from "react";

class App extends Component {
  async writeFile() {
    var archive = await global.DatArchive.create({
      title: "My Site",
      description: "Where I put my files"
    });
    console.log(archive.url);

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

  async updateData() {
    const archive = new global.DatArchive(
      "5f105947fe3ea2840a9f1416285606ec708fc75b56a232c7d74e5df629b9abe3"
    );
    const buf = JSON.parse(
      await archive.readFile("./dumblr-test.json", "utf8")
    );

    // testing ability to read file

    console.log(buf);
  }
  render() {
    return (
      <div>
        <button onClick={() => this.writeFile()}>
          Plz write to filesystem
        </button>

        <button onClick={() => this.updateData()}>buf</button>
      </div>
    );
  }
}

export default App;
