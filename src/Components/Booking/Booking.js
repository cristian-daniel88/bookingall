import React from 'react'
import { BodyBooking, ButtonBoocking, ButtonContainerBoocking, Celda, CeldaChoose, ColumnBoocking, HeaderBoocking, SectionBoocking, TitleColumn } from './BookingStyles'

function Booking() {
    return (
        <BodyBooking>
            <HeaderBoocking>
                Header
            </HeaderBoocking>

            <SectionBoocking>
                
                <ColumnBoocking>
        
                <TitleColumn>Hour</TitleColumn>
             
                 
                 <Celda>9 am</Celda>
                 <Celda>10 am</Celda>
                 <Celda>11 am</Celda>
                 <Celda>12 pm</Celda>
                 <Celda>1 pm</Celda>
                 <Celda>2 pm</Celda>
                 <Celda>3 pm</Celda>
                 <Celda>4 pm</Celda>
                 <Celda>5 pm</Celda>
                 <Celda>6 pm</Celda>
                </ColumnBoocking>



                <ColumnBoocking>
                <TitleColumn>Monday</TitleColumn>
                <CeldaChoose></CeldaChoose>
                <CeldaChoose></CeldaChoose>
                <CeldaChoose></CeldaChoose>
                <CeldaChoose></CeldaChoose>
                <CeldaChoose></CeldaChoose>
                <CeldaChoose></CeldaChoose>
                <CeldaChoose></CeldaChoose>
                <CeldaChoose></CeldaChoose>
                <CeldaChoose></CeldaChoose>
                <CeldaChoose></CeldaChoose>
                    
                </ColumnBoocking>



                <ColumnBoocking>
                <TitleColumn>Tusday</TitleColumn>
               <CeldaChoose></CeldaChoose>
                <CeldaChoose></CeldaChoose>
                <CeldaChoose></CeldaChoose>
                <CeldaChoose></CeldaChoose>
                <CeldaChoose></CeldaChoose>
                <CeldaChoose></CeldaChoose>
                <CeldaChoose></CeldaChoose>
                <CeldaChoose></CeldaChoose>
                <CeldaChoose></CeldaChoose>
                <CeldaChoose></CeldaChoose>
                    
                    
                </ColumnBoocking>



                <ColumnBoocking>
                <TitleColumn>Wednesday</TitleColumn>
                <CeldaChoose></CeldaChoose>
                <CeldaChoose></CeldaChoose>
                <CeldaChoose></CeldaChoose>
                <CeldaChoose></CeldaChoose>
                <CeldaChoose></CeldaChoose>
                <CeldaChoose></CeldaChoose>
                <CeldaChoose></CeldaChoose>
                <CeldaChoose></CeldaChoose>
                <CeldaChoose></CeldaChoose>
                <CeldaChoose></CeldaChoose>
                </ColumnBoocking>



                <ColumnBoocking>
                <TitleColumn>Thrusday</TitleColumn>
                <CeldaChoose></CeldaChoose>
                <CeldaChoose></CeldaChoose>
                <CeldaChoose></CeldaChoose>
                <CeldaChoose></CeldaChoose>
                <CeldaChoose></CeldaChoose>
                <CeldaChoose></CeldaChoose>
                <CeldaChoose></CeldaChoose>
                <CeldaChoose></CeldaChoose>
                <CeldaChoose></CeldaChoose>
                <CeldaChoose></CeldaChoose>
                   
                </ColumnBoocking>



                <ColumnBoocking>
                <TitleColumn>Friday</TitleColumn>
                <CeldaChoose></CeldaChoose>
                <CeldaChoose></CeldaChoose>
                <CeldaChoose></CeldaChoose>
                <CeldaChoose></CeldaChoose>
                <CeldaChoose></CeldaChoose>
                <CeldaChoose></CeldaChoose>
                <CeldaChoose></CeldaChoose>
                <CeldaChoose></CeldaChoose>
                <CeldaChoose></CeldaChoose>
                <CeldaChoose></CeldaChoose>
                    
                </ColumnBoocking>


                 
                <ColumnBoocking>
                <TitleColumn>Saturday</TitleColumn>
                <CeldaChoose></CeldaChoose>
                <CeldaChoose></CeldaChoose>
                <CeldaChoose></CeldaChoose>
                <CeldaChoose></CeldaChoose>
                <CeldaChoose></CeldaChoose>
                <CeldaChoose></CeldaChoose>
                <CeldaChoose></CeldaChoose>
                <CeldaChoose></CeldaChoose>
                <CeldaChoose></CeldaChoose>
                <CeldaChoose></CeldaChoose>
                </ColumnBoocking>



                <ColumnBoocking
                style={{'borderRight': 'solid 3px purple'}}
                >
                <TitleColumn>Sunday</TitleColumn>
                <CeldaChoose></CeldaChoose>
                <CeldaChoose></CeldaChoose>
                <CeldaChoose></CeldaChoose>
                <CeldaChoose></CeldaChoose>
                <CeldaChoose></CeldaChoose>
                <CeldaChoose></CeldaChoose>
                <CeldaChoose></CeldaChoose>
                <CeldaChoose></CeldaChoose>
                <CeldaChoose></CeldaChoose>
                <CeldaChoose></CeldaChoose>
                </ColumnBoocking>

            </SectionBoocking>

            <ButtonContainerBoocking>
                <ButtonBoocking>
                    Send
                </ButtonBoocking>
            </ButtonContainerBoocking>
        </BodyBooking>
    )
}

export default Booking
