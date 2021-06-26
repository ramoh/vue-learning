let ws;

export const state = {
    messages: []
};
export const mutations = {
    setMessage(state, message) {
        state.messages.push(message);
    }
};
export const actions = {
    getMessages({ commit }) {
        if (ws) {
            return;
        }
        ws = new WebSocket("wss://demo.websocket.me/v3/channel_1?api_key=oCdCMcMPQpbvNjUIzqtvF1d2X2okWpDQj4AwARJuAgtjhzKxVEjQU6IdCjwm&notify_self");
        ws.addEventListener("message", (e) => {
            console.log("Data from websocket", e.data);
            commit("setMessage", e.data);
        });
        ws.addEventListener("open", () => {
            ws.send("hello from rajesh!!!");
        });
    },

    // eslint-disable-next-line no-unused-vars
    sendMessage({ commit }, msg) {
        console.log("sending message", msg);
        if (ws) {
            ws.send(msg);
        }
    }
}

export const namespaced = true;

console.log("echo-web store exported");