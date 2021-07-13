import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IInfoFooter } from '@client/common/footer/footer.types';

const FooterInfo: FC<IInfoFooter> = ({ title, content }: IInfoFooter) => {
    const renderInfoContent = () => {
        return (
            <ul>
                {content.map((v, i) => {
                    return (
                        <li key={i}>
                            <Link to={v.to}>{v.name}</Link>
                        </li>
                    );
                })}
            </ul>
        );
    };

    return (
        <div className="footer-info-box">
            <div className="box-title">{title}</div>
            <div className="box-content">{renderInfoContent()}</div>
        </div>
    );
};

export default FooterInfo;
