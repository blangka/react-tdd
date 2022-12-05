import List from "../components/List";

const ListContainer = () => {
    const tasks = [{
        id: 1,
        title: '아무 일도 하기 싫다.',
    },
        {
            id: 2,
            title: '건물 매입',
        }
    ];

    const handleClick = () => {
        console.log('click');
    };

    return (<List tasks={tasks} handleClick={handleClick}/>);
}

export default ListContainer;
