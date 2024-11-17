console.log("Hello World!");

const url = 'http://localhost:3000/users';

const getDataFromServer = async () => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("ERROR:", error.message);
    }
}

getDataFromServer();
