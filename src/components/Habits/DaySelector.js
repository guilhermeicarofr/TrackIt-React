import { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function DaySelector({children, day, creationinput, setCreationinput, type}) {

    const [selected, setSelected] = useState(false);

    useEffect(() => {
        if(creationinput.days.includes(day)) {
            setSelected(true);
        }
    },[day, creationinput]);

    function selectDay() {
        if(type==='create'){
            setSelected(!selected);
            if(creationinput.days.includes(day)) {
                setCreationinput({...creationinput, days:creationinput.days.filter((item) => (item!==day))});
            } else {
                setCreationinput({...creationinput, days:[...creationinput.days, day]});
            }
        }
    }

    return (
        <DayContainer onClick={selectDay} selected={selected}>
            {children}
        </DayContainer>
    );
}

const DayContainer = styled.span`
    width: 30px;
    height: 30px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    font-size: 20px;
    ${props=>props.selected ? 'color: #FFFFFF;' : 'color: #DBDBDB;'}
    ${props=>props.selected ? 'background-color: #CFCFCF;' : 'background-color: #FFFFFF;'}
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;