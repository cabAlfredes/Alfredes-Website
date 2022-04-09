import * as colors from '.'

import { calculateIlluminance } from '@lasoo/theme'

export default {
  title: 'Theme/Colors',
}

const Template = () => {
  const topColors: Record<string, Record<string | number, string>> = {}

  const localColors = colors as Record<
    string,
    string | Record<string | number, string>
  >
  for (const color in colors) {
    const localColor = localColors[color]

    if (typeof localColor === 'string') {
      topColors[color] = { color: localColor }
    } else {
      topColors[color] = localColors[color] as Record<string | number, string>
    }
  }
  return (
    <div>
      <h1>Colours</h1>
      {Object.entries(topColors).map((color, index) => (
        <div key={color[0]}>
          <h3>Color - {color[0]}</h3>
          <table>
            <thead>
              <tr>
                <td>Variant</td>
                <td>color</td>
              </tr>
            </thead>
            <tbody>
              {Object.entries(color[1]).map((colorMap) => (
                <tr key={colorMap[0]}>
                  <td>{colorMap[0]}</td>
                  <td
                    style={{
                      backgroundColor: colorMap[1],
                      color:
                        (calculateIlluminance(colorMap[1]) ?? 0) < 0.2
                          ? 'white'
                          : 'black',
                    }}
                  >
                    {colorMap[1]} - {calculateIlluminance(colorMap[1])}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  )
}

export const Base = Template.bind({})
