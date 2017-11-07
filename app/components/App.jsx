import React from 'react';
import './app.css';
import Gif from './gif/Gif';
import Frames from './gif/Frames';
import Play from './controls/Play';
import Upload from './controls/Upload';
import Slider from './controls/Slider';
import Remove from './controls/Remove';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      frameRate: 30,
      currentFrame: 0,
      runGif: false,
    };

    this.handleFileInput = this.handleFileInput.bind(this);
    this.loop = this.loop.bind(this);
    this.toggleRunGif = this.toggleRunGif.bind(this);
    this.handleSetFrameRate = this.handleSetFrameRate.bind(this);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }

  // Upload image files and save to state as list of data urls
  handleFileInput({ target }) {
    const files = target.files;
    const imgRegex = /image/;

    for (let i = 0; i < files.length; i += 1) {
      if (files[i].type.match(imgRegex)) {
        const reader = new FileReader();
        reader.readAsDataURL(files[i]);
        reader.onloadend = () => {
          this.setState({
            images: [...this.state.images, reader.result],
          });
        };
      }
    }
  }

  // Set runGif (bool) to start / stop interval that invokes loop()
  toggleRunGif() {
    if (!this.state.runGif) {
      this.interval = setInterval(() => this.loop(), 1000 / this.state.frameRate);
    } else {
      clearInterval(this.interval);
    }
    this.setState(prev => ({
      runGif: !prev.runGif,
    }));
  }

  // iterate over image urls while interval is active
  loop() {
    if (this.state.currentFrame >= this.state.images.length - 1) {
      this.setState({
        currentFrame: 0,
      });
    } else {
      this.setState(prev => ({
        currentFrame: prev.currentFrame + 1,
      }));
    }
  }

  // Set framerate based on range input. Replace interval if gif is playing.
  handleSetFrameRate(e) {
    this.setState({
      frameRate: +e.target.value,
    }, () => {
      if (this.state.runGif) {
        clearInterval(this.interval);
        this.interval = setInterval(() => this.loop(), 1000 / this.state.frameRate);
      }
    });
  }

  // reset state except framerate
  handleRemoveAll() {
    this.setState({
      images: [],
      currentFrame: 0,
      runGif: false,
    });
  }

  render() {
    const { images, runGif, frameRate, currentFrame } = this.state;

    return (
      <div className="container">
        <h1>Gif Preview Generator</h1>
        <Upload handleFileInput={this.handleFileInput} />

        {images.length > 0 &&
          <div>
            <Slider handleSetFrameRate={this.handleSetFrameRate} frameRate={frameRate} />
            <span>Press play to run gif preview</span>
            <Play toggleRunGif={this.toggleRunGif} runGif={runGif} />
            <Remove handleRemoveAll={this.handleRemoveAll} />
            <Gif src={images[currentFrame]} />
            <Frames images={images} />
          </div>
        }
      </div>
    );
  }
}

export default App;
