import React, { Component, ErrorInfo } from 'react';

class ErrorBoundary extends Component<{ children: React.ReactNode }> {
  state = {
    error: false,
  };

  componentDidCatch(err: Error, info: ErrorInfo): void {
    console.log(err, info);
    this.setState({ error: true });
  }

  render() {
    if (this.state.error) {
      return <h2 style={{ textAlign: 'center' }}>Something went wrong</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
