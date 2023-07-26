import { Component } from "react";

export default class ClassCounterPage extends Component {
  state = {
    count: 0,
  };

  onClickCountUp = (): void => {
    this.setState({
      count: 1,
    });
  };

  onClickCountUp02 = (): void => {
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
  };

  render(): JSX.Element {
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={this.onClickCountUp}>카운트 올리기!!</button>
        <button onClick={this.onClickCountUp02}>카운트 올리기02!!</button>
      </>
    );
  }
}
