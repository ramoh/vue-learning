const baseUrl = "https://jsonplaceholder.typicode.com"
export default {
    created() {
        console.log("logged from mixin");
    },
    methods: {
        getUserInfo(userId) {
            console.log("Fetching user information for id:", userId);
            return fetch(`${baseUrl}/users/${userId}`)
                .then(res => res.json())
        }
    }
}