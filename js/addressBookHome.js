window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const HeaderHtml = "<tr><th>Full Name</th><th>Address</th><th>City</th><th>State</th>" +
    "<th>Zip Code</th><th>Phone Number</th><th>Options</th></tr>";
    const innerHtml = `${HeaderHtml}   
                <tr>
                    <td>Robins Chandna</td>
                    <td>Vijay nagar</td>
                    <td>Ghaziabad</td>
                    <td>Uttar Pradesh</td>

                    <td>201009</td>
                    <td>+91 0987654321</td>
                    <td>
                        <img id="1" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
                        <img id="1" alt="edit" onclick="update(this)" src="../assets/icons/create-black-18dp.svg">
                    </td>
                </tr>
                `;
    document.querySelector('#display').innerHTML = innerHtml;
}