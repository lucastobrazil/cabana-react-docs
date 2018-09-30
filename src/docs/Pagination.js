import Docs from './docs';
import { Pagination } from 'cabana-react';
import React from 'react';

export default function PaginationDocs() {
    return (
        <Docs title="Pagination">
            <Pagination />
            <Pagination size={16} />
            <Pagination size={32} />
            <Pagination type="numbers" />
        </Docs>
    );
}
