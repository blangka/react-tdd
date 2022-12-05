import {render, screen, cleanup, fireEvent} from "@testing-library/react";

import List from "./List";


const handleClick = jest.fn();

test('List 기본 테스트', () => {
    const tasks = [{
        id: 1,
        title: '아무 일도 하기 싫다.',
    },
        {
            id: 2,
            title: '건물 매입',
        }
    ];

    const {container} = render(<List tasks={tasks} onClick/>);

    expect(container).toHaveTextContent('아무 일도 하기 싫다.');
    expect(container).toHaveTextContent('건물 매입');
})


test('click Event Test', () => {
    const tasks = [{
        id: 1,
        title: '아무 일도 하기 싫다.',
    },
        {
            id: 2,
            title: '건물 매입',
        }
    ];

    const {container ,getAllByText} = render(<List tasks={tasks} handleClick={handleClick}/>);

    const buttons = getAllByText('완료');

    fireEvent.click(buttons[0]);

    expect(handleClick).toBeCalledTimes(1);
})
