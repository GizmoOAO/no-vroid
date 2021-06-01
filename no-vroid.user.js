// ==UserScript==
// @name        No VRoid
// @namespace   https://github.com/GizmoOAO/no-vroid
// @match       https://booth.pm/*/search/*
// @grant       none
// @version     1.0
// @author      GizmoOAO
// @description No VRoid pls
// ==/UserScript==
(function () {
  'use strict'

  let searchKeys = [
    'vrc',
    'vrchat'
  ]

  function noVRoid() {
    document.querySelectorAll('.item-card').forEach(node => {
      let titleNode = node.querySelector('.item-card__title')
      let title = titleNode && titleNode.textContent ? titleNode.textContent.toLowerCase() : ''
      if (title.search('vroid') !== -1) {
        console.log("[No VRoid]", titleNode.textContent)
        node.style.display = 'none'
      }
    })
  }

  function getSearchValue() {
    let query = document.getElementById('query')
    return query ? query.value.toLowerCase() : ''
  }

  let searchValue = getSearchValue()
  if (searchKeys.some(key => {
    return key === searchValue
  })) noVRoid()
})()
