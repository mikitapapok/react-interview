import React from 'react'
import {fireEvent, render, screen} from '@testing-library/react'
import FirstChild from "./first-child";
import '@testing-library/jest-dom/extend-expect';
describe('a',()=>{
    it('render a button',()=>{
        render(<FirstChild />)
        const buttonElement=screen.getByTestId(
            'button'
        )
        expect(buttonElement).toHaveTextContent('Change state')

    })

    it('button is clickable',()=>{
        const onClick=jest.fn()
        render(<FirstChild/>)
        const button=screen.getByText('Change state')
        button.onclick=onClick
        fireEvent.click(button)
        expect(onClick).toHaveBeenCalledTimes(1)

    })
})
