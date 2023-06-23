const messages = {
};

const emails = {
};


export default function mockFetch(url) {
    switch (url) {
        case "http://localhost:8000/letter/": {
            return {
                ok: true,
                status: 201,
                json: async () => messages,
            };
        }
        case "http://localhost:8000/contact/": {
            return {
                ok: true,
                status: 201,
                json: async () => emails,
            };
        }
        default: {
            throw new Error(`Unhandled request: ${url}`);
        }
    }
}