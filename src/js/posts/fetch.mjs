export function header() {
    const token = localStorage.getItem("token");

    return {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    }
}

export async function authFetch(url, options = {}) {
    return fetch(url, {
        ...options,
        headers: header()
        })
}