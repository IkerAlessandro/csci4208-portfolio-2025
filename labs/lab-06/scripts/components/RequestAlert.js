const RequestAlert = (response_code) => {
    if (response_code == 0) return '';
    else return (`
        <div>
        <h4>Wait longer to refresh the question!</h4>
        </div>
        `)

}

export default RequestAlert;