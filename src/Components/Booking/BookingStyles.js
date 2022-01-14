import styled from "styled-components";


export const BodyBooking = styled.div`
background-color: aliceblue;
width: 100%;
height: 100vh;


`;
export const HeaderBoocking = styled.header`
background-color: white;
width: 90%;
height: auto;
margin: auto;
border-bottom: solid 1px black;
padding: 10px 0;
margin-top: 20px;
`;

export const SectionBoocking = styled.section`
width: 90%;
height: auto;
margin: auto;
margin-top: 80px;
display: flex;
justify-content: center;

align-items: center;
`;

export const ColumnBoocking = styled.div`
width: 150px;
height: auto;
border-top: solid 3px black;
border-bottom: solid 3px black;

border-left: solid 3px black;
`;

export const TitleColumn  = styled.h2`

font-size: 12px;
text-align: center;

`



export const Celda = styled.div`
border-top: solid 3px purple;
height: 50px;
text-align: center;
line-height: 50px;

`

export const CeldaChoose = styled.div`
border-top: solid 3px purple;
height: 50px;
text-align: center;
line-height: 50px;
cursor: pointer;
&:hover {
    background-color: rgba(255, 255, 0, .5);
}

`;


export const ButtonContainerBoocking = styled.div`
width: 90%;
display: flex;
margin: auto;
justify-content: center;
margin-top: 50px;
margin-bottom: 50px;

`;

export const ButtonBoocking = styled.button`
background-color: transparent;
border: none;
border: solid 2px black;
padding: 15px;
border-radius: 5px;
font-size: 3em;
cursor: pointer;
width: 60%;

&:hover {
    background-color: #d8bfd8 ;
}
`;
 
