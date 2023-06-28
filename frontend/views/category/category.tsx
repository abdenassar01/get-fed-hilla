import * as React from 'react';

type Props = {
    category: string
}

export function Category({ category }: Props) {
    return (
        <div>
            {category}
            by category
        </div>
    );
};