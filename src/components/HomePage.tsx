import React, {FC} from 'react';
import EventsExample from "./EventsExample";
import Card, {CardVariant} from "./Card";

const HomePage: FC = () => {
    return (
        <div>
            <EventsExample/>
            Works!
            <Card onClick={(num) => console.log('click...', num)} variant={CardVariant.outline} width='200px'
                  height='200px'>
                <button>click</button>
            </Card>
        </div>
    );
};

export default HomePage;