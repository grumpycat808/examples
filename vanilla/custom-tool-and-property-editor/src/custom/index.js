import './index.css'

import React from 'react'

unlayer.registerPropertyEditor({
  name: 'color_picker',
  layout: 'bottom',
  Widget: function(node, value, updateValue) {
    var input = document.createElement('input');
    input.value = value;
    node.appendChild(input);

    var redButton = document.createElement('button');
    redButton.innerHTML = 'Red';
    redButton.onclick = () => updateValue('#ff0000');
    node.appendChild(redButton);

    var greenButton = document.createElement('button');
    greenButton.innerHTML = 'Green';
    greenButton.onclick = () => updateValue('#00ff00');
    node.appendChild(greenButton);

    var blueButton = document.createElement('button');
    blueButton.innerHTML = 'Blue';
    blueButton.onclick = () => updateValue('#0000ff');
    node.appendChild(blueButton);

    return function(newValue) {
      input.value = newValue
    }
  },
});

const Viewer = (props) => {
  const { values: { color } } = props

  return (
    <div style={{color}} id="yes">I'm a test button</div>
  )
}

unlayer.registerTool({
  type: 'whatever',
  category: 'contents',
  label: 'My Tool',
  icon: 'fa-smile',
  values: {
  },
  options: {
    default: {
      title: null,
    },
    text: {
      title: "Text",
      position: 1,
      options: {
        "color": {
          "label": "Color",
          "defaultValue": "#000",
          "widget": "color_picker"
        }
      },
    }
  },
  renderer: {
    Viewer: Viewer,
    exporters: {
      web: function() {
      },
      email: function() {
      }
    },
  },
});
