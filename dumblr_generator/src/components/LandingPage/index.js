/* global DatArchive */
import React, { Component } from "react";

import { Container, CreateBtn, Headline, SubHead } from "./styles";

class LandingPage extends Component {
  state = {
    newUrl: ""
  };
  async createDumblr() {
    // need to put real ID here
    const originalDumblr =
      "30a128208300b5041076702ab1094e3d4b855039076997d29d3a6ba2d8301a1f";
    const archive = await DatArchive.fork(originalDumblr, {
      title: "My dumblr",
      description: "a place for shitposts and hot takes"
    });

    this.setState({
      newUrl: archive.url
    });

    // might need to download after creating the fork?
    // https://beakerbrowser.com/docs/apis/dat.html#download
  }

  render() {
    return (
      <Container>
        <Headline>dumblr</Headline>
        <SubHead>
          A decentralized, stripped down, shitty version of tumblr. Built on
          Dat.
        </SubHead>
        <CreateBtn onClick={() => this.createDumblr()}>
          Create my dumblr →
        </CreateBtn>
        <div>
          {this.state.newUrl && (
            <p>
              You new dumblr is <a href={this.state.newUrl}>here</a>.
            </p>
          )}
        </div>
      </Container>
    );
  }
}

export default LandingPage;
