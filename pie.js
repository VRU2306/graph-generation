import React from 'react'
import { PieChart } from '@opd/g2plot-react'

const config = {
    forceFit: false,
    title: {
        visible: true,
    },
    description: {
        visible: true,
    },
    radius: 0.8,
    angleField: 'value',
    colorField: 'type',
    label: {
        visible: false,
        type: 'inner',
    },
}

function dasa(data) {
    let datta = [
        {
            type: 'absent',
            value: data["total days"] - data["present"],
        },
        {
            type: 'present',
            value: data["present"],
        },

    ]

    return datta
}

export default ({ data }) => {
    config.data = dasa(data)
    return <section>
        <h2>my attendence</h2>
        <PieChart {...config} />
        <h1 style={{ color: "red", textAlign: "center", fontFamily: "comic sans ms", fontStyle: "Italic", backgroundColor: "black" }}>Total days = {data["total days"]}</h1>
    </section >

}