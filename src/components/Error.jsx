/* eslint-disable react-refresh/only-export-components */
import styled from '@emotion/styled'

const Texto = styled.div`
    background-color: #B7322C;
    color: #fff; 
    padding: 15px; 
    font-size: 22px; 
    text-transform: uppercase; 
    font-family: 'Lato', sans-sserif;
    font-weight: 700;
    text-align: center;
`

const error = ({children}) => {
    return (
        <Texto>
            {children}
        
        </Texto>
    )
}

export default error
