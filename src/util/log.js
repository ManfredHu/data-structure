export default (msg, parentContainer) => {
  const logContainer = document.createElement('p')
  logContainer.appendChild(document.createTextNode(msg))
  if (!parentContainer) parentContainer = document.getElementById('processLog')
  parentContainer.appendChild(logContainer)
}
