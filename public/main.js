const qs = e => document.querySelector(e)

const main = () => {
  if (qs('h1.hello-world')) {
    qs('h1.hello-world').textContent = 'Hello, World!'
  }
}

document.addEventListener('DOMContentLoaded', main)
