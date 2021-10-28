import React, { Component, ErrorInfo, ReactNode } from 'react';

import styles from './ErrorBoundary.module.scss';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(_: Error): State {
    return { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.errorMessage}>
          <h2>Что-то пошло не так, но мы уже знаем об этом и спешим на помощь.</h2>
          <h3>Попробуйте начать с главной страницы или повторить ваш запрос позже.</h3>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
