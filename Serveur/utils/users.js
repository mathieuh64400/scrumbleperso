const users = [];
// Join user to chat
function userJoin(id, room, username) {
    const user = {
        id,
        room,
        username
    };

    users.push(user);

    return user;
}
//   obtention du participant actuel
function getCurrentUser(id) {
    return users.find(user => user.id === id)
}
// cas de la deconnexion de l'utilisateur
function userLeave(id) {
    const index = users.findIndex(user => user.id === id)
    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
}
// obtention du sujet d'utilisation dite issue Room car un sujet d'utilisation =1 room
// function getRoomsUsers() {
//     console.log(room);
//     return users.filter(user => user.room ===room)
    
// }
module.exports = {
    userJoin,
    getCurrentUser,
    userLeave,
    // getRoomsUsers

}