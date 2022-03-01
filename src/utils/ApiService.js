/**
 * Utility methods to be used for invoking API methods
 */
import Axios from "axios";

const hostUrl = process.env.REACT_APP_API_URL || 'https://knwrn-frontend-challenge.free.beeceptor.com/'

export const getDefaultHeaders = () => {
    return { "Content-Type": "application/json" };
}


export function httpGet(endpoint, options) {
    return new Promise((resolve, reject) => {
        const url = endpoint ? `${hostUrl}/${endpoint}` : `${hostUrl}`;

        Axios.get(url, {
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                debugger;
                if (response.status === 200) {
                    resolve(response);

                    resolve({
                        statusCode: response.status,
                        data: response
                    });
                }
                else {
                    resolve({
                        statusCode: response.status,
                        data: null
                    });
                }
            })
            .catch((error) => {
                console.log("Error", error)
                reject(error)
            })
    });
}



