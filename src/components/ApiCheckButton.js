const ApiCheckButton = ({apiName, handleClick}) => {

    return (<div>
        <h1>{apiName} Test</h1>
        <button onClick={handleClick}>Check {apiName} API</button>

    </div>)
}

export default ApiCheckButton;
