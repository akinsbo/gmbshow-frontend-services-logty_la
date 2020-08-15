import * as React from 'react';

const Introduction = (props: { children: React.ReactNode }) => {
    const { children } = props;

    return (
        <div>
            <h2 aria-label= "introduction"
                aria-role="heading">{children}</h2>
        </div>
    );
}

export default Introduction