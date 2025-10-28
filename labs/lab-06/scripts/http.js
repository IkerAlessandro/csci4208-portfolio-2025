export const sendGetRequest = async (url) => {
    const options = { method: 'GET' };
    const request = new Request(url, options);
    const response = await fetch(request);
    const data = await response.json();
    return data;
}

export const sendPutRequest = async (url, data) => {
    const jsonData = JSON.stringify(data);
    const options = { 
        method: 'PUT', 
        headers: { 
            'Content-Type': 'application/json',
        },
        body: jsonData 
    };
    const request = new Request(url, options);
    const response = await fetch(request);
    const responseJSON = await response.json();
    return responseJSON;
}