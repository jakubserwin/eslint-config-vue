import { pluginTailwind } from '../plugins'
import type { FlatConfigItem } from '../types'

export async function tailwindcss(): Promise<FlatConfigItem[]> {
  return [
    {
      name: 'antfu:tailwind',
      plugins: {
        tailwindcss: pluginTailwind,
      },
      rules: {
        'tailwindcss/no-custom-classname': [
          'off',
          {
            ignore: ['i*'],
          },
        ],
      },
    },
  ]
}