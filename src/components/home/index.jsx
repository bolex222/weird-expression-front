import React from 'react'
import ExpressionList from '../expression_list'
import NewExpressionForm from '../new_expression_form'

export default function Home({firebaseLoaded}) {

    return (
        <>
            <ExpressionList firebaseLoaded={firebaseLoaded}/>
            <NewExpressionForm firebaseLoaded={firebaseLoaded}/>
        </>
    )
}