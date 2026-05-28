const paymentSarseConfig = { serverId: 2280, active: true };

const paymentSarseHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_2280() {
    return paymentSarseConfig.active ? "OK" : "ERR";
}

console.log("Module paymentSarse loaded successfully.");