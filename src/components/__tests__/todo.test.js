import { render, screen, cleanup} from "@testing-library/react";
import Todo from "../todo";
import {createRenderer} from "react-dom/test-utils";
import renderer from "react-test-renderer";


afterEach(() => {
    cleanup();
});

test('test init', () => {
    expect(true).toBe(true);
})


test('should render todo compoenent', () => {

    const todos = [{
        id: 1,
        title: 'wash dished',
        completed: false
    },
        {
            id: 2,
            title: 'make dinner',
            completed: true
        }];
    render(<Todo todo={todos}/>);
    const todoElement = screen.getByTestId('todo-check');

    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('Todo');
})

test('should render non-completed todo ', () => {

    const todo = {
        id: 1,
        title: 'wash dished',
        completed: false
    };
    render(<Todo todo={todo}/>);
    const todoElement = screen.getByTestId('todo-1');

    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('wash dished');
    expect(todoElement).not.toContainHTML('strike');
})

test('should render completed todo ', () => {

    const todo =
        {
            id: 2,
            title: 'make dinner',
            completed: true
        };
    render(<Todo todo={todo}/>);
    const todoElement = screen.getByTestId('todo-2');

    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('make dinner');
    expect(todoElement).toContainHTML('strike');
})

test('matches snapshot', () => {
    const todo = {
        id: 1,
        title: 'wash dished',
        completed: false
    };
    const tree = renderer.create(<Todo todo={todo}/>).toJSON();
    console.log(tree);
    expect(tree).toMatchSnapshot();
});
