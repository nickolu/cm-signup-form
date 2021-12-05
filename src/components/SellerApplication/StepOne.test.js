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

        expect(firstNameInput.value).toBe('Nick');
    });

    test('last name input', () => {
        const {lastNameInput} = queryformElements(screen);

        userEvent.type(lastNameInput, 'Cunningham');

        expect(lastNameInput.value).toBe('Cunningham');
    });

    test('category select', () => {
        const {categorySelect} = queryformElements(screen);

        userEvent.click(categorySelect);

        const menuItems = screen.getAllByRole('option');

        userEvent.click(menuItems[1]);

        expect(menuItems[1].selected).toBe(true);
    });

    test('portfolio link', () => {
        const {portfolioLinkInput} = queryformElements(screen);

        userEvent.type(portfolioLinkInput, 'mywebsite.com');

        expect(portfolioLinkInput.value).toBe('mywebsite.com');
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
    const categorySelect = screen.getByRole('button', {
        name: 'Your Shop Category 0',
    });
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
