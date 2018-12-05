import React from 'react';

const Contact = ({ id, name, phone, remove }) => (
    <tr key={id}>
        <td>
            {name}
        </td>
        <td>
            {phone}
        </td>
        <td>
            <button onClick={() => remove(id)}>Delete</button>
        </td>
    </tr>
)


export default Contact;