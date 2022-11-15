import React from 'react'

const TestComponent = () => {
    return (
        <div>
            <div style={{ 'textAlign': 'center' }}>test</div>
            <p style={{ 'fontWeight': 'bold' }}>thead is not working in quill2</p>
            <table>
                <thead>
                    <tr>
                        <th>h1</th>
                        <th>h2</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>d1</td>
                        <td>d2</td>
                    </tr>
                </tbody>
            </table>
            <br />
            <p style={{ 'fontWeight': 'bold' }}>only tbody is working in quill2</p>
            <table>
                <tbody>
                    <tr>
                        <td>h1</td>
                        <td>22</td>
                    </tr>
                    <tr>
                        <td>d1</td>
                        <td>d2</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TestComponent