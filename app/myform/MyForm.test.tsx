import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import MyForm from "./MyForm";
import { createRoutesStub } from "react-router";

describe('MyForm', () => {
    it('renders', () => {
        const RoutesStub = createRoutesStub([
            { path: '/', action: () => {}, Component: MyForm}
        ])
        render(<RoutesStub />)
        
        screen.getByLabelText('Name:');
    })
})