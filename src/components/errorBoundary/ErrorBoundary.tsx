import React, { Component, ErrorInfo } from 'react';

class ErrorBoundary extends Component<{ children: React.ReactNode }> {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  } // он обновляет только state

  componentDidCatch(err: Error, errorInfo: ErrorInfo): void {
    console.error('ошибка', err, errorInfo);
    // this.setState({ error: true }); можно вместо getDerivedStateFromError
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2 style={{ textAlign: 'center' }}>
          Something went wrong. Please refresh the page.
        </h2>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
