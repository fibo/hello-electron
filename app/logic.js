var body = document.body

function addPreview (file) {
  var preview = document.getElementById('preview')

  var el = document.createElement('img')
  el.src = file.path
  preview.appendChild(el)
}

/**
 * Return true if file is an image.
 *
 * It checks that file.type is something like image/*
 * for example: image/png, image/jpg, image/gif, etc
 *
 * @param {Object} file
 * @returns {Boolean}
 */

function isImage (file) {
  return file.type.split('/')[0] === 'image'
}

function addFile (file) {
  console.log(file)

  if (isImage(file)) {
    addPreview(file)
  } else {
    // TODO if file.type = '' it is probably
    // a folder, walk into it and find images inside
  }
}

function falsy () { return false }

function onDrop (ev) {
  ev.preventDefault()

  var fileList = ev.dataTransfer.files

  for (var i = 0; i < fileList.length; i++) {
    var file = fileList[i]
    addFile(file)
  }

  return false
}

body.ondragover = falsy
body.ondragleave = falsy
body.ondragend = falsy
body.ondrop = onDrop
