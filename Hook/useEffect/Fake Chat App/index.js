import ReactDOM from 'react-dom';

import App from './App.js';


// Fake comments : (custom event listener)

function emitComment(id) {
    setInterval(() => {
        window.dispatchEvent(
            new CustomEvent(`lession-${id}`, {
                detail: `Noi dung comment cua lession ${id}`
            })
        )
    }, 2000)
}

emitComment(1)
emitComment(2)
emitComment(3)



const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
    <App />
)
