import React from "react";

const Breadcrumbs = () => {
    return (
        <>
            <div className="bread-crumbs">
                <ul>
                    <li>Anasayfa <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 6L15 12L9 18" stroke="#A4A4A4" />
                    </svg>
                    </li>
                    <li>Katalog <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 6L15 12L9 18" stroke="#A4A4A4" />
                    </svg>
                    </li>
                    <li akıllı telefonlar</li>
                </ul>
            </div>
        </>
    );
};

export default Breadcrumbs;
