import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Intro React', () => {
    it('should render', () => {
        render(<App />);

        const heading = screen.getByText('Vite + React');

        expect(heading).toBeInTheDocument();
    });
});