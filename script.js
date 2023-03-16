document.getElementById('search-input').addEventListener('keyup', async (e) => {
  var input = e.target.value
  const node = document.getElementById('results')

  if (input.length > 0) {
    var xmlhttp = new XMLHttpRequest()
    xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        node.innerHTML = ''
        var names = this.responseText.split('#')
        if (names.length === 1 && names[0] == 'Unable to connect') {
          const child = document.createElement('span')
          const textnode = document.createTextNode('Unable to connect')
          child.appendChild(textnode)
          node.appendChild(child)
        } else {
          names = names.filter(
            (name) => name.includes(input) && name.length > 0
          )
          if (names.length === 0) {
            const child = document.createElement('span')
            const textnode = document.createTextNode('Nothing Found...')
            child.appendChild(textnode)
            node.appendChild(child)
          } else {
            names.forEach((name) => {
              const child = document.createElement('li')
              const textnode = document.createTextNode(name)
              child.appendChild(textnode)
              node.appendChild(child)
            })
          }
        }
      }
    }
    xmlhttp.open('GET', '.\\php\\public\\index.php', true)
    xmlhttp.send()
  } else {
    node.innerHTML = ''
  }
  // Search comments
  // Use this API: https://jsonplaceholder.typicode.com/comments?postId=3
  // Display the results in the UI

  // Things to look out for
  // ---
  // Use es6
  // Error handling
})
