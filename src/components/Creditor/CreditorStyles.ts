import styled from 'styled-components';

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    width: 250px;
    height: 350px;
    border-radius: 8px;
    border: 1px solid #8345ff;
`;

export const ImageContainer = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 1px solid #8345ff;
    display: flex;
    align-items: center;
    margin: 10px 0;
    justify-content: center;
    img {
        object-fit: cover;
    }
`;

export const Title = styled.h3`
    color: #ffffff;
`;