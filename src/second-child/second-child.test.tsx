import React from "react";
import { shallow } from "enzyme";
import SecondChild from "./second-child";
import {
  act,
  fireEvent,
  render,
  renderHook,
  screen,
} from "@testing-library/react";
import useUserReduser from "../useUserReduser";
import "@testing-library/jest-dom/extend-expect";
import * as ReduxContext from "../useAppContext";

describe("testing of second-child component", () => {
  it("component is rendered", () => {
    const clickHandler = jest.fn();
    const { result } = renderHook(() => useUserReduser());

    // const Context=jest.spyOn(ReduxContext,'useAppContext').mockImplementation(()=>contextValue)
    // const wrapper=shallow(<SecondChild />)

    render(
      <ReduxContext.ReducerContext.Provider value={result.current}>
        <SecondChild />
      </ReduxContext.ReducerContext.Provider>
    );
    const changeContextButto = screen.getByText(
      /Change value from custom hook/i
    );
    act(() => {
      result.current.dispatch({ type: "increase" });
    });
    act(() => {
      result.current.dispatch({ type: "change_name", nextName: "Nick" });
    });
    const exprectedText = screen.getByTestId("context-text");
    changeContextButto.onclick = clickHandler;
    fireEvent.click(changeContextButto);
    expect(clickHandler).toHaveBeenCalledTimes(1);
    expect(result.current.state.password).toBeGreaterThan(0);
    expect(result.current.state.name).toBe("Nick");
    // expect(wrapper.find('button').text()).toBe('Change value from custom hook')
  });
});
