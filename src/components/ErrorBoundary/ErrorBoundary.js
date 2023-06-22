import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: '' };
    }

    componentDidCatch(error) {
        this.setState({
            error: `${error.name}: ${error.message}`,
        });
    }

    render() {
        const { error } = this.state;
        if (error) {
            return (
                <div>
                    <h2 style={{ textAlign: 'center', color: '#FF0000' }}>
                        {error}
                    </h2>
                </div>
            );
        }
        // eslint-disable-next-line react/jsx-no-useless-fragment, react/destructuring-assignment, react/prop-types
        return <>{this.props.children}</>;
    }
}

export default ErrorBoundary;