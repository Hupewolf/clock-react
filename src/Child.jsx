// function Child({ count }) {
//     return <p>Child nhận props: {count}</p>;
// }

function Child({ onIncrease, count }) {
    return (
        <div>
            <p>Child nhận props: {count}</p>
            <button onClick={onIncrease}>Tăng</button>
        </div>
    );
}

export default Child;