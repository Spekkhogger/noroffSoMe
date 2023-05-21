import { load } from "../storage.mjs";

/**
 * Generates the headers object for an authenticated request.
 * @returns {Object} The headers object containing the necessary authentication headers.
 */
export function header() {
    const token = load("token");

    return {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    }
}


/**
 * Performs an authenticated fetch request with the provided URL and options.
 * @param {string} url - The URL to make the fetch request to.
 * @param {Object} [options={}] - The options to customize the fetch request.
 * @returns {Promise<Response>} A promise that resolves to the fetch response.
 */
export async function authFetch(url, options = {}) {
    return fetch(url, {
        ...options,
        headers: header()
        })
}