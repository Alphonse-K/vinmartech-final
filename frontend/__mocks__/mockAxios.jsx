const messages = [
{   
    author: 'alphonse',
    email: 'kan@mail.com',
    message: 'true'
}
]
const emails = [
    {
        email: 'kana@gmail.com',
        consent: false
    }
]

export default function mockFetch(url) {
    switch (url) {
        case "http://localhost:8000/letter/": {
            return {
                ok: true,
                status: 201,
                json:  () => emails,
            };
        }
        case "http://localhost:8000/contact/": {
            return {
                ok: true,
                status: 201,
                json:  () => messages,
            };
        }
        default: {
            throw new Error(`Unhandled request: ${url}`);
        }
    }
}
