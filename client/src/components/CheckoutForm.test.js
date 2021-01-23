import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
    const header = screen.findByText(/checkout form/i)
});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm />)
    const name = screen.getByLabelText(/first name/i);
    const lastname = screen.getByLabelText(/last name/i);
    const address = screen.getByLabelText(/address/i);
    const city = screen.getByLabelText(/city/i);
    const state = screen.getByLabelText(/state/i);
    const zip = screen.getByLabelText(/zip/i);
    const button = screen.getByRole('button');

    //inputs
    await userEvent.type(name, 'Anil');
    await userEvent.type(lastname, 'Ramcharran');
    await userEvent.type(address, '1234');
    await userEvent.type(city, 'Loganville');
    await userEvent.type(state, 'GA');
    await userEvent.type(zip, '30052');

    await expect(name).toHaveValue('Anil');
    await expect(lastname).toHaveValue('Ramcharran');
    await expect(address).toHaveValue('1234');
    await expect(city).toHaveValue('Loganville');
    await expect(state).toHaveValue('GA');
    await expect(zip).toHaveValue('30052');

    await userEvent.click(button);
    
    // const display = screen.findByText(/'First Name' : 'aaa'/i) Failed test
    const display = screen.findByText(/'First Name' : 'Anil'/i) //passed

    display.then((data) => {
        expect(data).toBeTruthy();
    });
    
});
