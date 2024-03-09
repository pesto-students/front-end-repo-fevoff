import axios from "axios";

const PutMethod = async (url, id, objData) => {

    const urlLink = url + id;

    const config = {
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

export default PutMethod;