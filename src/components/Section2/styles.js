import styled from 'styled-components'


export const Container = styled.div`

`

export const Options = styled.div`
display: flex;
margin-left: 70px;
div {
    font-size: 16px;
    border: 1px solid #BDBDBD;
    padding: 10px;
    width: 211.5px;
    height: 20px;
    display: grid;
    place-items: center;
    margin-bottom: 10px;
    margin-top: 75px;
    
}
`




export const ContainerItens = styled.div`
box-shadow: 0px 3px 19px 0px #00000038;
width: 270px;
height: 450px;
button {
    position:relative;
    width: 245px;
    height: 44px;
    background-color: #F71963;
    color: #ffffff;
    font-size: 14px;
    border-radius: 4px;
    border: none;
    margin-left: 10px;
    margin-top: 40px;
}

`

export const Image = styled.img`
width: 247px;
height: 228px;
margin-top: 22px;

`


export const Text = styled.p`
font-size: 15px;
line-height: 22.5px;
width: 245px;
margin-left: 11px;
color: #3F3F40;

`

export const Price = styled.p`
font-size: 20px;
line-height: 30px;
width: 245px;
margin-left: 11px;
color: #3F3F40;
`

export const Title = styled.h1`
position: absolute;
font-size: 30px;
color: #F71963;
margin-left: 545px;
margin-top: 20px;
`