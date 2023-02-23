import React from 'react';
import Header from "../Header/Header";
import './Layout.css'


const Layout = ({ children }) => {
    return (
        <div className={'layout'}>
           <Header className={'header'} />
            <main className={'main'}>
                {children}
            </main>
        </div>
    );
};

export const withLayout = (Component) => {
    return function withLayoutComponent(props) {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        );
    };
};