import React from 'react'
import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';


const Footer01 = styled('div')({
    backgroundColor: '#000',
    padding: '0.5rem',
    maxWidth: '100%',
    color: '#fff'
});

export const Footer = () => {
    return (
        <div>

            <Footer01>
                <Container style={{ fontSize: "0.7rem", textAlign: "center" }}>
                    <p>Copyright © {new Date().getFullYear()} Edith Ogbonna Foundation. All Rights Reserved</p>
                </Container>
            </Footer01>

        </div>
    )
}
