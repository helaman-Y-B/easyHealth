export async function getData(url) {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error("Network response was not ok");
    } else {
        const data = await res.json();
        return data;
    }
}