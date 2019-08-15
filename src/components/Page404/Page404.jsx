import React from 'react';

const Page404 = ({ location }) => {
    return (
        <div className='Page404'>
            <h1>Не найдена страница'{location.pathname}'</h1>
        </div>
    );
};

export default Page404;
