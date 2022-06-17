import Background from './components/Background';

import useGetImages from './hooks/useGetImages';

function App() {
    const images = useGetImages();

    console.log({ images });

    return (
        <>
            <Background />
            <h1>Memory Game</h1>
        </>
    );
}

export default App;
