import ApiCheckButton from "../components/ApiCheckButton";
import {getTest, getTestById, getToken, insertTest, updateTest} from "../apis/api";
import {useState} from "react";

const ApiTestContainer = () => {
    const [testId, setTestId] = useState(1);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleClick = (apiName) => {

        let requestData;

        switch (apiName) {
            case 'getToken':
                getToken().then((data) => {
                    console.log(data);
                });
                break;
            case 'getTest':
                getTest().then((data) => {
                    console.log(data);
                });
                break;
            case 'getTestById':
                getTestById(1).then((data) => {
                    console.log(data);

                });
                break;
            case 'insertTest':
                requestData = {
                    title: title,
                    body: body
                }
                insertTest(requestData).then((data) => {
                    console.log(data);
                });
                break;
            case 'updateTest':
                requestData = {
                    id: testId,
                    title: title,
                    body: body
                }
                updateTest(requestData).then((data) => {
                    console.log(data);
                });
                break;
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        if (name === 'title') {
            setTitle(value);
        } else if(name === 'body') {
            setBody(value);
        } else if (name === 'testId') {
            setTestId(value);
        }
    }

    return (
        <div>
            <ApiCheckButton apiName="getToken" handleClick={() => handleClick("getToken")}/>
            <br/>
            <ApiCheckButton apiName="getTest" handleClick={() => handleClick("getTest")}/>
            <br/>
            <ApiCheckButton apiName="getTestById" handleClick={() => handleClick("getTestById")}/>
            <br/>
            <div>title</div>
            <input type="text" name='title' value={title} onChange={handleChange}/>
            <div>body</div>
            <input type="text" name='body' value={body} onChange={handleChange}/>
            <ApiCheckButton apiName="insertTest" handleClick={() => handleClick("insertTest")}/>
            <br/>
            <div>id</div>
            <input type="number" name='testId' value={testId}/>
            <div>title</div>
            <input type="text" name='title' value={title} onChange={handleChange}/>
            <div>body</div>
            <input type="text" name='body' value={body} onChange={handleChange}/>
            <ApiCheckButton apiName="updateTest" handleClick={() => handleClick("updateTest")}/>
            <br/>
        </div>
    )
};

export default ApiTestContainer;
