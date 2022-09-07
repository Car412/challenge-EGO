import styled from "styled-components"

export default function Footer (){
    return (
        <Foot>
            <div></div>
        </Foot>
    )
}

const Foot = styled.div `
height: 50px;
    width: 100%;
    margin-top: 100px;    
    background-color: #000000;
    position: absolute;
    @media only screen and (max-width: 910px) {
        .linkImg{
            display: block;
        }
    }
`;