export async function getLinksSave(key){
  const myLinks = await localStorage.getItem(key)
  let linksSaves = JSON.parse(myLinks) || []
  return linksSaves
}

export async function saveLink(key,newLink){
  let linksStored = await getLinksSave(key)
  const hasLink = linksStored.some(link => link.id === newLink.id)
  if(hasLink){
    alert('The link alredy exists!')
    return;
  }
  linksStored.push(newLink)
  await localStorage.setItem(key,JSON.stringify(linksStored))

}

export async function deleteLink(links,id){
  let myLinks = links.filter(item =>{
    return (item.id !== id)
  })
  localStorage.setItem("@reactshortener",JSON.stringify(myLinks));
  return myLinks
}