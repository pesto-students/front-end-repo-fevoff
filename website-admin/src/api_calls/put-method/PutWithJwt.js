import axios from "axios";

const PutMethodWithJwt = async (url, id, objData) => {

    const urlLink = url + id;

    const jwtToken = localStorage.getItem('admin_token');

    const headers = {
        Authorization: `Bearer ${jwtToken}`,
    };

    const config = {
        headers: headers,
        url: urlLink,
        method: 'PUT',
        data: objData,
    }

    try {

        const response = await axios.request(config);

        return {
            status: true,
            message: response.data.message || "",
            data: response.data.data,
        };

    } catch (error) {

        return {
            status: false,
            message: (error.response && error.data) || error.message,
            data: []
        };

    }

};

export default PutMethodWithJwt;