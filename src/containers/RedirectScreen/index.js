import { PureComponent } from 'react';

class RedirectContainer extends PureComponent {
    componentDidMount() {
        const { history } = this.props;

        history.push('/shipments');
    }
    render() {
        return null;
    }
}

export default RedirectContainer;
