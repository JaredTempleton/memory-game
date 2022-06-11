import Background from './components/Background';

import useGetImages from './hooks/useGetImages';

function App() {
    useGetImages();

    return (
        <>
            <Background />
            <h1>Memory Game</h1>
        </>
    );
}

export default App;
