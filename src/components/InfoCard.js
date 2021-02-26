import React from 'react'
const isIncome = Math.round(Math.random());
function InfoCard() {
    return (
        <div style={{ textAlign: 'center', padding: '0 10%' }}>
            Try Saying:<br/>
            Add {isIncome ? 'Income ' : 'Expense '}
            for {isIncome ? '$100 ' : '$50 '}
            in category {isIncome ? 'Business ' : 'Car '}
            for {isIncome ? 'Monday ' : 'Tuesday '}.

        </div>
    )
}

export default InfoCard
