import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '16c5vmgl',
    dataset: 'production'
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/cli#auto-updates
     */
    autoUpdates: true,
  }
})
