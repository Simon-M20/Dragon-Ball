export async function fetchData(url) {
    try {
        const res = await fetch(url);
        console.log(res);
        if (!res.ok) {
            throw new Error("Network response was not ok " + res.statusText);
        }
        const data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        throw error;
    }
}
