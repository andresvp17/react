import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import useForm from "./hook";

test('change keyword', () =>{
    const { result } = renderHook(() => useForm())

    act(() => {
        result.current.changeKeyword('dragon ball')
    })
    expect(result.current.keyword).toBe('dragon ball')
})