import styled from 'styled-components'
import { AiOutlineClose } from 'react-icons/ai'

export const Container = styled.div`
    padding: 50px 100px;
    height: 100%;
`;

export const Title = styled.h1`
    padding: 0 100px;
    font-family: 'Montserrat';
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2em;
    text-align: start;
    
    color: ${({ theme }) => theme.colors.text};
    margin-top: 20px;
`;
export const Text = styled.h4`
    font-family: 'Montserrat';
    font-weight: 400;

    color: ${({ theme }) => theme.colors.text};
`;

export const CartItem = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    
    margin-bottom: 10px;
    padding: 10px;
    align-items: center;

    border-bottom: 1px solid ${({theme}) => theme.colors.secondary};
`;

export const ContainerImage = styled.div``;

export const Image = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 25px;
`;

export const Content = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 10px;
`;

export const Paragraph = styled.p`
    color: ${({ theme }) => theme.colors.text};
`;

export const Raiting = styled.h5`
    margin: 20px;
    color: ${({ theme }) => theme.colors.text};
`;

export const Link = styled.a`
    text-decoration: none;
`;

export const CardAction = styled.div`
    display: flex;
`;

export const Quantity = styled.div`
    width: 50px;
    height: 80px;
    border: none;
    
    text-align: center;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);
    
    background-color: ${({theme}) => theme.colors.primary};
    border-radius: 10px;
    margin-right: 10px;

    &:hover {
        background-color: ${({theme}) => theme.colors.effect};
    }
`;

export const ButtonClose = styled.button`
    width: 50px;
    height: 80px;
    border: none;
    
    text-align: center;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);
    
    background-color: ${({theme}) => theme.colors.primary};
    border-radius: 10px;

    &:hover {
        background-color: ${({theme}) => theme.colors.effect};
    }
`;

export const IconClose = styled(AiOutlineClose)`
    font-size: 25px;
    color: ${({ theme }) => theme.colors.text};
`;

export const Total = styled.div`
    margin-top: 20px;
    /* border-top: 0.7px solid ${({ theme }) => theme.colors.secondary}; */
`;

export const TotalContent = styled.div`
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
`;

export const Value = styled.h5`
    font-size: 0.9em;
    font-weight: bold;
    font-family: 'Montserrat';
    color: ${({ theme }) => theme.colors.text};
`;

export const Strong = styled.strong`
    font-weight: bold;
    font-family: 'Montserrat';
    font-size: 1em;
    text-align: start;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.text};
`;
