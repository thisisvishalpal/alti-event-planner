import { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    this.setState({ hasError: true });
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    console.error("ErrorBoundary caught an error", error, info);
  }
  render() {
    return this.state.hasError ? (
      <h1>Facing some error, please contact admin</h1>
    ) : (
      this.props.children
    );
  }
}
