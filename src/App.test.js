import {render, screen, within} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Creative Market Signup App', () => {
    let component;
    beforeEach(() => {
        component = render(<App />);
    });

    it('should not have changed since last render', () => {
        const {container} = component;

        expect(component).toMatchSnapshot();
    });
});
