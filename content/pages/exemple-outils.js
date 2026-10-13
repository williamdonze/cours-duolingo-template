// Petite bibliothèque d'exemple du modèle (module importable, champ "fichiers" d'un exercice DOM).
export function getNode(selector, dom = document) {
  return dom.querySelector(selector);
}

export function addLine(list, text) {
  const li = document.createElement('li');
  li.textContent = text;
  list.append(li);
  return li;
}
