

function formatMessage(username, text,room) { //permet de recuperer dans le message le nom du particpant, ce qu'il envoie et quel sujet est traité!!le tout sous la forme d'un objet
  return {
    username,
    text,
    room
  };
}

module.exports = formatMessage;