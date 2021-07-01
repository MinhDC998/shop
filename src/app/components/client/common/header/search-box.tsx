import React, { FC } from 'react';
import '@client/common/header/header.scss';
import { ClientContext } from '@client/context/client-context';
import { ISearchTag } from '@client/common//header/header.types';

const listTags: ISearchTag[] = [
    {
        name: 'Clothes',
    },
    {
        name: 'Shoes',
    },
    {
        name: 'Sweaters',
    },
    {
        name: 'Associations',
    },
    {
        name: 'Jackets',
    },
];

const SearchBox: FC = () => {
    const context = React.useContext(ClientContext);

    return (
        <>
            <label htmlFor="toggle-search-box">search icon goes here</label>
            <input type="checkbox" id="toggle-search-box" />
            <div id="search-container">
                <div id="search-box">
                    <label htmlFor="toggle-search-box" id="button-close-search">
                        Close button goes here
                    </label>

                    <h1> Search </h1>

                    <div className="wrapper-tags">
                        {listTags.map((tag, index) => (
                            <div key={index} className="tag">
                                {tag.name}
                            </div>
                        ))}
                    </div>

                    <form id="search-form">
                        <input type="text" id="search-input" placeholder="Search for products..." />
                        <button type="submit" id="submit-search">
                            search icon goes here
                        </button>
                    </form>
                </div>
                <label htmlFor="toggle-search-box" id="background-close-search"></label>
            </div>
        </>
    );
};

export default SearchBox;
