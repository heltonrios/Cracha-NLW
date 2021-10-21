const linksSocialMedia = {
  github: 'heltonrios',
  youtube: 'rocketseat',
  facebook: 'Heltinhoo',
  instagram: 'heltonrios',
  twitter: 'heltonrios'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`

    alert(li.children[0].href)
  }
}

changeSocialMediaLinks()
