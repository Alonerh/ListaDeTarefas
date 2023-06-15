import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
`;
export const LeftSide = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const RightSide = styled.div`
    margin-right: 20px;
`;
export const Select = styled.input`
    width: 40px;
    height: 40px;
    margin-right: 10px;
`;

type TextProps = {
    done: string
}
export const Text = styled.p<TextProps>`
    text-decoration: ${props => props.done === 'true' ? 'line-through' : 'none'};
    color: ${props => props.done === 'true' ? '#ccc' : '#f4f4f4 '};
`;
export const Delete = styled.div`
    background-color: #17181f;
    padding: 8px 10px;
    font-weight: bold;
    cursor: pointer;
`;