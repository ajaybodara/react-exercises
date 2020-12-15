import * as React from 'react';
import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react-lite";
import './App.css'
export interface Props {
    count: any;
    increase: () => void;
    decrease: () => void;
}

class Count {
    count: any = 0;

    constructor() {
        makeAutoObservable(this);
    }

    increaseCount(): void {
        this.count += 1;
    }

    decreaseCount(): void {
        this.count -= 1;
    }
}

const count = new Count();

const Counter = observer((props: Props) => (
    <div>
        <h1>Seconds passed: {props.count.count}</h1>
        <div className="buttons">
            <button onClick={props.increase} >Increment</button>
            <button onClick={props.decrease} >Decrement</button>
        </div>
    </div>
));

const App = () => {
    return (
        <Counter
            count={count}
            increase={() => count.increaseCount()}
            decrease={() => count.decreaseCount()}
        />
    )
}

export default App;