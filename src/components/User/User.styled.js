import styled from '@emotion/styled'

export const Profile = styled.div`
background-color: white;
`
export const Description = styled.div`
display: flex;
flex-direction: column;
text-align: center;
`

export const Avatar = styled.img`
width: 40px;
height: 50px;
display: block;
margin-left: auto;
margin-right: auto;
`

export const Name = styled.p`
margin-top: 8px;
margin-bottom: 0px;
font-weight: 700;
font-size: 22px;
`

export const Tag = styled.p`
margin-top: 8px;
margin-bottom: 0px;
color: rgb(135, 139, 139);
font-size: 16px;
`

export const Location = styled.p`
margin-top: 8px;
margin-bottom: 0px;
color: rgb(135, 139, 139);
font-size: 16px;
`

export const Stats = styled.ul`
display: flex;
list-style: none;
padding: 0px;
justify-content: center;
`
export const Item = styled.li`
display: flex;
text-align: center;
flex-direction: column;
align-items: center;
justify-content: center;
padding-right: 15px;
padding-left: 15px;
border: 1px solid black;
background-color: #F8F8F8;
`

export const Label = styled.span`
color: rgb(135, 139, 139);
font-size: 12px;
display: flex;
text-align: center;
`

export const Quantity = styled.span`
display: flex;
text-align: center;
`