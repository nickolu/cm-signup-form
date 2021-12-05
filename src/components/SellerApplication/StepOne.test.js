import {render, screen, within} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import StepOne from './StepOne';

describe('Step One of Signup Application', () => {
    let component;
    beforeEach(() => {
        component = render(<StepOne />);
    });

    it('should not have changed since last render', () => {
        const {container} = component;

        expect(component).toMatchSnapshot();
    });

    it('should render all of the form elements', () => {
        const {
            firstNameInput,
            lastNameInput,
            categorySelect,
            portfolioLinkInput,
            radioGroup,
            yesRadioButton,
            noRadioButton,
        } = queryformElements(screen);

        expect(firstNameInput).toBeInTheDocument();
        expect(lastNameInput).toBeInTheDocument();
        expect(categorySelect).toBeInTheDocument();
        expect(portfolioLinkInput).toBeInTheDocument();
        expect(radioGroup).toBeInTheDocument();
        expect(yesRadioButton).toBeInTheDocument();
        expect(noRadioButton).toBeInTheDocument();
    });

    test('first name input', () => {
        const {firstNameInput} = queryformElements(screen);

        userEvent.type(firstNameInput, 'Nick');

        const queriedInput = screen.queryByDisplayValue('Nick');

        expect(queriedInput).toBeInTheDocument();
    });

    test('last name input', () => {
        const {lastNameInput} = queryformElements(screen);

        userEvent.type(lastNameInput, 'Cunningham');

        const queriedInput = screen.queryByDisplayValue('Cunningham');

        expect(queriedInput).toBeInTheDocument();
    });

    test('category select', () => {
        const {categorySelect} = queryformElements(screen);

        userEvent.click(categorySelect);

        const firstElement = screen.getByLabelText('0');

        userEvent.click(firstElement);

        const queriedInput = screen.getByLabelText('0', {selected: true});

        expect(queriedInput).toBeInTheDocument();
    });

    test('portfolio link', () => {
        const {portfolioLinkInput} = queryformElements(screen);

        userEvent.type(portfolioLinkInput, 'mywebsite.com');

        const queriedInput = screen.queryByDisplayValue('mywebsite.com');

        expect(queriedInput).toBeInTheDocument();
    });

    test('radio group', () => {
        const {yesRadioButton, noRadioButton} = queryformElements(screen);

        userEvent.click(yesRadioButton);

        expect(yesRadioButton.checked).toBe(true);

        userEvent.click(noRadioButton);

        expect(noRadioButton.checked).toBe(true);
    });
});

function queryformElements(screen) {
    /*
        Note: using the accessible roles as selectors (instead of hard-coded ids) ensures that the app is accessible
        https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles
    */

    const firstNameInput = screen.queryByRole('textbox', {
        name: 'First Name',
    });
    const lastNameInput = screen.queryByRole('textbox', {
        name: 'Last Name',
    });
    const categorySelect = screen.getByLabelText('Your Shop Category');
    const portfolioLinkInput = screen.queryByRole('textbox', {
        name: 'Portfolio Link',
    });
    const radioGroup = screen.queryByRole('radiogroup');
    const yesRadioButton = screen.queryByRole('radio', {name: 'Yes'});
    const noRadioButton = screen.queryByRole('radio', {name: 'No'});

    return {
        firstNameInput,
        lastNameInput,
        categorySelect,
        portfolioLinkInput,
        radioGroup,
        yesRadioButton,
        noRadioButton,
    };
}
