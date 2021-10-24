// variaveis: let (variavel ser mudada depois) ou const (variavel permanecer constante)
const LinksSocialMedia = {
  github: 'sabiny6',
  instagram: 'sabiny_arts',
  twitter: 'Sabiny32104655'
}

function changeSocialMediaLinks() {
  //document.getElementById('userName').textContent = "Sabiny Vallentinne"
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      icon.textContent = data.login
    })
}

getGitHubProfileInfos()

//fetch() --> guarda um valor dentro dos patênteses

//.then() --> é uma Promise (promessa) que serve para pegar o valor do Fetch (caso o valor tenha sido guardado)

//ARROW FUNCTIONS são funções diminuídas, só usa-se o argumento ("argumento => {}"), eliminando a necessidade de usar o termo 'function' e determinar o nome da função. O sinal de => que deu o nome dessa 'função' de ARROW (flecha)
